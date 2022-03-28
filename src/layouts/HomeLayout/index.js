
import { MDBContainer } from "mdb-react-ui-kit";
import React from "react";
import AboutSection from "../../components/home/AboutSection";
import CardsSection from "../../components/home/CardsSection";
import Motto from "../../components/home/Motto";

const HomeLayout = () => {
    return(
        <>
            <MDBContainer >
                <AboutSection/>
                <CardsSection/>
                <Motto/>
            </MDBContainer>
        </>
    )
}
export default HomeLayout;