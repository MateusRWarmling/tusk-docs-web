import { IoMailSharp } from "react-icons/io5";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import {
  Box,
  Flex,
  Button,
  FormControl,
  Input,
  InputGroup,
  InputLeftAddon,
} from "@chakra-ui/react";

export function SubscribeBox() {
  return (
    <Box marginX="auto" backgroundColor="white" borderRadius="10px">
      <FormControl>
        <InputGroup>
          <InputLeftAddon
            children={<IoMailSharp />}
            backgroundColor="white"
            fontSize="24px"
            h="56px"
          />
          <Input
            h="56px"
            w="364px"
            variant="filled"
            bgColor="white"
            borderRightRadius="0"
            fontFamily="Ubuntu"
            placeholder="Seu melhor email"
            fontSize="20px"
            _placeholder={{ color: "black", textAlign: "center" }}
          ></Input>
          <Button
            h="56px"
            w="198px"
            borderLeftRadius="0"
            backgroundColor="#2069AC"
            color="white"
            transition="0.3s"
            _hover={{
              filter: "brightness(0.7)",
            }}
          >
            <Flex fontSize="20px" gridGap="17px">
              <Box as="span" lineHeight="20px">
                Cadastrar
              </Box>
              <MdOutlineArrowForwardIos fontSize="24px" />
            </Flex>
          </Button>
        </InputGroup>
      </FormControl>
    </Box>
  );
}
