import { MDBCol, MDBContainer, MDBIcon } from "mdb-react-ui-kit";
import React from "react";
import AllCards from "../../components/horgolmanyaim/AllCards";


const HorgolmanyaimLayout = () => {
    return(
        <>
            <MDBContainer className="my-3">
                <MDBCol  className="d-flex justify-content-center">
                    <p className="fs-1  fst-italic text-center shadow-1" style={{fontFamily: 'Caveat Brush'}}>Horgolmányok</p>
                </MDBCol>
                <MDBCol className="mt-5">
                    <p className="text-center fs-5" style={{fontFamily: 'Caveat Brush'}}>Ezen az oldalon külön témákba rendezve találhatsz meg minden olyan horgolmányt, amit már elkészítettem. Kellemes nézelődést!<MDBIcon far icon="grin" className="ms-1" /></p>
                </MDBCol>
                <AllCards/>   
            </MDBContainer>
        </>
    )
}
export default HorgolmanyaimLayout;