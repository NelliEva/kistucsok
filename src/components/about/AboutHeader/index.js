import React from "react";
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText, MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import bea from '../../home/AboutSection/bea.png'


const AboutHeader = () => {
    return(
        <MDBContainer className='mb-5 mt-5 pb-5'>
            <MDBRow >
                <MDBCol lg={12} className='d-flex justify-content-center mb-4'>
                    <p className='fs-1 fst-italic shadow-1' style={{fontFamily: 'Caveat Brush'}}>Szia, Bea vagyok! Üdvözöllek!</p>
                </MDBCol>
            </MDBRow>
            <MDBRow   className='d-flex justify-content-center align-items-center mx-lg-5 px-lg-5'>
                <MDBCol sm={12} md={8} lg={8} >
                    <MDBCard style={{backgroundColor: "rgba(0, 0, 0, 0.1)"}}>
                        <MDBCardBody>
                            <MDBCardTitle className='fs-5 fw-normal mb-4' style={{fontFamily: 'Caveat Brush'}}>Mi mindent is kell tudnod rólam?</MDBCardTitle>
                            <MDBCardText className='fs-5 fw-light' style={{fontFamily: 'Caveat Brush'}}>
                            Egy kétgyermekes édesanya vagyok. Két, immár a tinédzser korba lépett fiúval. Emellett pedig egy lelkes, sőt mondhatni, hogy inkább függő horgoló. <br/>A „civil” foglalkozásomat tekintve pedig jogász.
                            </MDBCardText>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol sm={12} md={4} lg={3} className='d-flex justify-content-center align-items-center mt-5 mt-lg-0 mt-md-0'>
                    <img className='rounded-5 shadow-5 w-responsive h-responsive' src={bea} alt='' style={{width:'14rem', height:'16rem'}}/>
                </MDBCol>
            </MDBRow>
            <MDBRow className="mb-3  mt-5 pt-5 d-flex  align-items-center flex-wrap" >
                <MDBCol size="10" sm='10' lg='3' >
                    <img style={{width:'29rem', height:'20rem'}} className='rounded-5 shadow-5 ' alt='' src="https://images.unsplash.com/photo-1530396333989-24c5b8f805dd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"/>
                </MDBCol>
                <MDBCol size='10' sm='10'  lg='9'>
                    <MDBCard>
                        <MDBCardBody className="fs-6 lh-lg" style={{fontFamily: 'Caveat Brush'}}>
                        "Horgolni, még kislánykoromban tanultam meg anyukámtól. Hosszú kihagyás után kb. 5 éve kezdtem el ismét horgolni. A régi tudásomat az internetről innen-onnan összeszedett anyagokból elevenítettem fel és tökéletesítettem. Ebben a hobbiban a családom teljes mértékben mellettem állt és támogatott is. Érezték, hogy jó, ha horgolok, mert az alatt az idő alatt feltöltődök, és újra teljes erőbedobással képes vagyok velük játszani, olvasni. A legnagyobb öröm persze az volt – és még a mai napig is az – hogy mindig valami extra cukiság születik a kezeim közül, amivel aztán tovább bővülhet a játékgyűjtemény. A férjem is támogatott benne, hisz látta, hogy már akár 5 perc horgolás után is képes vagyok másként állni a dolgokhoz, és persze ő is mindig igényt tartott a kész dolgok valamelyikére."<br/>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
            <MDBRow className="mb-3 d-flex  align-items-center">
                <MDBCol size='7'>
                    <MDBCard>
                        <MDBCardBody className="fs-6 lh-lg" style={{fontFamily: 'Caveat Brush'}}>
                        "Férjem volt az, aki végig noszogatott, hogy ne csak nekik horgoljak, hanem mutassam meg mindenkinek. Igazából ezt akkor még nem akartam. Úgy éreztem, hogy tényleg csak nekik csinálom. Aztán férjem halála után úgy döntöttem, hogy az emlékére elkészítettem a Kistücsök Horgoldáját, ahol igyekszem minden eddigi munkámat megmutatni másoknak.Aztán mindezt továbbgondolva eljutottam odáig, hogy már ne csak a magam, a családom és a barátaim örömére készítsek horgolmányokat, hanem mindenkinek, aki szeretné. Úgyhogy most már bárki, aki szereti a kézzel készített csodákat, most már szabadon választhat az általam eddig horgolt dolgok közül, és amennyiben arra lehetőségem van, elkészítem neki."<br/>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol size='5' className="d-flex justify-content-center">
                    <img style={{width:'20rem', height:'25rem'}} className='rounded-5 shadow-5' alt='' src="https://images.unsplash.com/photo-1633930965364-a95fe3dbf06d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80"/>
                </MDBCol>
            </MDBRow>
            <MDBRow className="mb-3 align-items-center">
                <MDBCol size='5' className="d-flex justify-content-center">
                    <img style={{width:'20rem', height:'25rem'}} className='rounded-5 shadow-5' alt='' src="https://images.unsplash.com/photo-1589912187345-e6f884f958af?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80"/>
                </MDBCol>
                <MDBCol>
                    <MDBCard>
                        <MDBCardBody className="fs-6 lh-lg" style={{fontFamily: 'Caveat Brush'}}>
                        "Aztán a saját tapasztalatomból kiindulva, jött az ötletem, hogy segítsek másoknak is abban, hogy a sokszor végtelennek tűnő mindennapi mókuskerékből sikerüljön percekre kiszakadniuk, úgy, hogy az így eltöltött idő ne csak kellemes, hanem hasznos is legyen számukra. Ezért léptem egy nagyot gondolatban, és elhatároztam, hogy nem csak megmutatom a munkáimat, hanem meg is tanítom a többi anyukának a horgolás technikáját. Ők is képesek legyenek ilyen gyönyörű dolgokat készíteni.<br/>
                        Hiszem, hogy minden édesanyának szüksége van a gyermekeire és a munkájára fordított idő mellett egy olyan kreatív énidőre, ami alatt önmagára fókuszálva tud töltekezni. Ez akár 5 perc, akár fél óra vagy több, mindenképp pozitívan befolyásolja a nap hátralevő részét."<br/>
                            </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
            <MDBRow className="mt-5">
                <MDBCol>
                    <MDBCard className="fs-6 lh-lg" style={{backgroundColor: "rgba(0, 0, 0, 0.1)"}}>
                        <MDBCardBody className="text-center" style={{fontFamily: 'Caveat Brush'}}>
                            Ha szeretnél valamilyen csodás horgolmányt magadnak nézz körül a rendelhető termékeim között <a href="/" className="text-muted ms-2 me-2 text-decoration-underline">IDE </a> kattintva!<br/>
                            Ha pedig van saját ötleted, amit szeretnél horgoltatni, akkor <a href="/" className="text-muted ms-2 me-2 text-decoration-underline">IDE </a> kattintva arra is van lehetőséged,<br/>
                            Ha pedig szeretnél megtanulni horgolni, és magadnak készíteni, ilyen horgolt csodákat, akkor várlak szeretettel a horgoló tanfolyamom valamelyikére. A tanfolyamokról <a href="/" className="text-muted ms-2 me-2 text-decoration-underline">IDE </a>kattintva kapsz bővebb információt.
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    )
}

export default AboutHeader;