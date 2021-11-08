import { Flex, Text } from "@chakra-ui/react";

interface DocumentDataBoxProps {
  title: string;
  number: string;
}

export function DocumentDataBox({ title, number }: DocumentDataBoxProps) {
  return (
    <Flex
      backgroundColor="gray.75"
      maxW="16rem"
      h="8rem"
      w="100%"
      direction="column"
      border="1px solid #DFE0EB"
      borderRadius="0.5rem"
      alignItems="center"
      justifyContent="center"
      _hover={{
        borderColor: "blue.450",
        p: {
          color: "blue.450",
        },
      }}
    >
      <Text fontWeight="bold" fontSize="1.2rem" color="#9FA2B4" _hover={{}}>
        {title}
      </Text>
      <Text fontWeight="bold" fontSize="2.5rem" color="#252733">
        {number}
      </Text>
    </Flex>
  );
}
