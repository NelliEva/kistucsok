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
import {
  BrowserRouter,
} from "react-router-dom";



  const AppRoutes = () => {
      return(
        <>
        <Header/>
        <SocialMedia/>
        <BrowserRouter basename={process.env.PUBLIC_URL} >
          <Routes>
              <Route  exact index element={<Home />} /> 
              <Route  path='/rolam' element={<About />} />
              <Route  path='/horgolmanyaim' element={<Horgolmanyaim />} />
              {/* <Route path="*" element={<NotFound/>}/> */}
          </Routes>
        </BrowserRouter>
       
        <Footer/>
    </>
      )
  }

  export default AppRoutes;