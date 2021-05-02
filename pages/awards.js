import Head from "next/head";
import { Box, Heading, Badge, Text } from "@chakra-ui/react";
import Title from "../components/Title";

const awards = [
  // {
  //   title: "C100DEV: MongoDB Certified Developer Associate",
  //   date: "Not Finished",
  //   contentColor: "red",
  //   content: ["Exam"],
  // },
  // {
  //   title: "M320: MongoDB Data Modeling",
  //   date: "Not Finished",
  //   contentColor: "green",
  //   content: ["Schemas", "Data Patterns", "Document Relationships"],
  // },
  // {
  //   title: "M201: MongoDB Performance",
  //   date: "Not Finished",
  //   contentColor: "green",
  //   content: ["Scaling", "Optimization", "Indexing", "Performance Analysis"],
  // },
  // {
  //   title: "M220JS: MongoDB with JavaScript",
  //   date: "Not Finished",
  //   contentColor: "green",
  //   content: [
  //     "Node.js",
  //     "Exception Handling",
  //     "Timeouts",
  //     "Analytic Reporting",
  //     "Resilience",
  //     "Security",
  //   ],
  // },
  // {
  //   title: "M121: MongoDB Aggregation Framework",
  //   date: "Not Finished",
  //   contentColor: "green",
  //   content: [
  //     "Projection",
  //     "Utility Stages",
  //     "Multidimensional Grouping",
  //     "Aggregation Performance",
  //     "Pipeline Optimization",
  //   ],
  // },
  {
    title: "M103: MongoDB Cluster Administration",
    date: "Not Finished",
    contentColor: "green",
    content: [
      "Mongod",
      "Replication",
      "Set Administration",
      "Sharding",
      "Cluster Management",
    ],
  },
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
  {
    title: "Udemy JavaScript Mastery Course",
    date: "June 2020",
    contentColor: "yellow",
    // description:
    //   "In this course, I learned all about coding principles and how JavaScript works. I completed this course in June of 2020, but I didn't claim the certificate until May of 2021.",
    content: [
      "JavaScript Fundamentals",
      "DOM Manipulation",
      "Events",
      "Data Structures",
      "OOP",
      "Async/Await",
      "APIs",
      "Git",
    ],
  },
  {
    title: "Introduction to Computer Science and Programming in Python (MIT)",
    date: "May 2020",
    contentColor: "orange",
    content: [
      "Data Structures",
      "Algorithms",
      "Abstraction",
      "Recursion",
      "Debugging",
      "OOP",
      "Inhertiance",
      "Efficiency",
    ],
  },
  {
    title: "CS50 (Harvard)",
    date: "May 2020",
    contentColor: "red",
    content: [
      "C",
      "Python",
      "SQL",
      "Memory Management",
      "Data Structures",
      "Algorithms",
    ],
  },
  {
    title: "Python Specialization (University of Michigan)",
    date: "April 2020",
    contentColor: "facebook",
    content: [
      "Coding Principles",
      "Python Basics",
      "Data Structures",
      "Web Scraping",
      "Databases",
      "Data Visualization",
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
              <Badge key={skill} colorScheme={award.contentColor} mr="10px">
                {skill}
              </Badge>
            ))}
            {award.description && <Text pt="10px">{award.description}</Text>}
          </Box>
        ))}
      </main>
    </>
  );
}
