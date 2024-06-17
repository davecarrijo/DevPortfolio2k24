// React imports
import React from "react";
// Styles imports
import "./index.css";
import "./App.css";
// Components Imports
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Timeline from "./components/Timeline";
import Footer from "./components/Footer";
import Nav_Mobile from "./components/Nav_Mobile";

function App() {
  return (
    <div className='App'>
      <div className='md:container md:mx-auto px-20'>
        <Nav_Mobile />
        <Nav />
        <Hero />
        <Projects />
        <Timeline />
        <Footer />
      </div>
    </div>
  );
}

export default App;
