import { useQuery } from "react-query";
import { api } from "../services/api";

type Document = {
  id: string;
  name: string;
  description: string;
  createdAt: string;
};

type getDocumentsResponse = {
  documents: Document[];
};

export async function getDocuments(): Promise<getDocumentsResponse> {
  const { data } = await api.get("documents");

  const documents = data.map((document: Document) => {
    return {
      id: document.id,
      name: document.name,
      description: document.description,
      createdAt: new Date(document.createdAt).toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }),
    };
  });

  return {
    documents,
  };
}

export function useDocuments() {
  return useQuery(["documents"], () => getDocuments(), {
    staleTime: 1000 * 60 * 10, //10 minutes
  });
}
