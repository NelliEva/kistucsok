import React from "react";
import {  MDBIcon } from "mdb-react-ui-kit";

const SocialMedia = () => {
    return(
        <>
        <a className="" color="dark" href='https://www.facebook.com/kistucsokhorgoldaja/'><MDBIcon fab icon="facebook-square fixed-top  fa-2x" color="dark"style={{top:'20%', width:'2rem'}} /></a>
        <a className="" color="dark" href='https://www.instagram.com/kistucsokhorgoldaja/'><MDBIcon fab icon="instagram fixed-top  fa-2x" color="dark" style={{top:'26%', width:'2rem'}} /></a>
        <a className="" color="dark" href='https://hu.pinterest.com/kistucsokhorgoldaja/'><MDBIcon fab icon="pinterest fixed-top  fa-2x" color="dark" style={{top:'32%', width:'2rem'}} /></a>
        </>
    )
}
export default SocialMedia;