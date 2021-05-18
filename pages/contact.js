import {
  Button,
  Flex,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Link as ChakraLink,
  Text,
  Textarea,
  useToast,
} from "@chakra-ui/react";
import Head from "next/head";
import { useState } from "react";
import { FaDiscord, FaEnvelope, FaGithub } from "react-icons/fa";
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
  const toast = useToast();
  const contactInfo = contactInfoWithoutIcons.map((source) => ({
    ...source,
    Icon: bindIcon(source.text),
  }));

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name !== "message" || (name === "message" && value.length <= 500)) {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async () => {
    // if a field is empty or all fields combine to be over 1000 characters, no request is sent.
    const formDataTexts = Object.values(formData);

    if (formDataTexts.includes("")) {
      toast({
        title: "Empty field(s)!",
        description: "All fields are required",
        status: "warning",
        isClosable: true,
        duration: 10000,
      });
      return;
    }
    if (formDataTexts.reduce((prev, cur) => prev + cur.length, 0) > 1000) {
      toast({
        title: "Character limit exceeded",
        description: "Please keep submissions under 1000 characters",
        status: "warning",
        isClosable: true,
        duration: 10000,
      });
      return;
    }

    const res = await fetch("/api/message", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      toast({
        title: "Message sent successfully!",
        description:
          "Your message has been received and will be reviewed shortly",
        status: "success",
        isClosable: true,
        duration: 10000,
      });
    } else {
      toast({
        title: "Failed to send message!",
        description:
          "An unexpected error has occurred, please try another contact method",
        status: "error",
        isClosable: true,
        duration: 10000,
      });
    }
  };

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
            <FormHelperText
              color={formData.message.length >= 500 ? "red.500" : "gray.500"}
            >
              {formData.message.length}/500 characters
            </FormHelperText>
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
