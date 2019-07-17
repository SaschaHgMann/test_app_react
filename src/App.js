import React from "react";
import GlobalStyle from "./components/GlobalStyle";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Landing from "./pages/Landing";
import About from "./pages/About";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/about" component={About} />
          <Route component={NotFound} />
        </Switch>
      </Router>
      <Footer>Created on 🌏 </Footer>
    </>
  );
}

export default App;
