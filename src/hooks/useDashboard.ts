import { useQuery } from "react-query";
import { api } from "../services/api";

type Dashboard = {
  overdueDocuments: number;
  unpaidDocuments: number;
  documents: number;
};

type getDashboardResponse = {
  dashboard: Dashboard;
};

export async function getDashboard(): Promise<getDashboardResponse> {
  const { data } = await api.get("dashboard");

  const dashboard = {
    overdueDocuments: data.overdueDocuments,
    unpaidDocuments: data.unpaidDocuments,
    documents: data.documents,
  } as Dashboard;

  return {
    dashboard,
  };
}

export function useDashboard() {
  return useQuery(["dashboard"], () => getDashboard(), {
    staleTime: 10, //10 seconds
  });
}
