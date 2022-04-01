import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import React from "react";
import Card from "../Card";

const CardList = (props) => {
    return(
        <MDBContainer className="my-5">
            <MDBRow>
                {props.datas.map((datas) =>(
                    <MDBCol sm='6' md='6' lg='3' size="6" key={datas.id}>
                        <Card id={datas.id} img={datas.img}  info={datas.info} title={datas.title} link={datas.link} price={datas.price} color={datas.color} color2={datas.color2} img2={datas.img2}/>
                    </MDBCol>
                )
                )}
            </MDBRow>
        </MDBContainer>
      
    )
}

export default CardList;