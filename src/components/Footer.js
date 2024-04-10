import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FaLocationDot } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaEnvelope } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { LiaInstagram } from "react-icons/lia";
import { ImPinterest } from "react-icons/im";

function Footer() {
  return (
    <div>
        <div className='bg-dark text-white'>
          <Container>
            <div className='row mt-2 p-4'>
                <div className='col'>
                    <h2  className='mb-3'style={{fontFamily:"brush script mt"}}>Contact Us</h2>
                    <p><Link to='/' className='text-white'><FaLocationDot /> Location</Link></p>
                    <p><Link to='/' className='text-white'><BsFillTelephoneFill /> Call +01123456780</Link></p>
                    <p><Link to='/' className='text-white'><FaEnvelope /> feane@gmail.com</Link></p>
                </div>
                <div className='col'>
                <h2  className='mb-3'style={{fontFamily:"brush script mt"}}>Feane</h2>
                <p>Necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with</p>
                <Link className='text-white fs-3 me-2'><FaFacebook /></Link>
                <Link className='text-white fs-3 me-2'><AiFillTwitterCircle /></Link>
                <Link className='fs-2 me-2 '><TiSocialLinkedinCircular className='bg-white text-dark rounded-circle' /></Link>
                <Link className='text-white fs-3 me-2 '><LiaInstagram className='bg-white text-dark rounded-circle p-1'/></Link>
                <Link className='text-white fs-3 me-2 '><ImPinterest /></Link>
                </div>
                <div className='col'>
                <h2  className='mb-3'style={{fontFamily:"brush script mt"}}>Opening Hours</h2>
                <p>Everyday</p>
                <p>10.00Am - 10.00Pm</p>
                </div>
            </div>
            <p className='mt-4'>&copy; 2024 All Rights Reserved By Feane Restaurant</p>
            <p className='pb-5'>&copy; Distributed By Anant Joshi.</p>
          </Container>
        </div>
    </div>
  )
}

export default Footer