import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBBtn, MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import React from "react";
import bea from './bea.png'

const AboutSection = () => {
    return(
        <MDBContainer className='mb-5 mt-5 pb-5'>
            <MDBRow >
                <MDBCol lg={12} className='d-flex justify-content-center mb-4'>
                    <p className='fs-1 fst-italic shadow-1' style={{fontFamily: 'Caveat Brush'}}>Szia, üdvözöllek a honlapomon!</p>
                </MDBCol>
            </MDBRow>
            <MDBRow   className='d-flex justify-content-center mx-lg-5 px-lg-5'>
                <MDBCol sm={12} md={8} lg={8} >
                    <MDBCard style={{backgroundColor: "rgba(120, 211, 240, 0.3)"}}>
                        <MDBCardBody>
                            <MDBCardTitle className='fs-5 fw-normal mb-4' style={{fontFamily: 'Caveat Brush'}}>Engedd meg, hogy pár szóban bemutatkozzak:</MDBCardTitle>
                            <MDBCardText className='fs-5 fw-light' style={{fontFamily: 'Caveat Brush'}}>
                            Kokas Beatrix vagyok, egy kétgyermekes édesanya. Két, immár a tinédzser korba lépett (egy majdnem tizennégy és egy majdnem tizenhárom éves) fiúval.
                            Mindemellett pedig egy lelkes, sőt mondhatni, hogy inkább függő horgoló.
                            A „civil” foglalkozásomat tekintve pedig jogász.
                            </MDBCardText>
                            <div className='d-flex justify-content-end'>
                                <MDBBtn style={{backgroundColor:'rgba(120, 211, 240)'}} className='fw-bold' tag='a' href='/rolam' >Olvass Tovabb</MDBBtn>
                            </div>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol sm={12} md={4} lg={3} className='d-flex justify-content-center align-items-center mt-5 mt-lg-0 mt-md-0'>
                    <img className='rounded-5 shadow-5 w-responsive h-responsive' src={bea} alt='' style={{width:'12rem', height:'14rem'}}/>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    )
}

export default AboutSection;