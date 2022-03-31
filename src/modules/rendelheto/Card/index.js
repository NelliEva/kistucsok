import React from "react";
import { MDBCard, MDBCardBody, MDBCardText, MDBCardImage, MDBCardTitle, MDBBtn, MDBCol } from 'mdb-react-ui-kit';

const Card = ({img, id, title, info, link}) => {
    return(
        <MDBCard className="mb-4 " style={{height:'30rem'}} >
            <a href={link}>
            <MDBCardImage src={img} alt='' position='top'  />
            <MDBCardBody className="position-relative">
                <MDBCardTitle className="text-center " style={{fontFamily: 'Caveat Brush', color: 'rgba(120, 211, 240, 1)'}} >{title}</MDBCardTitle>
                <MDBCardText className="text-center mb-1" style={{fontFamily: 'Caveat Brush', color:'black'}}>
                {info}
                </MDBCardText>
                <MDBCol className="d-flex justify-content-center">
                    <MDBBtn className="position-absolute bottom-100" color='light' size='sm' href='#'>4500Ft</MDBBtn>
                </MDBCol>
            </MDBCardBody>
            </a>
        </MDBCard>
    )
}

export default Card;