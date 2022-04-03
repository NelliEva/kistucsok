import React from "react";
import { MDBCard, MDBCardBody, MDBCardTitle,  MDBCardImage, MDBBtn } from 'mdb-react-ui-kit';


const Card = ({title, img, link}) => {
    return(
        <MDBCard className="mb-4" >
            <MDBCardImage src={img} style={{height: '20rem'}} position='top' alt='...' />
            <MDBCardBody className="d-flex justify-content-center flex-wrap">
                <MDBCardTitle className="w-100 text-center fs-3" style={{fontFamily: 'Caveat Brush'}}>{title}</MDBCardTitle>
                {/* <MDBCardText>
                Some quick example text to build on the card title and make up the bulk of the card's content.
                </MDBCardText> */}
                <MDBBtn className="mt-1" color='light' href={link} style={{fontFamily: 'Caveat Brush'}}>Tovabb</MDBBtn>
            </MDBCardBody>
        </MDBCard>
    )
}

export default Card;