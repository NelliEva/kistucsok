import React from "react";
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCol } from 'mdb-react-ui-kit';

const Card = ({img, title, link}) => {
    return(
        <MDBCard className="mb-4 " >
            <a href={link}>
            <MDBCardImage src={img} alt='' position='top'  />
            </a>
            <MDBCardBody >
                <MDBCardTitle className="text-center " style={{fontFamily: 'Caveat Brush', color: 'rgba(120, 211, 240, 1)'}} >{title}</MDBCardTitle>
                {/* <MDBCol className="d-flex justify-content-end">
                    <div onClick={onColorBack} className=" me-1" style={{width: '1rem', height: '1rem', backgroundColor:color}}></div>
                    <div onClick={onColor} className="" style={{width: '1rem', height: '1rem', backgroundColor:color2}}></div>
                </MDBCol> */}
            </MDBCardBody>
           
        </MDBCard>
    )
}

export default Card;