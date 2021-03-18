import Head from "next/head";
import { Box } from "@chakra-ui/react";
import Title from "../components/Title";

export default function Contact() {
  return (
    <>
      <Head>
        <title>Mito's Contact Information</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Title text="Contact Me" />

        <Box mb="40px">Github</Box>
        <Box mb="40px">Email</Box>
        <Box mb="40px">Phone</Box>
        <Box mb="40px">Slack</Box>
        <Box mb="40px">Discord</Box>
      </main>
    </>
  );
}
