import Head from "next/head";
import { Flex, Text, Link as ChakraLink } from "@chakra-ui/react";
import { FaGithub, FaEnvelope, FaDiscord } from "react-icons/fa";
import Title from "../components/Title";

const bindIcon = (source) => {
  switch (source) {
    case "GitHub":
      return FaGithub;
    case "Email":
      return FaEnvelope;
    case "Discord":
      return FaDiscord;
  }
};

export default function Contact({ contactInfo: contactInfoWithoutIcons }) {
  const contactInfo = contactInfoWithoutIcons.map((source) => ({
    ...source,
    Icon: bindIcon(source.text),
  }));

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

export async function getStaticProps() {
  const contactInfo = [
    {
      text: "GitHub",
      account: "Mito9999",
      link: "https://github.com/Mito9999",
    },
  ];

  const discordRes = await fetch(
    "https://discord.com/api/v8/users/570383339811504159",
    {
      method: "GET",
      headers: {
        Authorization:
          "Bot ODQzNTkyMjczNDUxNDE3NjQx.YKGGhw.k6T7554zT3AN3O3gOUqD5oLeG1g",
      },
    }
  );
  const discordData = await discordRes.json();
  const { username: discordUsername, discriminator: discordDiscriminator } =
    discordData;

  let discordAccount = "Mito#9999";
  if (discordUsername && discordDiscriminator) {
    const possibleDiscordAccount = `${discordUsername}#${discordDiscriminator}`;
    if (/\w+#\d{4}/.test(possibleDiscordAccount)) {
      discordAccount = possibleDiscordAccount;
    }
  }

  contactInfo.push({
    text: "Discord",
    account: discordAccount,
    link: "https://discord.com/users/570383339811504159",
  });

  contactInfo.push({
    text: "Email",
    account: "mitomandev@gmail.com",
    link: "mailto:mitomandev@gmail.com",
  });
  return {
    props: { contactInfo: contactInfo },
  };
}
