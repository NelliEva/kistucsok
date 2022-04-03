import { MDBContainer } from "mdb-react-ui-kit";
import React from "react";
import AllCards from "../../components/horgolmanyaim/baby/AllCards";
import Info from "../../components/horgolmanyaim/baby/Info";



const BabyLayout = () => {
    return(
            <MDBContainer className="my-5" style={{backgroundColor:'rgba(255, 220, 247, 0.4)'}}>
              <Info/>
              <AllCards/>  
            </MDBContainer>
    )
}
export default BabyLayout;