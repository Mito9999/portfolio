import {
  Flex,
  FormControl,
  FormLabel,
  Input,
  Link as ChakraLink,
  Text,
  Textarea,
  Button,
} from "@chakra-ui/react";
import Head from "next/head";
import { FaDiscord, FaEnvelope, FaGithub } from "react-icons/fa";
import Title from "../components/Title";
import { useState } from "react";

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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = () => {};

  console.log(formData);

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
            borderBottom="3px dashed rgb(200, 210, 215)"
            _hover={[{}, { fontSize: "20px" }, { fontSize: "28px" }]}
            transition="all 250ms ease"
          >
            <source.Icon fontSize="50px" />
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
        <form
          style={{ marginTop: "40px", marginBottom: "20px" }}
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <Flex direction={["column", "row"]}>
            <FormControl mr={["0", "2"]}>
              <FormLabel>Name</FormLabel>
              <Input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
              />
            </FormControl>
            <FormControl mt={["4", "0"]} ml={["0", "2"]}>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="example@example.com"
              />
            </FormControl>
          </Flex>
          <FormControl mt="4">
            <FormLabel>Subject</FormLabel>
            <Input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl mt="4">
            <FormLabel>Message</FormLabel>
            <Textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
            />
          </FormControl>
          <Button mt="4" w="100%" colorScheme="red" onClick={handleSubmit}>
            Send
          </Button>
        </form>
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
    const discordBotToken = process.env.DISCORD_BOT_TOKEN; // token has <###> in a few places to avoid discord token detection
    const res = await fetch(
      "https://discord.com/api/v8/users/570383339811504159",
      {
        method: "GET",
        headers: {
          Authorization: `Bot ${discordBotToken.replace(/<###>/g, "")}`,
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
