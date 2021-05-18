import Head from "next/head";
import {
  Box,
  Heading,
  Text,
  Badge,
  Flex,
  Button,
  Link as ChakraLink,
  Skeleton,
  Image as ChakraImage,
} from "@chakra-ui/react";
import Title from "../components/Title";
import { SiGithub } from "react-icons/si";
import { MdPlayArrow } from "react-icons/md";
import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "Statboard",
    code: "https://github.com/Mito9999/statboard",
    url: "https://statboard.vercel.app/",
    description:
      "The one place to view all of your information from various sources!",
    image: {
      src: "/statboard.png",
      width: "1050px",
      height: "669px",
    },
    story:
      "I built this application to boost my productivity and gain insight into my goals. I wanted a way to track how well I was doing over time, and learn some useful technologies along the way.",
    tech: ["React.js", "JavaScript", "Styled Components", "CSS", "APIs"],
  },
  {
    id: 2,
    title: "Feed",
    code: "https://github.com/Mito9999/feed",
    url: "https://my-feed.netlify.app/",
    description: "A customizable display of your most important media.",
    image: {
      src: "/feed.png",
      width: "1059px",
      height: "889px",
    },
    story:
      "This was my first TypeScript and Chakra UI experience. I learned a lot about both of these technologies through the creation of this project and its features. In order to create a truly customizable feed, I had to become efficient at consuming APIs. While creating the infinite scrolling feature, I learned about optimizing components for performance and compatibility.",
    tech: ["React.js", "TypeScript", "Chakra UI", "APIs"],
  },
  {
    id: 3,
    title: "Dyftd",
    code: "https://github.com/Mito9999/dyftd",
    url: "https://dyftd.vercel.app/",
    description: "Did you feed the dog? Collaborative toggles.",
    image: {
      src: "/dyftd.png",
      width: "1077px",
      height: "769px",
    },
    story:
      "My first experience with the MERN(T) Stack. User Experience was my main goal in mind, so I  made the application as smooth as possible with clean animations and consistency. After getting one of my MongoDB certificates, I reimplemented and restructured the backend for scalability. This project was originially built with Create React App (Express + Node), but was migrated to Next.js (Serverless).",
    tech: ["React.js", "TypeScript", "Chakra UI", "MongoDB", "Next.js"],
  },
  {
    id: 4,
    title: "Money Tracker",
    code: "https://github.com/Mito9999/moneytracker",
    description: "An easy way to visualize your spending and savings habits!",
    story:
      "I have always been careful with money. However, this project made me see some of the areas that I could improve in, by visualizing every dollar that comes in and goes out.",
    tech: ["React.js", "TypeScript", "SCSS"],
  },
  {
    id: 5,
    title: "Cars",
    code: "https://github.com/Mito9999/cars",
    description: "A simple API for finding great deals on cars.",
    story:
      "In search of finding a good deal on a used car, I created this API + Discord Bot which gathers car deals from Craigslist and sends a message of new listings.",
    tech: ["Node.js", "Express.js", "Puppeteer", "Discord.js"],
  },
];

const ProjectImage = ({ project }) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  return (
    <Box
      my="30px"
      cursor="pointer"
      _hover={{ transform: "scale(1.03)" }}
      transition={"all 250ms"}
    >
      {project.image && (
        <>
          <Flex bgColor="#e8e8e8" h="30px" align="center" px="12px">
            {["#ff5f56", "#febc2f", "#28c93f"].map((color) => (
              <Box
                key={color}
                bgColor={color}
                borderRadius="999px"
                h="12px"
                w="12px"
                mr="6px"
              ></Box>
            ))}
          </Flex>
          <a href={project.url} target="_blank" rel="noopener noreferrer">
            <Skeleton
              isLoaded={isImageLoaded}
              height={
                968 *
                  (Number(project.image.height.replace("px", "")) /
                    Number(project.image.width.replace("px", ""))) +
                "px"
              }
            >
              <ChakraImage
                src={project.image.src}
                alt={`${project.title} demo`}
                onLoad={() => setIsImageLoaded(true)}
              />
            </Skeleton>
          </a>
        </>
      )}
    </Box>
  );
};

export default function Projects() {
  return (
    <>
      <Head>
        <title>Mito's Projects</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Title text="Projects" />

        {projects.map((project) => (
          <Box
            key={project.id}
            mb="20px"
            pb="20px"
            borderBottom={
              project.id !== projects.length
                ? "3px dashed rgb(234, 240, 245)"
                : "none"
            }
          >
            <Flex
              direction={["column", "column", "row"]}
              justify="space-between"
              align={["initial", "initial", "center"]}
            >
              <Box>
                <Heading size="md">{project.title}</Heading>
                <Text>{project.description}</Text>
                <Text>
                  {project.tech.map((technology) => (
                    <Badge colorScheme="blue" mr="10px" key={technology}>
                      {technology}
                    </Badge>
                  ))}
                </Text>
              </Box>
              <Flex
                align="center"
                ml={["0px", "0px", "20px"]}
                mt={["20px", "20px", "0px"]}
              >
                {project.url && (
                  <ChakraLink
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    mr="4px"
                  >
                    <Button
                      variant="outline"
                      leftIcon={<MdPlayArrow />}
                      my="8px"
                    >
                      Demo
                    </Button>
                  </ChakraLink>
                )}
                <ChakraLink
                  href={project.code}
                  target="_blank"
                  rel="noopener noreferrer"
                  // ml="20px"
                >
                  <Button variant="outline" leftIcon={<SiGithub />} my="8px">
                    Code
                  </Button>
                </ChakraLink>
              </Flex>
            </Flex>

            <ProjectImage project={project} />

            <Text>{project.story}</Text>
          </Box>
        ))}
      </main>
    </>
  );
}
