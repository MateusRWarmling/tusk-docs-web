import { Text, Box } from "@chakra-ui/react";
import { Pie } from "react-chartjs-2";
import { useDashboard } from "../../../hooks/useDashboard";

export function PaymentsChart() {
  const { data } = useDashboard();
  const paidDocuments = data?.dashboard
    ? data?.dashboard.documents - data?.dashboard.unpaidDocuments
    : 0;

  const chartData = {
    labels: ["Em aberto", "Pagos"],
    datasets: [
      {
        data: [data?.dashboard.unpaidDocuments, paidDocuments],
        backgroundColor: ["#E65F5C", "#022e57"],
      },
    ],
  };

  return (
    <Box width="500px">
      <Text textAlign="center" fontSize="24px" fontWeight="bold" mb="1rem">
        Situação de Pagamento
      </Text>
      <Pie data={chartData} />
    </Box>
  );
}
