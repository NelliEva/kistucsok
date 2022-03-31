import React from "react";
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn, MDBCardSubTitle, MDBCol } from 'mdb-react-ui-kit';

const Card = ({img, title, info, date}) => {
    return(
        <MDBCard style={{ maxWidth: '22rem' }}>
            <MDBCardImage src={img} position='top' alt='...' />
            <MDBCardBody>
                <MDBCardTitle className="fw-bold">{title}</MDBCardTitle>
                <MDBCardText style={{fontFamily: 'Caveat Brush'}}>
                {info}
                </MDBCardText>
                <MDBCardSubTitle>{date}</MDBCardSubTitle>
                <MDBCol className="d-flex justify-content-end">
                    <MDBBtn className="mt-3" href='#' style={{backgroundColor:' rgb(120, 211, 240)'}}>Tovabb</MDBBtn>
                </MDBCol>
            </MDBCardBody>
        </MDBCard>
    )
}

export default Card;