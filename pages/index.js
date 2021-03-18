import Head from "next/head";
import Link from "next/link";
import { Heading, Box, Text, Grid } from "@chakra-ui/react";
import Title from "../components/Title";

const numberToOrdinal = (number) => {
  const ordinalRules = new Intl.PluralRules("en", {
    type: "ordinal",
  });
  const suffixes = {
    one: "st",
    two: "nd",
    few: "rd",
    other: "th",
  };
  return `${number}${suffixes[ordinalRules.select(number)]}`;
};

// TODO: make custom pages for each github repo/commit
export default function Home({ repos, githubData, typingData }) {
  return (
    <>
      <Head>
        <title>Mito's Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Title text="What have I been up to?" />

        <Grid
          templateColumns={"repeat(auto-fit, minmax(325px, 1fr))"}
          gap="20px"
          mb="30px"
        >
          <Box
            border="3px dashed rgb(200, 210, 215)"
            borderRadius="15px"
            p="15px"
          >
            <Heading size="md" as="h3">
              GitHub
            </Heading>
            <Text>
              Most Recent Actions{" "}
              <span style={{ color: "rgb(200, 210, 215)" }}>
                / {repos} repos
              </span>
            </Text>
            {githubData.map((event) => (
              <Box key={event.id} mt="30px">
                <Heading size="sm" as="h4">
                  <Link
                    href={`https://github.com/Mito9999/portfolio/commit/${event.payload.commits[0].sha}`}
                  >
                    {event.repo.name}
                  </Link>
                </Heading>
                <Text>{event.payload.commits[0].message}</Text>
                <Text>
                  {new Date(event.created_at).toLocaleString("en-US", {
                    month: "numeric",
                    day: "numeric",
                    hour: "numeric",
                    minute: "numeric",
                  })}
                </Text>
              </Box>
            ))}
          </Box>

          <Box
            border="3px dashed rgb(200, 210, 215)"
            borderRadius="15px"
            p="15px"
          >
            <Heading size="md" as="h3">
              Typing
            </Heading>
            <Text>
              Most Recent Tests{" "}
              <span style={{ color: "rgb(200, 210, 215)" }}>
                / {typingData.testsTaken}
              </span>
            </Text>
            {typingData.scores.map((score, idx) => (
              <Box key={score.date} mt="30px">
                <Heading size="sm" as="h4">
                  {numberToOrdinal(typingData.testsTaken - idx)} Test
                </Heading>
                <Text>
                  {score.wpm} WPM &amp; {score.mistakes} Mistakes
                </Text>
                <Text>
                  {new Date(score.date).toLocaleString("en-US", {
                    month: "numeric",
                    day: "numeric",
                    hour: "numeric",
                    minute: "numeric",
                  })}
                </Text>
              </Box>
            ))}
          </Box>
        </Grid>
      </main>
    </>
  );
}

export async function getServerSideProps() {
  let repos = 17;
  let githubData = [];
  let typingData = { scores: [], average: 0, testsTaken: 615 };

  try {
    const githubRes = await fetch(
      "https://api.github.com/users/Mito9999/events"
    );
    const ghData = await githubRes.json();
    githubData = ghData
      .filter((event) => event.type === "PushEvent")
      .slice(0, 5);

    const ghProfileRes = await fetch("https://api.github.com/users/Mito9999");
    const { public_repos } = await ghProfileRes.json();
    repos = public_repos;

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

    typingData = {
      scores: last5Scores,
      average: avg_norm,
      testsTaken: Number(totalTypingTests),
    };
  } catch (err) {
    console.log(err);
  }

  return {
    props: { repos, githubData, typingData },
  };
}
