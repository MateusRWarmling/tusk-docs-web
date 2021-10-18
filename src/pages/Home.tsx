import { Box } from "@chakra-ui/react";
import { Header } from "../components/Header";
import { HomeFirstSection } from "../components/HomeFirstSection";

export function Home() {
  return (
    <Box>
      <Header />
      <HomeFirstSection />
    </Box>
  );
}
