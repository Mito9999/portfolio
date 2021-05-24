import { Heading, Box } from "@chakra-ui/react";
export default function Title({ text, Icon = null }) {
  return (
    <Box display="flex" pb="20px">
      <Heading fontSize="30px" textDecoration="underline solid #3182CE">
        {text}
      </Heading>
      {Icon && (
        <Box my="auto" ml="12px">
          <Icon />
        </Box>
      )}
    </Box>
  );
}
