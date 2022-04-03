import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import React from "react";
import Card from "../Card";


const CardList = (props) => {
    return(
        <MDBContainer className="my-5">
            <MDBRow>
                {props.items.map((items) =>(
                    <MDBCol sm='6' md='6' lg='3' size="6" key={items.id}>
                        <Card id={items.id} img={items.img} title={items.title} link={items.link}/>
                    </MDBCol>
                )
                )}
            </MDBRow>
        </MDBContainer>
      
    )
}

export default CardList;