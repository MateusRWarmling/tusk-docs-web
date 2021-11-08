import { ChakraProvider } from "@chakra-ui/react";

import { theme } from "./Assets/styles/theme";
import { AuthProvider } from "./contexts/AuthContext";
import { Routes } from "./routes";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </ChakraProvider>
  );
}

export default App;
