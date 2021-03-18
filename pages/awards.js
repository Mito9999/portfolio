import Head from "next/head";
import { Box, Heading, Text, Badge } from "@chakra-ui/react";
import Title from "../components/Title";

const awards = [
  {
    title: "M001: MongoDB Basics",
    date: "March 2021",
    contentColor: "green",
    content: [
      "Atlas",
      "Shell",
      "Querying",
      "CRUD Principles",
      "Operators",
      "Aggregation",
      "Indexing",
      "Data Modeling",
      "Performance",
    ],
  },
  {
    title: "Scrimba Frontend Developer Career Path",
    date: "December 2020",
    contentColor: "teal",
    content: [
      "HTML",
      "CSS",
      "JavaScript",
      "APIs",
      "Flexbox & Grid",
      "Design",
      "Git",
      "React",
      "Styled Components",
      "Firebase",
    ],
  },
  {
    title: "Scrimba React Bootcamp",
    date: "November 2020",
    contentColor: "blue",
    content: [
      "Reusability",
      "Performance",
      "Context",
      "Hooks",
      "Router",
      "Redux",
    ],
  },
];

export default function Awards() {
  return (
    <>
      <Head>
        <title>Mito's Awards</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Title text="Certificates" />

        {awards.map((award, idx) => (
          <Box
            mb="20px"
            pb="20px"
            key={idx}
            borderBottom={
              award.title !== awards[awards.length - 1].title
                ? "3px dashed rgb(234, 240, 245)"
                : "none"
            }
          >
            <Heading as="h2" size="md">
              {award.title}
            </Heading>
            <Badge mr="10px">{award.date}</Badge>
            {award.content.map((skill) => (
              <Badge colorScheme={award.contentColor} mr="10px">
                {skill}
              </Badge>
            ))}
          </Box>
        ))}
      </main>
    </>
  );
}
