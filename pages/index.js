import Head from "next/head";
import Link from "next/link";
import { Heading, Button, Box, Text } from "@chakra-ui/react";

// TODO: make custom pages for each github repo/commit
export default function Home({ githubData }) {
  return (
    <>
      <Head>
        <title>Mito - Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Heading size="md">GitHub</Heading>
        <p>Showing {githubData.length} of 30</p>
        {githubData.map((event) => (
          <Box key={event.id} my="30px">
            <Link href={event.repo.url}>{event.repo.name}</Link>
            {event.type === "PushEvent" && (
              <Text>{event.payload.commits[0].message}</Text>
            )}
          </Box>
        ))}
        {/* <Button>Show More</Button> */}
      </main>
    </>
  );
}

export async function getServerSideProps() {
  const res = await fetch("https://api.github.com/users/Mito9999/events");
  const data = await res.json();

  const githubData = data.slice(0, 5);

  return githubData
    ? {
        props: { githubData },
      }
    : {
        notFound: true,
      };
}
