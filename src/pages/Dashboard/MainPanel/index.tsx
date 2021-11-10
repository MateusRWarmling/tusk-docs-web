import { Flex } from "@chakra-ui/react";
import { DueDateChart } from "./DueDateChart";
import { PaymentsChart } from "./PaymentsChart";

export function MainPanel() {
  return (
    <Flex
      maxW="1100px"
      marginX="auto"
      gridColumnGap="15rem"
      gridRowGap="5rem"
      justifyContent="center"
      flexWrap="wrap"
    >
      <PaymentsChart />
      <DueDateChart />
    </Flex>
  );
}
