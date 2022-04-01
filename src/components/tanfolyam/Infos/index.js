import { MDBContainer, MDBRow } from "mdb-react-ui-kit";
import React from "react";


const Infos = () => {
    return(
        <MDBContainer className="mt-5 position-relative">
            <MDBRow className="d-flex justify-content-center">
                <p className="position-absolute top-0 fs-4 px-5 pt-4 text-start lh-lg" style={{fontFamily: 'Caveat Brush'}}>
                <strong>Tanfolyamok</strong>
                <br/>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                <br/> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                <br/>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                <br/>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium 
                <br/>doloremque laudantium, totam rem aperiam, eaque ipsa quae ab. 
                <br/> Excepteur sint occaecat cupidatat non proident,
                <br/> sunt in culpa qui officia deserunt
                <br/> mollit anim id est laborum.
                <br/> Bea
                </p>
                <img className="" alt='' src='https://images.unsplash.com/photo-1595341595379-cf1cb694ea1f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=860&q=80' style={{height:'40rem', width:'80rem'}}/>
            </MDBRow>
        </MDBContainer>
    )
}

export default Infos;