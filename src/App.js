import React from "react";
import "./App.css";
import Nav from "./Components/Nav";
import HomePage from "./Components/HomePage";
import ProjectsPage from "./Components/ProjectsPage";
import ContactPage from "./Components/ContactPage";
import { Router } from "@reach/router";

function App() {
  return (
    <div className="App">
      <Nav />
      <Router>
        <HomePage path="/" />
        <ProjectsPage path="/projects" />
        <ContactPage path="/contact" />
      </Router>
    </div>
  );
}

export default App;
