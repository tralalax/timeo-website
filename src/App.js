import React, { Component } from "react";
import "./App.scss";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <About/>
        <Projects/>
        <Skills/>
        <Footer/>
      </div>
    );
  }
}

export default App;