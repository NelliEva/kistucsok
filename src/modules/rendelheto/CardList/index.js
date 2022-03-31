import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import React from "react";
import Card from "../Card";

const CardList = (props) => {
    return(
        <MDBContainer className="my-5">
            <MDBRow>
                {props.datas.map((datas) =>(
                    <MDBCol lg='3' key={datas.id}>
                        <Card id={datas.id} img={datas.img}  info={datas.info} title={datas.title} link={datas.link}/>
                    </MDBCol>
                )
                )}
            </MDBRow>
        </MDBContainer>
      
    )
}

export default CardList;