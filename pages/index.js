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
  Link as ChakraLink,
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
        <title>Mito</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.10.1/devicon.min.css"
        />
      </Head>

      <main>
        <Title text="About Me" />
        <Text mb="25px" textAlign={["left", "justify"]}>
          Hey! I'm Mito, a dependable web developer. I have been coding
          professionally for over a year, and amateurly for over four years. I
          am always eager to learn new technologies and techniques. My primary
          focus has been on front-end development, but I also have experience
          with back-end technologies. Through the development of various
          projects, I have found new ways to improve efficiency and
          sustainability.
        </Text>
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
          <Box>
            <Box borderLeft="3px solid" pl="9px" borderColor="blue.500">
              <Heading size="md" as="h3">
                <ChakraLink href="https://github.com/Mito9999" isExternal>
                  GitHub
                </ChakraLink>
              </Heading>
              <Text>
                Most Recent Actions{" "}
                <Text as="span" color="rgb(140, 150, 155)">
                  / {stats.repos} repos
                </Text>
              </Text>
            </Box>
            {stats.githubData.length > 0 ? (
              stats.githubData.map((event, idx) => (
                <Box
                  key={event.id}
                  my="15px"
                  py="15px"
                  borderBottom={
                    idx < stats.githubData.length - 1
                      ? "3px dashed rgb(234, 240, 245)"
                      : "none"
                  }
                >
                  <Heading size="sm" as="h4">
                    <Link
                      href={`https://github.com/Mito9999/${
                        event.repo.name.split("/")[1]
                      }/commit/${event.payload.commits[0].sha}`}
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

          <Box>
            <Box borderLeft="3px solid" pl="9px" borderColor="blue.500">
              <Heading size="md" as="h3">
                <ChakraLink
                  href="https://10fastfingers.com/user/2069581/"
                  isExternal
                >
                  Typing
                </ChakraLink>
              </Heading>
              <Text>
                Most Recent Tests{" "}
                <Text as="span" color="rgb(140, 150, 155)">
                  / {stats.typingData.testsTaken}
                </Text>
              </Text>
            </Box>
            {stats.typingData.scores.length > 0 ? (
              stats.typingData.scores.map((score, idx) => (
                <Box
                  key={score.date}
                  my="15px"
                  py="15px"
                  borderBottom={
                    idx < stats.typingData.scores.length - 1
                      ? "3px dashed rgb(234, 240, 245)"
                      : "none"
                  }
                >
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
