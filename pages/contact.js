import Head from "next/head";
import { Box } from "@chakra-ui/react";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Mito's Contact Information</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Box mb="40px">Github</Box>
        <Box mb="40px">Email</Box>
        <Box mb="40px">Phone</Box>
        <Box mb="40px">Slack</Box>
        <Box mb="40px">Discord</Box>
      </main>
    </>
  );
}
