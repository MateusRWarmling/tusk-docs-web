import {
  Text,
  Box,
  Flex,
  Stack,
  Button,
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
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  useDisclosure,
  useToast,
  Checkbox,
} from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useDocuments } from "../../hooks/useDocuments";
import { useClients } from "../../hooks/useClients";
import { FileInput } from "../../components/FileInput";
import { FormEvent, useState } from "react";
import { BrowserMultiFormatReader } from "@zxing/library";
import { getDataFromCode } from "../../utils/getDataFromCode";
import { api } from "../../services/api";

export function DocumentsTable() {
  const { register, handleSubmit, reset, setError, trigger } = useForm({});
  const { data, isLoading, error, refetch } = useDocuments();
  const { data: clientData } = useClients();
  const [imageUrl, setImageUrl] = useState("");
  const [localImageUrl, setLocalImageUrl] = useState<any>();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [completedCrop, setCompletedCrop] = useState<any>(null);
  const toast = useToast();

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
  }) => {
    try {
      const codeReader = new BrowserMultiFormatReader();

      const resultImage = await codeReader.decodeFromImageUrl(localImageUrl);
      const imageText = resultImage.getText();

      const { dueDate, value } = getDataFromCode(imageText);

      var formData = new FormData();
      formData.append("file", imageUrl);
      formData.append("title", title);
      formData.append("description", description);
      formData.append("clientId", clientId);
      formData.append("dueDate", dueDate.toISOString());
      formData.append("value", String(value));

      await api.post("documents", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      refetch();
      reset();
      onClose();
    } catch (error) {
      toast({
        title: "Falha ao selecionar o código de barras",
        position: "top",
        status: "error",
        isClosable: true,
      });
    }
  };

  const handleStatusChange = async (event: any) => {
    try {
      const { id } = event.target;

      await api.patch(`documents/${id}`, {
        paid: event.target.checked,
      });

      refetch();
    } catch (error) {
      toast({
        title: "Falha ao atualizar status",
        position: "top",
        status: "error",
        isClosable: true,
      });
    }
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

          <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="xl">
            <DrawerOverlay />
            <Box
              as="form"
              onSubmit={handleSubmit(handleCreateClient)}
              encType="multipart/form-data"
            >
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
                          completedCrop={completedCrop}
                          setCompletedCrop={setCompletedCrop}
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
                  <Button type="submit" colorScheme="blue">
                    Cadastrar
                  </Button>
                </DrawerFooter>
              </DrawerContent>
            </Box>
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
                  <Th>Título</Th>
                  <Th>Cliente</Th>
                  <Th>Descrição</Th>
                  <Th>Valor</Th>
                  <Th>Status</Th>
                  {isWideVersion && <Th>Data de vencimento</Th>}
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
                        <Avatar
                          name={document.fileUrl}
                          src={document.fileUrl}
                          size="lg"
                        />
                      </Td>
                      <Td>
                        <Text fontWeight="bold">{document.title}</Text>
                      </Td>
                      <Td>
                        <Text fontSize="sm">{document.owner}</Text>
                      </Td>
                      <Td>
                        <Text fontSize="sm">{document.description}</Text>
                      </Td>
                      <Td>
                        <Text fontWeight="bold">{document.value}</Text>
                      </Td>
                      <Td>
                        <Checkbox
                          size="lg"
                          colorScheme="green"
                          defaultChecked={document.paid}
                          mx="auto"
                          id={document.id}
                          onChange={(e) => handleStatusChange(e)}
                        >
                          {document.paid ? "Pago" : "Não pago"}
                        </Checkbox>
                      </Td>
                      {isWideVersion && <Td>{document.dueDate}</Td>}
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
