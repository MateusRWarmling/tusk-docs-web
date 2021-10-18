import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./Assets/styles/theme";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About}></Route>
        </Switch>
      </Router>
    </ChakraProvider>
  );
}

export default App;
