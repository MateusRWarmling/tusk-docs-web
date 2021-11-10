import { useQuery } from "react-query";
import { api } from "../services/api";

type Owner = {
  id: string;
  name: string;
};

type Document = {
  id: string;
  title: string;
  description: string;
  value: string;
  dueDate: string;
  fileUrl: string;
  paid: boolean;
  createdAt: string;
  owner: Owner;
};

type getDocumentsResponse = {
  documents: Document[];
};

export async function getDocuments(): Promise<getDocumentsResponse> {
  const { data } = await api.get("documents");

  const documents = data.map((document: Document) => {
    const date = document.dueDate.split("-");

    return {
      id: document.id,
      title: document.title,
      owner: document.owner.name,
      description: document.description,
      value: Number(document.value).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      }),
      dueDate: new Date(
        Number(date[0]),
        Number(date[1]) - 1,
        Number(date[2])
      ).toLocaleDateString("pt-BR", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      }),
      fileUrl: document.fileUrl,
      paid: document.paid,
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
