import Head from "next/head";
import { Box } from "@chakra-ui/react";

export default function Home() {
  return (
    <>
      <Head>
        <title>Mito's Awards</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Box mb="40px">Certificate #1</Box>
        <Box mb="40px">Certificate #2</Box>
        <Box mb="40px">Certificate #3</Box>
        <Box mb="40px">Certificate #4</Box>
        <Box mb="40px">Certificate #5</Box>
      </main>
    </>
  );
}
