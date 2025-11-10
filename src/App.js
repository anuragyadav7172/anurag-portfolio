import React from "react";
import NavigationBar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
function App() {
  return (
    <>
      <NavigationBar />
      <Hero />
      <About />
      <Skills/>
      <Projects/>
      {/* other sections will follow */}
    </>
  );
}

export default App;
