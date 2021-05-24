import axios from "axios";
import { JSDOM } from "jsdom";

const getContributions = async (username) => {
  try {
    const { data: html } = await axios.get(`https://github.com/${username}`);
    const dom = new JSDOM(html);
    const $ = (selector) => dom.window.document.querySelector(selector);

    const contribSelector =
      "div.js-yearly-contributions > div:nth-child(1) > h2";
    const contributions = $(contribSelector).textContent.trim().split("\n")[0];

    return Number(contributions);
  } catch {
    return 710;
  }
};

const FIVE_MINUTES = 5 * 60 * 1000;
const GITHUB_URL = "https://api.github.com/users/Mito9999";
const TYPING_URL =
  "https://statboard.vercel.app/api/proxy/10fastfingers.com/users/get_graph_data/0/2069581";
const TYPING_OPTIONS = {
  method: "GET",
  headers: {
    authority: "10fastfingers.com",
    "content-length": "0",
    accept: "application/json, text/javascript, */*; q=0.01",
    "user-agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.152 Safari/537.36",
    "x-requested-with": "XMLHttpRequest",
    origin: "https://10fastfingers.com",
  },
  redirect: "follow",
};

import cache from "memory-cache";
export default async function handler(_, res) {
  try {
    const values = cache.get("values");
    if (values) {
      res.json({ isCached: true, ...values });
      return;
    }

    const githubP = fetch(GITHUB_URL + "/events").then((r) => r.json());
    const profileP = fetch(GITHUB_URL).then((r) => r.json());
    const typingP = fetch(TYPING_URL, TYPING_OPTIONS).then((r) => r.json());
    const contributionsP = getContributions("Mito9999");

    const data = await Promise.all([
      githubP,
      profileP,
      typingP,
      contributionsP,
    ]);

    const ghData = data[0]
      .filter((event) => event.type === "PushEvent")
      .slice(0, 5);
    const { login, public_repos, followers, public_gists, location } = data[1];
    const { avg_norm, graph_data, languages_sorted } = data[2];
    const contributions = data[3];

    const ghProfile = {
      name: login,
      repos: public_repos,
      followers,
      gists: public_gists,
      location,
      contributions,
    };

    const last5Scores = graph_data
      .slice(graph_data.length - 5, graph_data.length)
      .map((scoresObj) => ({
        wpm: scoresObj.g1,
        date: scoresObj.date,
        mistakes: scoresObj.backspace_pressed,
      }))
      .reverse();
    const totalTypingTests = languages_sorted[0][0].anzahl;

    const typingData = {
      average: avg_norm,
      scores: last5Scores,
      testsTaken: Number(totalTypingTests),
    };
    const jsonData = { profile: ghProfile, githubData: ghData, typingData };
    cache.put("values", jsonData, FIVE_MINUTES);
    res.status(200).json({ isCached: false, ...jsonData });
  } catch (err) {
    console.log(err);
    res.status(500);
  }
}
