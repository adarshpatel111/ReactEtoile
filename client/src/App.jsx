import React from "react";
import "./App.css";
import Home from "./Pages/Home";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      {/* <Footer /> */}
    </>
  );
};
export default App;
