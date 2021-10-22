import { Box } from "@chakra-ui/react";
import { Header } from "../components/Header";
import { HomeFirstSection } from "../components/HomeFirstSection";
import { HomeSecondSection } from "../components/HomeSecondSection";
import { HomeThirdSection } from "../components/HomeThirdSection";
import { SubscribeToNewsletter } from "../components/SubscribeToNewsletter";
import { Footer } from "../components/Footer";

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
