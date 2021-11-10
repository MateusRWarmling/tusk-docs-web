import { Text, Box } from "@chakra-ui/react";
import { useDashboard } from "../../../hooks/useDashboard";
import { Pie } from "react-chartjs-2";

export function DueDateChart() {
  const { data } = useDashboard();
  const inTimeDocuments = data?.dashboard
    ? data?.dashboard.unpaidDocuments - data?.dashboard.overdueDocuments
    : 0;

  const chartData = {
    labels: ["Vencidos", "No prazo"],
    datasets: [
      {
        data: [data?.dashboard.overdueDocuments, inTimeDocuments],
        backgroundColor: ["#E65F5C", "#022e57"],
      },
    ],
  };

  return (
    <Box width="500px">
      <Text textAlign="center" fontSize="24px" fontWeight="bold" mb="1rem">
        Prazos
      </Text>
      <Pie data={chartData} />
    </Box>
  );
}
