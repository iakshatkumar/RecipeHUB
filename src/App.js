import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// importing page components
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
      </Switch>
    </Router>
  );
};

export default App;
