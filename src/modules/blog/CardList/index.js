import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import React from "react";
import Card from "../Card";

const CardList = (props) => {
    return(
        <MDBContainer className="my-5">
            <MDBRow>
                {props.data.map((data) =>(
                <MDBCol lg='4' key={data.id}>
                    <Card id={data.id} img={data.img} title={data.title} info={data.info} date={data.date} />
                </MDBCol>
                ))}
            </MDBRow>
        </MDBContainer>
    )
}

export default CardList;