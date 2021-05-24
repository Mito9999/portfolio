import {
  Badge,
  Box,
  Button,
  Flex,
  Heading,
  Image as ChakraImage,
  Link as ChakraLink,
  Skeleton,
  Text,
} from "@chakra-ui/react";
import Head from "next/head";
import { useState } from "react";
import { MdPlayArrow } from "react-icons/md";
import { SiGithub } from "react-icons/si";
import Title from "../components/Title";
import { projects } from "../data/content";
import useView from "../hooks/useView";

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
          <Flex
            bgColor="#e8e8e8"
            h={["22.5px", "30px"]}
            align="center"
            px="12px"
          >
            {["#ff5f56", "#febc2f", "#28c93f"].map((color) => (
              <Box
                key={color}
                bgColor={color}
                borderRadius="999px"
                h={["9px", "12px"]}
                w={["9px", "12px"]}
                mr="6px"
              ></Box>
            ))}
          </Flex>
          <a href={project.url} target="_blank" rel="noopener noreferrer">
            <Skeleton
              isLoaded={isImageLoaded}
              h="0"
              pb={(() => {
                const h = Number(project.image.height.replace("px", ""));
                const w = Number(project.image.width.replace("px", ""));
                return 100 * (h / w) + "%";
              })()}
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
  useView("/projects");
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
