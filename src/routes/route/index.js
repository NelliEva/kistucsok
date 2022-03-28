import React from "react";
import {
    Routes,
    Route,
  } from "react-router-dom";
import Home from "../Home";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import SocialMedia from "../../components/SocialMedia";
import About from "../About";
import Horgolmanyaim from "../Horgolmanyaim";


  const AppRoutes = () => {
      return(
        <>
        <Header/>
        <SocialMedia/>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/rolam" element={<About />} />
            <Route path="/horgolmanyaim" element={<Horgolmanyaim />} />
        </Routes>
        <Footer/>
    </>
      )
  }

  export default AppRoutes;