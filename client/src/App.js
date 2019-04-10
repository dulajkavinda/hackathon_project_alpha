import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Welcome from "./components/layout/Welcome";
import About from "./components/layout/About";
import Footer from "./components/layout/Footer";
import Plan from "./components/layout/Plan";
import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Welcome} />

          <Route exact path="/about" component={About} />
          <Route exact path="/plan" component={About} />

          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
