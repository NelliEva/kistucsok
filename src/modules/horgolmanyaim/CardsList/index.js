import React from "react";
import { MDBCol, MDBContainer, MDBRow } from 'mdb-react-ui-kit';
import Card from "../Card";


const CardsList = (props) => {
    return(
        <MDBContainer className="my-5 ">
            <MDBRow className="mx-5 px-5">
                {props.item.map((item) => (
                    <MDBCol lg='4' key={item.id}>
                        <Card id={item.id} title={item.title} img={item.img} />
                    </MDBCol>
                ))}
            </MDBRow>
        </MDBContainer>
    )
}
export default CardsList;