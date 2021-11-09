import { Flex } from "@chakra-ui/react";
import { DocumentDataBox } from "../../components/DocumentDataBox";

export function DocumentNumbers() {
  return (
    <Flex gridGap="30px" w="100%" justifyContent="center" flexWrap="wrap">
      <DocumentDataBox number="60" title="Unresolved" />
      <DocumentDataBox number="60" title="Unresolved" />
      <DocumentDataBox number="60" title="Unresolved" />
      <DocumentDataBox number="60" title="Unresolved" />
    </Flex>
  );
}
