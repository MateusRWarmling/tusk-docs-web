import {
  Text,
  Box,
  Flex,
  Heading,
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
} from "@chakra-ui/react";
import { RiAddLine } from "react-icons/ri";
import { SubmitHandler, useForm } from "react-hook-form";
import { useClients } from "../../hooks/useClients";
import { api } from "../../services/api";

export function ClientTable() {
  const { register, handleSubmit, reset } = useForm({});
  const { data, isLoading, error, refetch } = useClients();

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  type ClientData = {
    name: string;
    description: string;
  };

  const handleCreateClient: SubmitHandler<ClientData> = async ({
    name,
    description,
  }) => {
    await api.post("clients", {
      name,
      description,
    });

    refetch();
    reset();
  };

  return (
    <Flex w="100%" my="6" mx="auto">
      <Box flex="1">
        <Flex mb="8" justify="space-between" align="center">
          <Box
            display="flex"
            alignItems="end"
            gridGap="24px"
            w="100%"
            maxWidth="800px"
            as="form"
            onSubmit={handleSubmit(handleCreateClient)}
          >
            <FormControl id="name">
              <FormLabel fontSize="0.75rem" fontWeight="bold" color="#9FA2B4">
                NOVO CLIENTE
              </FormLabel>

              <InputGroup>
                <Input
                  type="text"
                  {...register("name")}
                  placeholder="Nome do cliente"
                  isRequired
                />
              </InputGroup>
            </FormControl>

            <FormControl id="description">
              <FormLabel fontSize="0.75rem" fontWeight="bold" color="#9FA2B4">
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

            <Button
              as="button"
              type="submit"
              size="md"
              fontSize="sm"
              backgroundColor="blue.850"
              color="white"
              _hover={{ filter: "brightness(0.6)" }}
              transition="0.2s"
            >
              <Icon as={RiAddLine} fontSize="20" />
            </Button>
          </Box>
        </Flex>

        {isLoading ? (
          <Flex justify="center">
            <Spinner />
          </Flex>
        ) : error ? (
          <Flex>
            <Text>Sem clientes no momento</Text>
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
                {data?.clients.map((client) => {
                  return (
                    <Tr
                      key={client.id}
                      verticalAlign="middle"
                      borderBottom="2px solid #DFE0EB"
                    >
                      <Td>
                        <Avatar name={client.name} size="lg" />
                      </Td>
                      <Td>
                        <Text fontWeight="bold">{client.name}</Text>
                      </Td>
                      <Td>
                        <Text fontSize="sm">{client.description}</Text>
                      </Td>
                      {isWideVersion && <Td>{client.createdAt}</Td>}
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
