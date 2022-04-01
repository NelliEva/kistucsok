import React,{useState} from "react";
import { MDBCard, MDBCardBody, MDBCardText, MDBCardImage, MDBCardTitle, MDBBtn, MDBCol } from 'mdb-react-ui-kit';

const Card = ({img, img2, id, title, info, link, price, color, color2}) => {

    const [newColor, setNewColor] = useState(img)

    function onColor() {
            setNewColor(img2)
    }
    function onColorBack() {
            setNewColor(img)
    }

    return(
        <MDBCard className="mb-4 " style={{height:'30rem'}} >
            <a href={link}>
            <MDBCardImage src={newColor} alt='' position='top'  />
            </a>
            <MDBCardBody >
                <MDBCardTitle className="text-center " style={{fontFamily: 'Caveat Brush', color: 'rgba(120, 211, 240, 1)'}} >{title}</MDBCardTitle>
                <MDBCol className="d-flex justify-content-center my-1">
                    <MDBBtn style={{backgroundColor:'rgba(234, 232, 228, 0.7)', color:'black'}} className="fw-bolder"  size='sm' href='#'>{price}Ft</MDBBtn>
                </MDBCol>
                <MDBCardText className="text-center mb-1 fw-light" style={{fontFamily: 'Caveat Brush', color:'black'}}>
                {info}
                </MDBCardText>
                <MDBCol className="d-flex justify-content-end">
                    <div onClick={onColorBack} className=" me-1" style={{width: '1rem', height: '1rem', backgroundColor:color}}></div>
                    <div onClick={onColor} className="" style={{width: '1rem', height: '1rem', backgroundColor:color2}}></div>
                </MDBCol>
            </MDBCardBody>
           
        </MDBCard>
    )
}

export default Card;