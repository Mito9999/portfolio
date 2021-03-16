import Link from "next/link";
import {
  ChakraProvider,
  Container,
  Box,
  Heading,
  Flex,
  Spacer,
  Button,
} from "@chakra-ui/react";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Container maxW="1000px">
        <header>
          <Flex my="40px" align="center">
            <Box>
              <Heading size="lg" cursor="pointer">
                <Link href="/">Mito</Link>
              </Heading>
            </Box>
            <Spacer />
            <Box>
              <Link href="/projects">
                <Button variant="link" color="black" mr="8">
                  Projects
                </Button>
              </Link>
              <Link href="/awards">
                <Button variant="link" color="black" mr="8">
                  Awards
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="link" color="black" mr="8">
                  Services
                </Button>
              </Link>
              <Link href="/contact">
                <Button colorScheme="blue">Contact</Button>
              </Link>
            </Box>
          </Flex>
        </header>
        <Component {...pageProps} />
      </Container>
    </ChakraProvider>
  );
}
export default MyApp;
