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

    const github = fetch(GITHUB_URL + "/events").then((r) => r.json());
    const profile = fetch(GITHUB_URL).then((r) => r.json());
    const typing = fetch(TYPING_URL, TYPING_OPTIONS).then((r) => r.json());

    const data = await Promise.all([github, profile, typing]);

    const ghData = data[0]
      .filter((event) => event.type === "PushEvent")
      .slice(0, 5);
    const { public_repos: repos } = data[1];
    const { avg_norm, graph_data, languages_sorted } = data[2];

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
    const jsonData = { repos, ghData, typingData };
    cache.put("values", jsonData, FIVE_MINUTES);
    res.status(200).json({ isCached: false, ...jsonData });
  } catch (err) {
    console.log(err);
    res.status(500);
  }
}
