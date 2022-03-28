import { MDBFooter } from "mdb-react-ui-kit";
import React from "react";

const Footer = () =>{
    return(
        <MDBFooter bgColor='dark' className='text-center text-lg-start text-muted mt-5'>
            <section className='d-flex justify-content-center  p-4 border-bottom'>
                <div className='me-5 d-none d-lg-block'>
                <span>A Kistücsök Horgoldájával az alábbi közösségi felületeken  is találkozhatsz:</span>
                </div>

                <div>
                <a href='https://www.facebook.com/kistucsokhorgoldaja/' className='me-4 text-reset'>
                    <i className='fab fa-facebook-f'></i>
                </a>
                <a href='https://www.instagram.com/kistucsokhorgoldaja/' className='me-4 text-reset'>
                    <i className='fab fa-instagram'></i>
                </a>
                <a href='https://hu.pinterest.com/kistucsokhorgoldaja/' className='me-4 text-reset'>
                    <i className='fab fa-pinterest'></i>
                </a>
                </div>
            </section>

            <section className=''>
                <div className='container text-center text-md-start mt-5'>
                <div className='row mt-3'>
                    <div className='col-md-3 col-lg-4 col-xl-3 mx-auto mb-4'>
                    <h6 className='text-uppercase fw-bold mb-4'>
                        Kistücsök Horgoldája
                    </h6>
                    <p>
                        Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                        consectetur adipisicing elit.
                    </p>
                    <p>
                    Dr. Kokas Beatrix © 2021
                    </p>
                    </div>

                    <div className='col-md-2 col-lg-2 col-xl-2 mx-auto mb-4'>
                    <h6 className='text-uppercase fw-bold mb-4'>Termekek</h6>
                    <p>
                        <a href='#!' className='text-reset'>
                        Horgolmányaim
                        </a>
                    </p>
                    <p>
                        <a href='#!' className='text-reset'>
                        Rendelhető termékeim
                        </a>
                    </p>
                    </div>

                    <div className='col-md-3 col-lg-2 col-xl-2 mx-auto mb-4'>
                    <h6 className='text-uppercase fw-bold mb-4'>Linkek</h6>
                    <p>
                        <a href='#!' className='text-reset'>
                        Arazas
                        </a>
                    </p>
                    <p>
                        <a href='#!' className='text-reset'>
                        Szallitas
                        </a>
                    </p>
                    <p>
                        <a href='#!' className='text-reset'>
                        Rendelesek
                        </a>
                    </p>
                    <p>
                        <a href='#!' className='text-reset'>
                        Adatvédelmi nyilatkozat
                        </a>
                    </p>
                    <p>
                        <a href='#!' className='text-reset'>
                        Általános Szerződési Feltételek
                        </a>
                    </p>
                    </div>

                    <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4'>
                    <h6 className='text-uppercase fw-bold mb-4'>Kapcsolat</h6>
                    <p>
                        <i className='fas fa-home me-3'></i> Budapest, Magyarorszag
                    </p>
                    <p>
                        <i className='fas fa-envelope me-3'></i>
                        bea@kistucsokhorgoldaja.hu
                    </p>
                    <p>
                        <i className='fas fa-envelope me-3'></i>
                        megrendeles@kistucsokhorgoldaja.hu
                    </p>
                    <p>
                        <i className='fas fa-phone me-3'></i> +36-70/367-3533
                    </p>
                    </div>
                </div>
                </div>
            </section> 
    </MDBFooter>
    )
}

export default Footer;