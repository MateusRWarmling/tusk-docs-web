import { useQuery } from "react-query";
import { api } from "../services/api";

type Client = {
  id: string;
  name: string;
  description: string;
  createdAt: string;
};

type getClientsResponse = {
  clients: Client[];
};

export async function getClients(): Promise<getClientsResponse> {
  const { data } = await api.get("clients");

  const clients = data.map((client: Client) => {
    return {
      id: client.id,
      name: client.name,
      description: client.description,
      createdAt: new Date(client.createdAt).toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }),
    };
  });

  return {
    clients,
  };
}

export function useClients() {
  return useQuery(["clients"], () => getClients(), {
    staleTime: 1000 * 60 * 10, //10 minutes
  });
}
