import Head from "next/head";
import { Box } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Head>
        <title>Mito's Projects</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Box mb="40px">Project #1</Box>
        <Box mb="40px">Project #2</Box>
        <Box mb="40px">Project #3</Box>
        <Box mb="40px">Project #4</Box>
        <Box mb="40px">Project #5</Box>
      </main>
    </>
  );
}
