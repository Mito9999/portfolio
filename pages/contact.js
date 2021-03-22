import Head from "next/head";
import { Flex, Text, Link as ChakraLink } from "@chakra-ui/react";
import { FaGithub, FaEnvelope, FaDiscord } from "react-icons/fa";
import Title from "../components/Title";

const contactInfo = [
  {
    text: "GitHub",
    account: "Mito9999",
    link: "https://github.com/Mito9999",
    Icon: FaGithub,
  },
  {
    text: "Discord",
    account: "Mito#9999",
    link: "https://discord.com/users/570383339811504159",
    Icon: FaDiscord,
  },
  {
    text: "Email",
    account: "mitomandev@gmail.com",
    link: "mailto:mitomandev@gmail.com",
    Icon: FaEnvelope,
  },
];

export default function Contact() {
  return (
    <>
      <Head>
        <title>Mito's Contact Information</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Title text="Contact Me" />

        {contactInfo.map((source) => (
          <Flex
            key={source.text}
            align="center"
            py="20px"
            mb="5px"
            borderBottom={
              contactInfo[contactInfo.length - 1] !== source
                ? "3px dashed rgb(200, 210, 215)"
                : "none"
            }
            _hover={[{}, { fontSize: "20px" }, { fontSize: "28px" }]}
            transition="all 250ms ease"
          >
            <ChakraLink href={source.link} isExternal={source.text !== "Email"}>
              <source.Icon fontSize="50px" />
            </ChakraLink>
            <Flex
              direction={["column", "row"]}
              align="center"
              justify="space-between"
              ml={["10px", "15px"]}
              w="100%"
            >
              <ChakraLink
                href={source.link}
                isExternal={source.text !== "Email"}
                fontSize="md"
              >
                {source.text}
              </ChakraLink>
              <Text
                overflowWrap="anywhere"
                textAlign="center"
                fontWeight="bold"
              >
                {source.account}
              </Text>
            </Flex>
          </Flex>
        ))}
      </main>
    </>
  );
}
