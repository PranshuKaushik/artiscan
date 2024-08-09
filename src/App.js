import React from "react";
import "./App.css";

// import Router
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

// import Component

import Footer from "./component/Footer";
import Header from "./component/Header";
import ScrollToTop from "./component/ScrollToTop";

// import Pages
import FormExample from "./Pages/FormExample";
import Home from "./Pages/Home";
import output from "./Pages/OutputScreen";
import ReactHooks from "./Pages/ReactHooks";
import UiUx from "./Pages/UiUx";

function App() {
  return (
    <React.StrictMode>
      <Router>
        <Header />
        <ScrollToTop>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/output" component={output} />
            <Route exact path="/react-hooks" component={ReactHooks} />
            <Route exact path="/ui-ux" component={UiUx} />
            <Route exact path="/form-example" component={FormExample} />
          </Switch>
        </ScrollToTop>
        <Footer />
      </Router>
    </React.StrictMode>
  );
}

export default App;
