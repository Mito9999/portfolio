import Head from "next/head";
import { Box, Heading, Text } from "@chakra-ui/react";
import Title from "../components/Title";

const awards = [
  {
    title: "M001: MongoDB Basics",
    date: "March 2021",
  },
  {
    title: "Scrimba Frontend Developer Career Path",
    date: "December 2020",
  },
  {
    title: "Scrimba React Bootcamp",
    date: "December 2020",
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

        {awards.map((award) => (
          <Box mb="20px" pb="20px" borderBottom="3px dashed rgb(234, 240, 245)">
            <Heading as="h2" size="md">
              {award.title}
            </Heading>
            <Text>{award.date}</Text>
          </Box>
        ))}
      </main>
    </>
  );
}
