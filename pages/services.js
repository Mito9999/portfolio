import Head from "next/head";
import { Box } from "@chakra-ui/react";
import Title from "../components/Title";

export default function Services() {
  return (
    <>
      <Head>
        <title>Mito's Services</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Title text="Services" />

        <Box mb="40px">Service #1</Box>
        <Box mb="40px">Service #2</Box>
        <Box mb="40px">Service #3</Box>
        <Box mb="40px">Service #4</Box>
        <Box mb="40px">Service #5</Box>
      </main>
    </>
  );
}
