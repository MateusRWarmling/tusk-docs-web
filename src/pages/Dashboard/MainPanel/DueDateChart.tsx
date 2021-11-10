import { Flex, theme } from "@chakra-ui/react";
import Chart from "react-apexcharts";
import { useDashboard } from "../../../hooks/useDashboard";

export function DueDateChart() {
  const { data } = useDashboard();
  const inTimeDocuments = data?.dashboard
    ? data?.dashboard.unpaidDocuments - data?.dashboard.overdueDocuments
    : 0;
  const options = {
    labels: ["Vencidos", "No Prazo"],
    colors: ["#E65F5C", "#022e57"],
    title: {
      text: "Situação de Vencimento",
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
  };
  const series = [data?.dashboard.overdueDocuments, inTimeDocuments];

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
