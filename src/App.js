import './App.css';
import {BrowserRouter as Router,Switch,Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Skills from "./pages/Skills";
import About from "./pages/About";
import Works from "./pages/Works";
import NavBar from "./components/NavBar";
import React from "react";

function App() {
  return (
      <Router>
        <div className="App">
            <NavBar />
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/about" component={About} />
                <Route path="/skills" component={Skills} />
                <Route path="/works" component={Works} />
            </Switch>
        </div>
      </Router>
  );
}

export default App;
