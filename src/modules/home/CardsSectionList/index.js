
import React from "react";
import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import CardsSectionCard from "../CardsSectionCard";

const CardsSectionList = (props) => {
    return(
        <MDBContainer className="mt-5">
            <MDBRow className="d-flex justify-content-center mx-xl-5 px-xl-5">
            {props.item.map((item) => (
                    <MDBCol sm={'9'} md={'6'} lg={'4'} xl={'4'} size='10' key={item.id} className='mb-5' >
                        <CardsSectionCard id={item.id} description={item.description}  title={item.title} btn={item.btn} img={item.img} link={item.link}/>
                    </MDBCol>
                ))}
            </MDBRow>
        </MDBContainer>
    )
}

export default CardsSectionList;