import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import Details from "./components/Details"
import {BrowserRouter as Router, Route} from "react-router-dom"
function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={NavBar}/>
        <Route path="/details/:piero" component={Details} />
      </Router>

      <Footer />
    </div>
  );
}

export default App;
