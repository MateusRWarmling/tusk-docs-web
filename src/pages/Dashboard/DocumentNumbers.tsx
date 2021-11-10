import { Flex } from "@chakra-ui/react";
import { DocumentDataBox } from "../../components/DocumentDataBox";
import { useDashboard } from "../../hooks/useDashboard";

export function DocumentNumbers() {
  const { data } = useDashboard();
  const paidDocuments = data?.dashboard
    ? data?.dashboard.documents - data?.dashboard.unpaidDocuments
    : 0;

  return (
    <Flex gridGap="30px" w="100%" justifyContent="center" flexWrap="wrap">
      <DocumentDataBox
        number={data?.dashboard.documents}
        title="Total de Boletos"
      />
      <DocumentDataBox number={paidDocuments} title="Boletos Pagos" />
      <DocumentDataBox
        number={data?.dashboard.unpaidDocuments}
        title="Boletos em aberto"
      />
      <DocumentDataBox
        number={data?.dashboard.overdueDocuments}
        title="Boletos vencidos"
      />
    </Flex>
  );
}
