import { MDBContainer, MDBInput,
    MDBCol,
    MDBRow,
    MDBCheckbox,
    MDBBtn } from "mdb-react-ui-kit";
import React from "react";

const Form = () => {
    return(
        <MDBContainer>
            <form>
            <MDBCol className="text-center mb-5 fst-italic">
                <strong>Iratkozz fel most!</strong><br/>
                Add meg az adataidat és már küldöm is a 10%-os kedvezményre jogosító kupont, valamint innentől kezdve időszakonként az értesítéseket! A feliratkozással hozzájárulsz ahhoz, hogy a számodra a Kistücsök Horgoldája az újdonságokról, paktikákról értesítéseket, valamint a kedvezményeket biztosító kuponokat és eDM-et küldjön.
            </MDBCol>
                <MDBRow className='mb-4'>
                    <MDBCol>
                    <MDBInput id='form3Example1' label='Vezetékneved' />
                    </MDBCol>
                    <MDBCol>
                    <MDBInput id='form3Example2' label='Keresztneved' />
                    </MDBCol>
                </MDBRow>
                <MDBInput className='mb-4' type='email' id='form3Example3' label='Email-címed' />
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
                        Feliratkozok es Kerem a Kedvezmenyt
                    </MDBBtn>
                </MDBCol>
            </form>

        </MDBContainer>
    )
}

export default Form;