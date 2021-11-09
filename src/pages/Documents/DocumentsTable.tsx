import {
  Text,
  Box,
  Flex,
  Stack,
  Button,
  Icon,
  Table,
  Thead,
  Th,
  Tr,
  Avatar,
  Tbody,
  Td,
  useBreakpointValue,
  Spinner,
  FormControl,
  FormLabel,
  InputGroup,
  Input,
  Select,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  useDisclosure,
} from "@chakra-ui/react";
import { RiAddLine } from "react-icons/ri";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDocuments } from "../../hooks/useDocuments";
import { useClients } from "../../hooks/useClients";
import { api } from "../../services/api";
import { FileInput } from "../../components/FileInput";
import { useState } from "react";

export function DocumentsTable() {
  const { register, handleSubmit, reset, setError, trigger } = useForm({});
  const { data, isLoading, error, refetch } = useDocuments();
  const { data: clientData } = useClients();
  const [imageUrl, setImageUrl] = useState("");
  const [localImageUrl, setLocalImageUrl] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  type ClientData = {
    title: string;
    description: string;
    clientId: string;
    file: File;
  };

  const handleCreateClient: SubmitHandler<ClientData> = async ({
    title,
    description,
    clientId,
    file,
  }) => {
    // await api.post("documents", {
    //   title,
    //   description,
    //   clientId,
    //   file,
    // });

    console.log({
      title,
      description,
      clientId,
      file,
    });

    refetch();
    reset();
  };

  return (
    <Flex w="100%" my="6" mx="auto">
      <Box flex="1">
        <Flex mb="8" justify="space-between" align="center">
          <Button
            type="submit"
            size="lg"
            fontSize="sm"
            backgroundColor="blue.850"
            color="white"
            _hover={{ filter: "brightness(0.6)" }}
            transition="0.2s"
            mt="24px"
            onClick={() => onOpen()}
          >
            Novo documento
          </Button>

          <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
            <DrawerOverlay />
            <DrawerContent>
              <DrawerHeader borderBottomWidth="1px">
                Cadastrar novo documento
              </DrawerHeader>

              <DrawerBody>
                <Box
                  display="flex"
                  alignItems="center"
                  gridGap="18px"
                  w="100%"
                  as="form"
                  onSubmit={handleSubmit(handleCreateClient)}
                >
                  <Stack gridGap="18px" w="100%">
                    <FormControl id="title">
                      <FormLabel
                        fontSize="0.75rem"
                        fontWeight="bold"
                        color="#9FA2B4"
                      >
                        NOVO DOCUMENTO
                      </FormLabel>

                      <InputGroup>
                        <Input
                          type="text"
                          {...register("title")}
                          placeholder="Titulo do documento"
                          isRequired
                        />
                      </InputGroup>
                    </FormControl>

                    <FormControl id="description">
                      <FormLabel
                        fontSize="0.75rem"
                        fontWeight="bold"
                        color="#9FA2B4"
                      >
                        Descrição
                      </FormLabel>

                      <InputGroup>
                        <Input
                          type="text"
                          {...register("description")}
                          placeholder="Mais informações"
                          isRequired
                        />
                      </InputGroup>
                    </FormControl>

                    <FormControl id="clientId">
                      <FormLabel
                        fontSize="0.75rem"
                        fontWeight="bold"
                        color="#9FA2B4"
                      >
                        CLIENTE
                      </FormLabel>

                      <InputGroup marginBottom="24px">
                        <Select
                          isRequired
                          {...register("clientId")}
                          placeholder="Selecione o cliente"
                        >
                          {clientData?.clients.map((client) => (
                            <option key={client.id} value={client.id}>
                              {client.name}
                            </option>
                          ))}
                        </Select>
                      </InputGroup>

                      <FileInput
                        setImageUrl={setImageUrl}
                        localImageUrl={localImageUrl}
                        setLocalImageUrl={setLocalImageUrl}
                        setError={setError}
                        trigger={trigger}
                        {...register("image")}
                      />
                    </FormControl>
                  </Stack>
                </Box>
              </DrawerBody>

              <DrawerFooter borderTopWidth="1px">
                <Button variant="outline" mr="auto" onClick={onClose}>
                  Cancelar
                </Button>
                <Button colorScheme="blue">Cadastrar</Button>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </Flex>

        {isLoading ? (
          <Flex justify="center">
            <Spinner />
          </Flex>
        ) : error ? (
          <Flex>
            <Text>Sem Documentos no momento</Text>
          </Flex>
        ) : (
          <>
            <Table>
              <Thead borderBottom="4px solid #DFE0EB">
                <Tr>
                  <Th px={["4", "4", "6"]} color="gray.300" width="8"></Th>
                  <Th>Usuário</Th>
                  <Th>Descrição</Th>
                  {isWideVersion && <Th>Data de cadastro</Th>}
                  <Th width="8"></Th>
                </Tr>
              </Thead>
              <Tbody>
                {data?.documents.map((document) => {
                  return (
                    <Tr
                      key={document.id}
                      verticalAlign="middle"
                      borderBottom="2px solid #DFE0EB"
                    >
                      <Td>
                        <Avatar name={document.name} size="lg" />
                      </Td>
                      <Td>
                        <Text fontWeight="bold">{document.name}</Text>
                      </Td>
                      <Td>
                        <Text fontSize="sm">{document.description}</Text>
                      </Td>
                      {isWideVersion && <Td>{document.createdAt}</Td>}
                    </Tr>
                  );
                })}
              </Tbody>
            </Table>
          </>
        )}
      </Box>
    </Flex>
  );
}
