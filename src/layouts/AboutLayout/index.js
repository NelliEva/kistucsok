import { MDBContainer } from "mdb-react-ui-kit";
import React from "react";
import AboutHeader from "../../components/about/AboutHeader";


const AboutLayout = () => {
    return(
        <>
            <MDBContainer >
              <AboutHeader/>  
            </MDBContainer>
        </>
    )
}
export default AboutLayout;