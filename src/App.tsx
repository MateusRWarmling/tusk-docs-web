import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./Assets/styles/theme";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Login } from "./pages/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About}></Route>
          <Route exact path="/login" component={Login}></Route>
        </Switch>
      </Router>
    </ChakraProvider>
  );
}

export default App;
