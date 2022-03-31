import { MDBCard, MDBCardBody, MDBCardTitle, MDBContainer, MDBCol } from "mdb-react-ui-kit";
import React from "react";

const Infos = () => {
    return(
        <>
        <MDBContainer>
            <MDBCol  className="d-flex justify-content-center">
            <p className="fs-1  fst-italic text-center shadow-1 mt-4 mb-5" style={{fontFamily: 'Caveat Brush'}}>Hirlevel</p>
            </MDBCol>
            <p className="fs-5 text-center" style={{fontFamily: 'Caveat Brush'}}>Ha szeretnél értesülni az újdonságokról, vagy csaknem akarsz lemaradni az újabb  írásaimról, de túl elfoglalt vagy ahhoz, hogy időnként csak úgy lapozgass az oldalamon, akkor iratkozz fel a hírlevelemre!</p>
            <MDBCol className="my-5">
                <MDBCard style={{background:'linear-gradient(to top right, rgba(120, 211, 240, 0), rgba(120, 211, 240, 0.2))'}}>
                    <MDBCardTitle className="pt-3 ps-3">Mit is kapsz, ha feliratkozol rá?</MDBCardTitle>
                    <MDBCardBody >
                        <MDBCard className="mb-3">
                            <MDBCardBody>
                            Minden alkalommal, amikor egy új horgolt termékem válik rendelhetővé, vagy bármilyen más újdonság jelenik meg, akkor azonnal értesítést kapsz róla a megadott email címedre.
                            </MDBCardBody>
                        </MDBCard>
                        <MDBCard className="mb-3">
                            <MDBCardBody>
                            Időszakonként különböző mértékű kedvezményre jogosító kuponokat küldök, melyeket egyes horgolmányaim megvásárlásakor tudsz felhasználni.
                            </MDBCardBody>
                        </MDBCard>
                        <MDBCard className="mb-3">
                            <MDBCardBody>
                            Minden alkalommal, amikor egy új írás jelenik meg az oldalamon, értesítést küldök a megadott email címedre a bejegyzés címével, és egy rövid tartalmi összefoglalóval.
                            </MDBCardBody>
                        </MDBCard>
                        <MDBCard>
                            <MDBCardBody>
                            <strong>+ egy extraság!</strong> Mindenki, aki feliratkozik a hírlevelemre, kap egy <strong>10%-os kedvezményre jogosító kupont</strong>, amit az általam horgolt termékek rendelése esetén vehet igénybe, a feliratkozástól számított 30 napon belül.
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCardBody>
                </MDBCard>
            </MDBCol>
            <MDBCol className="d-flex justify-content-center">
            <img className="rounded-5" alt='' style={{width:'20rem'}} src='https://images.unsplash.com/photo-1585910464277-ee5c59db78e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80'/>
            </MDBCol>
            <MDBCol className="my-5">
                <MDBCard className="text-center">
                    <MDBCardTitle className="pt-3 ps-3 fs-6">
                    Mi van, ha menet közben meggondolod magad és mégsem szeretnél hírlevelet kapni?
                    </MDBCardTitle>
                    <MDBCardBody>Hát semmi! A hírlevélről bármikor egy kattintással le tudsz iratkozni.</MDBCardBody>
                    <MDBCardTitle className="pt-3 ps-3 fs-6">
                    FONTOS!
                    </MDBCardTitle>
                    <MDBCardBody> Érvényes e-mail címet adjál meg, mert az <strong>ajándék 10%-os kedvezményre jogosító kupont</strong>, valamint az újdonságokról szóló értesítéseket arra fogom megküldeni!</MDBCardBody>
                    <MDBCardTitle className="pt-3 ps-3 fs-6">
                    Hogyan is tudsz feliratkozni?
                    </MDBCardTitle>
                    <MDBCardBody>Csak töltsd ki az alábbi űrlapot!</MDBCardBody>
                </MDBCard>
            </MDBCol>
        </MDBContainer>
        </>
    )
}

export default Infos;