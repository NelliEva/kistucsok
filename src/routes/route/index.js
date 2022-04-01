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
import Hirlevel from "../Hirlevel";
import Rendelheto from "../Rendelheto";
import Blog from "../Blog";
import Tanfolyam from "../Tanfolyam";




  const AppRoutes = () => {
      return(
        <>
        <Header/>
        <SocialMedia/>
        
          <Routes>
              <Route  exact path='/' element={<Home />} /> 
              <Route  path='rolam' element={<About />} />
              <Route  path='horgolmanyaim' element={<Horgolmanyaim />} />
              <Route  path='rendelheto' element={<Rendelheto />} />
              <Route path='blog' element={<Blog/>} />
              <Route  path='hirlevel' element={<Hirlevel />} />
              <Route  path='tanfolyam' element={<Tanfolyam/>} />
              {/* <Route path="*" element={<NotFound/>}/> */}
          </Routes>
      
       
        <Footer/>
    </>
      )
  }

  export default AppRoutes;