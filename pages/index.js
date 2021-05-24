import {
  Badge,
  Box,
  Flex,
  Grid,
  Heading,
  Image as ChakraImage,
  Link as ChakraLink,
  Spinner,
  Text,
} from "@chakra-ui/react";
import Head from "next/head";
import Link from "next/link";
import { useEffect, useState } from "react";
import Title from "../components/Title";
import { bio, skills } from "../data/content";
import {
  FollowersIcon,
  GithubIcon,
  LocationIcon,
  RepoIcon,
} from "../data/icons";
import useView from "../hooks/useView";

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
export default function Home() {
  useView("/");
  const [isLoading, setIsLoading] = useState(false);
  const [stats, setStats] = useState({
    isCached: false,
    profile: {
      name: "Mito9999",
      repos: 24,
      followers: 3,
      gists: 3,
      location: "United States",
    },
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
      setIsLoading(true);
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
        <Box minH="calc(100vh - 136px)">
          <Flex direction={["column", "column", "row"]}>
            <Box mb="25px" mr={["0px", "0px", "15px"]}>
              <Title text="About Me" />
              <Text textAlign={["left", "justify"]}>{bio}</Text>
            </Box>

            <Box mb="25px" ml={["0px", "0px", "15px"]}>
              <Title text="Profile" Icon={GithubIcon} />
              <Flex
                direction="column"
                bgColor="gray.50"
                p="20px"
                borderRadius="5px"
              >
                {!isLoading && <Spinner ml="auto" mb="-16px" size="sm" />}
                <Flex direction="row" align="center" minW="300px">
                  <ChakraImage
                    w="120px"
                    h="120px"
                    borderRadius="999px"
                    border="2px solid"
                    borderColor="blue.400"
                    src="https://avatars.githubusercontent.com/u/58613559"
                  />
                  <Box ml="20px">
                    <Text fontWeight="bold">{stats.profile.name}</Text>
                    <Flex align="center">
                      <LocationIcon />
                      <Text ml="5px">{stats.profile.location}</Text>
                    </Flex>
                    <Flex align="center">
                      <RepoIcon />
                      <Text ml="5px">{stats.profile.repos} Projects</Text>
                    </Flex>
                    <Flex align="center">
                      <FollowersIcon />
                      <Text ml="5px">{stats.profile.followers} Followers</Text>
                    </Flex>
                  </Box>
                </Flex>
              </Flex>
            </Box>
          </Flex>

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
        </Box>

        <Box minH="calc(100vh - 36px)">
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
                    / {stats.profile.repos} repos
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
        </Box>
      </main>
    </>
  );
}
