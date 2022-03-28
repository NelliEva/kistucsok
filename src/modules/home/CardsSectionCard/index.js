import React from "react";
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardImage, MDBBtn } from 'mdb-react-ui-kit';

const CardsSectionCard = ({btn, description, title, img, link}) => {
    return(
        <MDBCard style={{minHeight:'27rem'}}>
            <MDBCardImage src={img} style={{ height: '250px'}} position='top' alt='' />
            <MDBCardBody className="px-2">
                <MDBCardTitle>{title}</MDBCardTitle>
                <MDBCardText>
               {description}
                </MDBCardText>
                <MDBBtn style={{backgroundColor:'rgba(120, 211, 240)'}} href={link}>{btn}</MDBBtn>
            </MDBCardBody>
        </MDBCard>
    )
}

export default CardsSectionCard;