import { Heading } from "@chakra-ui/react";
export default function Title({ text }) {
  return (
    <Heading
      fontSize="30px"
      textDecoration="underline solid rgb(234, 240, 245)"
      pb="20px"
    >
      {text}
    </Heading>
  );
}
