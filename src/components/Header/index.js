import React, {useState} from "react";
import {
    MDBContainer,
    MDBNavbar,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBBtn,
    MDBNavbarToggler,
    MDBCollapse
  } from 'mdb-react-ui-kit';
  import logo from './logo.png'

const Header = () => {

    const [showSearch, setShowSearch] = useState(false);
    const [showNav, setShowNav] = useState(false);

   

    return(
        <MDBNavbar expand='lg' dark bgColor='dark' className="justify-content-center" >
            <MDBContainer  className="m-0">
                {/* <MDBIcon fas icon="adjust" className="fa-3x " /> */}
                <a href="/"><img alt='' src={logo} style={{width:'4rem', borderRadius:'999px'}}/></a>
                <MDBNavbarToggler
                    type='button'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                    onClick={() => setShowNav(!showNav)}
                    >
                        <MDBIcon icon='bars' fas />
                </MDBNavbarToggler>
                <MDBCollapse navbar show={showNav}>
                    <MDBNavbarNav className='mr-auto mb-2 mb-lg-0 justify-content-end'>
                        <MDBNavbarItem>
                            <MDBNavbarLink active aria-current='page' href=' /horgolmanyaim' className="px-3 fw-bold  fst-italic" style={{color:'rgba(250,250,250,0.8)'}} >
                            Horgolmányaim
                            </MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <MDBNavbarLink active aria-current='page' href='/rendelheto' className="px-3 fw-bold  fst-italic" style={{color:'rgba(250,250,250,0.8)'}}>
                            Rendelhető termékeim
                            </MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <MDBNavbarLink active aria-current='page' href='/blog' className="px-3 fw-bold  fst-italic" style={{color:'rgba(250,250,250,0.8)'}}>Blog</MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <MDBNavbarLink active aria-current='page' href='/hirlevel' className="px-3 fw-bold  fst-italic" style={{color:'rgba(250,250,250,0.8)'}}>Hírlevél</MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <MDBNavbarLink active aria-current='page' href='/rolam' className="px-3 fw-bold  fst-italic" style={{color:'rgba(250,250,250,0.8)'}}>Rólam</MDBNavbarLink>
                        </MDBNavbarItem>
                    </MDBNavbarNav>

                    <form className='d-flex input-group w-auto'>
                    { showSearch && <input type='search' className='form-control' placeholder='kereses' aria-label='Search' />}
                        <MDBBtn href="#" color='dark' className="px-3" onClick={() => setShowSearch(!showSearch)}>
                        <MDBIcon fas icon="search" className="fa-lg" style={{color:'rgba(250,250,250,0.8)'}} />
                        </MDBBtn>
                    </form>
                </MDBCollapse>
            </MDBContainer>
        </MDBNavbar>
    )
}

export default Header;