import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import AddSites from "./components/AddSites";
import Footer from "./components/Footer";
import Login from "./screens/Login";
import Register from "./screens/Register";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/home" element={<Home />} />
        <Route path="/AddSites" element={<AddSites/>}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
