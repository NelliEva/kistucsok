import React from "react";
import { MDBContainer, MDBInput,
    MDBCol,
    MDBRow,
    MDBCheckbox,
    MDBBtn } from "mdb-react-ui-kit";


const Form = () => {
    return(
        <MDBContainer className="my-5">
        <form>
        <MDBCol className="text-center mb-5 fst-italic">
            <strong>Iratkozz fel most!</strong>
        </MDBCol>
            <MDBRow lg='3' className='mb-4'>
                <MDBCol>
                    <MDBInput id='form3Example1' label='Vezetékneved' />
                </MDBCol>
                <MDBCol>
                    <MDBInput id='form3Example2' label='Keresztneved' />
                </MDBCol>
            </MDBRow>
            <MDBRow>
                <MDBCol>
                    <MDBInput className='mb-4' type='email' id='form3Example3' label='Email-címed' />
                </MDBCol>
                <MDBCol>
                    <MDBInput className='mb-4' type='phone' id='form3Example3' label='Telefonszamod' />
                </MDBCol>
            </MDBRow>
            <MDBRow className="mb-5 mt-3">
                <MDBCol className="d-flex justify-content-center">
                    <select name="cars" id="cars">
                        <option value="kezdo">Valasz tanfolyamot</option>
                        <option value="saab">Kezdo</option>
                        <option value="opel">Halado</option>
                    </select>
                </MDBCol>
            </MDBRow>
            <MDBCheckbox
                wrapperClass='d-flex justify-content-center mb-4'
                id='form3Example5'
                label='Az Adatvédelmi Nyilatkozat tartalmát megismertem és elfogadom.'
                defaultChecked
            />
            <MDBCol className="d-flex justify-content-center">
                <a style={{color:'black', textDecoration:'underline'}} href='#!'>Adatvédelmi Nyilatkozat</a>
            </MDBCol>
            <MDBCol className="d-flex justify-content-center mt-3">
                <MDBBtn color='info' type='submit' className='mb-4' >
                    Feliratkozok
                </MDBBtn>
            </MDBCol>
        </form>

    </MDBContainer>
    )
}

export default Form;