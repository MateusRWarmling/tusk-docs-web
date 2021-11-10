import { Flex, theme } from "@chakra-ui/react";
import Chart from "react-apexcharts";
import { useDashboard } from "../../../hooks/useDashboard";

export function PaymentsChart() {
  const { data } = useDashboard();
  const paidDocuments = data?.dashboard
    ? data?.dashboard.documents - data?.dashboard.unpaidDocuments
    : 0;
  const options = {
    labels: ["Em aberto", "Pagos"],
    colors: ["#E65F5C", "#022e57"],
    title: {
      text: "Situação de Pagamento",
      align: "center",
      margin: 40,
      offsetX: 0,
      offsetY: 0,
      floating: false,
      style: {
        fontSize: "18px",
        fontWeight: "bold",
        fontFamily: undefined,
        color: "#263238",
      },
    },
    legend: {
      position: "bottom",
      fontSize: "16px",
      markers: {
        width: 16,
        height: 16,
        radius: 0,
        offsetX: -5,
      },
      itemMargin: {
        horizontal: 16,
        vertical: 0,
      },
    },
  } as ApexCharts.ApexOptions;
  const series = [data?.dashboard.unpaidDocuments, paidDocuments];

  return (
    <Chart
      options={options}
      series={series}
      type="pie"
      width="400px"
      height="600px"
    />
  );
}
