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

const fetchGitHub = async () => {
  try {
    const res = await fetch("https://api.github.com/user/58613559");
    const { login: username } = await res.json();

    if (username) {
      return username;
    }
    return "Mito9999";
  } catch {
    return "Mito9999";
  }
};

const fetchDiscord = async () => {
  try {
    const res = await fetch(
      "https://discord.com/api/v8/users/570383339811504159",
      {
        method: "GET",
        headers: {
          Authorization: `Bot ${process.env.DISCORD_BOT_TOKEN}`,
        },
      }
    );
    const { username, discriminator } = await res.json();

    if (username && discriminator) {
      const possibleDiscordAccount = `${username}#${discriminator}`;
      if (/\w+#\d{4}/.test(possibleDiscordAccount)) {
        return possibleDiscordAccount;
      }
    }
    return "Mito#9999";
  } catch {
    return "Mito#9999";
  }
};

export async function getStaticProps() {
  const contactInfo = [];

  const githubAccount = await fetchGitHub();
  contactInfo.push({
    text: "GitHub",
    account: githubAccount,
    link: `https://github.com/${githubAccount}`,
  });

  const discordAccount = await fetchDiscord();
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
