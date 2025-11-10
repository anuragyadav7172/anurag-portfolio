import React from "react";
import NavigationBar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";

function App() {
  return (
    <>
      <NavigationBar />
      <Hero />
      <About />
      {/* other sections will follow */}
    </>
  );
}

export default App;
