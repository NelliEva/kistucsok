import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardBody, MDBCardTitle, MDBCardSubTitle, MDBTypography} from "mdb-react-ui-kit";
import React from "react";

const Info = () => {
    return(
     <MDBContainer >
         <MDBRow>
             <MDBCol className="mt-5">
                <MDBCard >
                    <MDBCardBody>
                        <MDBCardTitle className="fs-3" style={{fontFamily: 'Caveat Brush'}}>Baba- és gyermekvilág</MDBCardTitle>
                        <MDBCardSubTitle className="mb-5 mt-4 fst-italic"> 
                            Ezen az oldalon olyan horgolmányok között nézelődhetsz, amelyek elsősorban babáknak, kisgyermekeknek szólnak. Ez persze nem azt jelenti, hogy felnőttek, vagy kicsit nagyobb gyerekek ne örülnének ilyesminek. 🙂
                        </MDBCardSubTitle>
                        <MDBTypography listUnStyled className='mb-4 fw-bold'>
                            <ul>
                                <li>
                                A horgolt figuráimat 100% pamut fonalból készítem. A fonal OEKO-TEX standard 100 minősítéssel rendelkezik, ez garantálja számodra, hogy a fonal mentes a káros vegyi anyagoktól, így kifejezetten bőrbarát alapanyag.
                                </li>
                                <li>
                                A figuráim arcát (szemek, száj, orr kialakítását) mindig hímzéssel készítem, így azok bármely korosztály számára biztonságosak, akár pici babáknak is adhatók.
                                </li>
                                <li>
                                Tisztításuk: mosózsákban kímélő programon, 30 fokon gépben is mosható. A még nedves figurát kézzel formára igazítjuk és fektetve egy törölközőn hagyjuk megszáradni.
                                </li>
                                <li>
                                FONTOS! A horgolt terméket nem szabad klórtartalmú vegyszerrel tisztítani.
                                </li>
                                <li>
                                Ha kéred, akkor az általad megálmodott színösszeállításban készítem el neked a kiválasztott figurát.
                                </li>
                            </ul>
                            </MDBTypography>
                            <p className="fs-5 text-end fst-italic">Kellemes nézelődést!</p>
                    </MDBCardBody>
                </MDBCard>
             </MDBCol>
         </MDBRow>
     </MDBContainer>
    )
}

export default Info;