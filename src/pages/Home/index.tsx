import { Box } from "@chakra-ui/react";
import { Header } from "../../components/Header";
import { HomeFirstSection } from "./HomeFirstSection";
import { HomeSecondSection } from "./HomeSecondSection";
import { HomeThirdSection } from "./HomeThirdSection";
import { SubscribeToNewsletter } from "./SubscribeToNewsletter";
import { Footer } from "../../components/Footer";

export function Home() {
  return (
    <Box>
      <Header />
      <HomeFirstSection />
      <HomeSecondSection />
      <HomeThirdSection />
      <SubscribeToNewsletter />
      <Footer />
    </Box>
  );
}
