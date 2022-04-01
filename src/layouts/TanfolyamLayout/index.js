import { MDBContainer } from "mdb-react-ui-kit";
import React from "react";
import Form from "../../components/tanfolyam/Form";
import Infos from "../../components/tanfolyam/Infos";



const TanfolyamLayout = () => {
    return(
        <>
            <MDBContainer >
             <Infos/>
             <Form/>
            </MDBContainer>
        </>
    )
}
export default TanfolyamLayout;