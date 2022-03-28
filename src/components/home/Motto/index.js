import React from "react";
import { MDBCard, MDBCardText, MDBCardBody, MDBCardHeader, MDBCol, MDBRow, MDBIcon } from 'mdb-react-ui-kit';


const Motto = () =>{
    return(
        <MDBRow className="d-flex justify-content-center">
            <MDBCol lg='9' >
                <MDBCard background='light' className='mb-3 mt-5 pt-3' >
                    <MDBCardHeader className=" fs-5" style={{backgroundColor:'rgba(120, 211, 240, 0.5)', color:'white'}}> 
                        <MDBIcon fas icon="quote-left" className="me-2"/>
                        <MDBIcon fas icon="quote-right" className="me-3"/>
                         Mottóm
                    </MDBCardHeader>
                    <MDBCardBody>
                        <MDBCardText className="fs-5" style={{fontFamily: 'Caveat Brush'}}>
                        “A horgolmányaimat mindig olyan minőségben készítem el, mintha a saját gyermekeimnek készíteném. Odafigyelek minden egyes részletre, és mindig arra törekszem, hogy amit kiadok a kezeim közül az tökéletes legyen.”
                        </MDBCardText>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
        </MDBRow>
    )
}

export default Motto;