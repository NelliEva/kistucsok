import { MDBContainer } from "mdb-react-ui-kit";
import React from "react";
import Form from "../../components/hirlevel/Form";
import Infos from "../../components/hirlevel/Infos";

const HirlevelLayout =() => {
    return(
        <MDBContainer>
        <Infos/>
        <Form/>
        </MDBContainer>
    )
}

export default HirlevelLayout;