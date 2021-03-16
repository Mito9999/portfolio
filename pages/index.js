import Head from "next/head";
import NextLink from "next/link";
import {
  Container,
  Box,
  Heading,
  Flex,
  Spacer,
  Link as ChakraLink,
} from "@chakra-ui/react";

export default function Home() {
  return (
    <Container maxW="1000px">
      <Head>
        <title>Mito - Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <Flex my="40px" align="center">
          <Box>
            <Heading size="lg">Mito</Heading>
          </Box>
          <Spacer />
          <Box>
            <NextLink href="/">
              <ChakraLink mr="8">Projects</ChakraLink>
            </NextLink>
            <NextLink href="/">
              <ChakraLink mr="8">Awards</ChakraLink>
            </NextLink>
            <NextLink href="/">
              <ChakraLink mr="8">Services</ChakraLink>
            </NextLink>
            <NextLink href="/">
              <ChakraLink>Contact</ChakraLink>
            </NextLink>
          </Box>
        </Flex>
      </header>

      <main>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae tenetur,
        voluptatum vero nesciunt delectus itaque. Magni numquam commodi earum
        porro in alias sunt animi libero ratione asperiores a perferendis
        ducimus totam corporis dolore facere quis ab ad, laudantium vitae.
        Cumque voluptate vero accusantium, minus ea adipisci laudantium quae
        iste, explicabo delectus optio maiores maxime? Rem aut exercitationem
        ratione. Facere, placeat ipsam. Illo, cum, iusto nobis excepturi vel
        harum nam repudiandae quod omnis, corrupti quae sequi minima saepe
        necessitatibus fugiat perferendis vitae perspiciatis officia explicabo
        veritatis ipsa expedita? Deserunt corrupti, incidunt dicta laudantium ad
        quam ex exercitationem vitae odit ut eaque magnam libero ullam
        voluptates, voluptas aliquam at vero dolor explicabo? Odio rerum nam
        quod dolorem obcaecati ducimus sit nemo quasi voluptate cupiditate. Ab,
        porro repellat dignissimos, nesciunt eaque a molestiae, cupiditate
        commodi nihil voluptatum qui ipsam dicta? Eaque, incidunt. Sequi eos
        aperiam enim nobis unde vitae voluptatum aut amet culpa nemo, sint
        ducimus sed vel necessitatibus distinctio veniam voluptates illo,
        aspernatur animi deserunt pariatur quae numquam impedit corporis! Minima
        laborum, reprehenderit ad aspernatur natus distinctio, ipsum expedita
        error quia officiis voluptas numquam, dignissimos molestias! Beatae
        dolores quod et esse aliquid assumenda dolore deleniti aliquam quae
        sint, consectetur magnam eaque autem sunt eligendi saepe sit laudantium
        repellendus delectus itaque veniam accusamus quos ea! A vero nihil vitae
        quasi eligendi doloribus dolorum fugiat laudantium porro. Quod dolorem
        deleniti iure possimus soluta quia fugiat minus, unde ab assumenda
        impedit eius iusto facilis nisi? Animi provident fuga numquam a soluta
        blanditiis error. Dicta deserunt laboriosam vel quos laudantium!
        Voluptates ut molestias iure perferendis corrupti modi earum quidem
        dolore cum possimus, nihil inventore sequi facilis magni quos sed. Quia
        eum illum qui sunt aliquid accusantium aspernatur eveniet iste officia,
        nisi a adipisci velit ad ea dolorem impedit aut maxime ab est corrupti
        aliquam blanditiis! Debitis iusto laborum voluptate dignissimos vel
        cumque neque necessitatibus temporibus non nobis ipsam tempora aliquid,
        animi repellat ducimus maxime tempore odit! Voluptatibus veniam placeat
        hic expedita quo architecto delectus quam exercitationem quaerat odit
        officia facilis, ipsam sequi nulla nostrum, dolores deserunt. Rem,
        earum. Assumenda vero dignissimos ex inventore nobis fugit, eius
        incidunt pariatur delectus exercitationem obcaecati ut corporis
        quibusdam eligendi ducimus modi odio eveniet excepturi temporibus,
        cumque harum nihil error facilis blanditiis. Perferendis, minima! Alias
        libero odio numquam optio quia laudantium quas deserunt unde, omnis, sed
        deleniti consectetur modi assumenda necessitatibus. Provident eum
        consequatur obcaecati natus voluptates enim quas, esse ut cupiditate
        asperiores expedita laboriosam accusantium ullam. Recusandae hic nisi
        non, iure qui incidunt earum aliquid blanditiis reiciendis veniam, sit
        explicabo esse harum! Exercitationem fugit repellendus sapiente ea illo
        veritatis doloremque odio inventore nesciunt recusandae sed quo, ab,
        vero minus repudiandae hic, esse nam quis doloribus architecto
        consectetur. Repellat vero ducimus nobis aspernatur fugiat, porro quidem
        doloremque optio autem repudiandae explicabo, quibusdam corporis
        officiis sequi error ipsum laudantium? Est recusandae fugit beatae ipsum
        sint iste quam, deleniti earum blanditiis nobis at voluptates sequi
        soluta obcaecati, quas temporibus natus odit veniam quibusdam ex.
        Maiores beatae cumque eaque quis delectus non sequi vel!
      </main>
    </Container>
  );
}
