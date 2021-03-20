import Head from "next/head";
import Link from "next/link";
import {
  Heading,
  Box,
  Text,
  Grid,
  Flex,
  Badge,
  Spinner,
} from "@chakra-ui/react";
import Title from "../components/Title";
import { useState, useEffect } from "react";

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

const skills = [
  {
    title: "HTML",
    color: "orange",
    iconClass: "devicon-html5-plain",
  },
  {
    title: "CSS",
    color: "blue",
    iconClass: "devicon-css3-plain",
  },
  {
    title: "JavaScript",
    color: "yellow",
    iconClass: "devicon-javascript-plain",
  },
  {
    title: "TypeScript",
    color: "blue",
    iconClass: "devicon-typescript-plain",
  },
  {
    title: "Git",
    color: "blackAlpha",
    iconClass: "devicon-git-plain",
  },
  {
    title: "MongoDB",
    color: "green",
    iconClass: "devicon-mongodb-plain",
  },
  {
    title: "Express",
    color: "gray",
    iconClass: "devicon-express-original",
  },
  {
    title: "React",
    color: "blue",
    iconClass: "devicon-react-original",
  },
  {
    title: "NodeJS",
    color: "green",
    iconClass: "devicon-nodejs-plain",
  },
];

// TODO: make custom pages for each github repo/commit
export default function Home() {
  const [stats, setStats] = useState({
    isCached: false,
    repos: 17,
    githubData: [],
    typingData: {
      scores: [],
      average: 0,
      testsTaken: 615,
    },
  });

  useEffect(() => {
    const getStats = async () => {
      const res = await fetch("/api/stats");
      const data = await res.json();
      setStats(data);
    };
    getStats();
  }, []);

  return (
    <>
      <Head>
        <title>Mito's Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.10.1/devicon.min.css"
        />
      </Head>

      <main>
        <Title text="Skills" />
        <Flex justify="space-between" wrap="wrap" fontSize="100px">
          {skills.map((skill) => (
            <Flex
              direction="column"
              key={skill.title}
              _hover={{ transform: "scale(1.08)" }}
              transition="transform 200ms"
            >
              <Badge colorScheme={skill.color} textAlign="center" mx="4px">
                {skill.title}
              </Badge>
              <Box fontSize="100px">
                <i className={skill.iconClass}></i>
              </Box>
            </Flex>
          ))}
        </Flex>

        <Title text="Personal Dashboard" />

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
                / {stats.repos} repos
              </span>
            </Text>
            {stats.githubData.length > 0 ? (
              stats.githubData.map((event) => (
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
              ))
            ) : (
              <Spinner size="lg" mt="10px" />
            )}
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
                / {stats.typingData.testsTaken}
              </span>
            </Text>
            {stats.typingData.scores.length > 0 ? (
              stats.typingData.scores.map((score, idx) => (
                <Box key={score.date} mt="30px">
                  <Heading size="sm" as="h4">
                    {numberToOrdinal(stats.typingData.testsTaken - idx)} Test
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
              ))
            ) : (
              <Spinner size="lg" mt="10px" />
            )}
          </Box>
        </Grid>
      </main>
    </>
  );
}
