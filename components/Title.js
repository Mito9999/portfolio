import { Heading } from "@chakra-ui/react";
export default function Title({ text }) {
  return (
    <Heading fontSize="30px" textDecoration="underline solid #3182CE" pb="20px">
      {text}
    </Heading>
  );
}
