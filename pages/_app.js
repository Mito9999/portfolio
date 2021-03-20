import Head from "next/head";
import Link from "next/link";
import {
  extendTheme,
  ChakraProvider,
  Container,
  Box,
  Heading,
  Flex,
  Button,
} from "@chakra-ui/react";

const extendedTheme = extendTheme({
  fonts: { body: "Inter", heading: "Inter", mono: "Inter" },
  styles: {
    global: {
      html: {
        overflowX: "hidden",
        overflowY: "scroll",
      },
    },
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
        />
      </Head>
      <ChakraProvider theme={extendedTheme}>
        <Container maxW="1000px">
          <header>
            <Flex my="40px" align="center" justify="space-between">
              <Box textAlign="center">
                <Heading size="xl" cursor="pointer" fontWeight="900">
                  <Link href="/">Portfolio</Link>
                </Heading>
              </Box>
              <Flex justify="center" direction={["column", "column", "row"]}>
                <Link basis href="/projects">
                  <Button variant="link" color="black" mx="4" my="2">
                    Projects
                  </Button>
                </Link>
                <Link href="/awards">
                  <Button variant="link" color="black" mx="4" my="2">
                    Awards
                  </Button>
                </Link>
                <Link href="/services">
                  <Button variant="link" color="black" mx="4" my="2">
                    Services
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button colorScheme="blue" mx={["4", "4", "0"]} my="2">
                    Contact
                  </Button>
                </Link>
              </Flex>
            </Flex>
          </header>
          <Component {...pageProps} />
        </Container>
      </ChakraProvider>
    </>
  );
}
export default MyApp;
