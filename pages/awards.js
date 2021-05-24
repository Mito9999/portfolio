import { Badge, Box, Heading, Text } from "@chakra-ui/react";
import Head from "next/head";
import Title from "../components/Title";
import { awards } from "../data/content";
import useView from "../hooks/useView";

export default function Awards() {
  useView("/awards");
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
