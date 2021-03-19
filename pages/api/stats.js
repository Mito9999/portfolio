export default async function handler(_, res) {
  try {
    const githubRes = await fetch(
      "https://api.github.com/users/Mito9999/events"
    );
    const ghData = await githubRes.json();
    const githubData = ghData
      .filter((event) => event.type === "PushEvent")
      .slice(0, 5);

    const ghProfileRes = await fetch("https://api.github.com/users/Mito9999");
    const { public_repos: repos } = await ghProfileRes.json();

    const headersArray = [
      ["authority", "10fastfingers.com"],
      ["content-length", "0"],
      ["accept", "application/json, text/javascript, */*; q=0.01"],
      [
        "user-agent",
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.152 Safari/537.36",
      ],
      ["x-requested-with", "XMLHttpRequest"],
      ["origin", "https://10fastfingers.com"],
    ];
    let myHeaders = new Headers();
    headersArray.forEach((header) => myHeaders.append(header[0], header[1]));

    const typingRes = await fetch(
      "https://statboard.vercel.app/api/proxy/10fastfingers.com/users/get_graph_data/0/2069581",
      {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      }
    );
    const { avg_norm, graph_data, languages_sorted } = await typingRes.json();
    const totalTypingTests = languages_sorted[0][0].anzahl;
    const last5Scores = graph_data
      .slice(graph_data.length - 5, graph_data.length)
      .map((scoresObj) => ({
        wpm: scoresObj.g1,
        date: scoresObj.date,
        mistakes: scoresObj.backspace_pressed,
      }))
      .reverse();

    const typingData = {
      scores: last5Scores,
      average: avg_norm,
      testsTaken: Number(totalTypingTests),
    };
    res.status(200).json({ repos, githubData, typingData });
  } catch (err) {
    res.status(500);
  }
}
