import React, { useRef } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronCircleLeft } from "react-icons/fa";
import { FaChevronCircleRight } from "react-icons/fa";
import Slider from "react-slick";
function Customers() {
    let sliderRef = useRef(null);
    const next = () => {
        sliderRef.slickNext();
    };
    const previous = () => {
        sliderRef.slickPrev();
    };
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 5000,
        cssEase: "linear",
        nextArrow: <FaChevronCircleRight />,
        prevArrow: <FaChevronCircleLeft />,
    };
    return (
        <div>
            <h1 style={{ fontFamily: "brush script mt" }} className='mt-4'>What Says Our Customers</h1>
            <div className="slider-container" style={{overflow:"hidden"}}>
                <Slider ref={slider => {
                    sliderRef = slider;
                }}{...settings}>
                    <div className='p-4'>
                        <div className='bg-dark text-white p-3'>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, accusamus? Quam excepturi, dignissimos nobis reprehenderit delectus id vel quasi quaerat, esse qui omnis deserunt, minima consequuntur inventore molestiae libero architecto.</p>
                            <h5>Moana Michell</h5>
                            <p>Magna Aliqua</p>
                        </div>
                        <img src='./images/client1.jpg' alt='moana' className='img-fluid mx-auto mt-3 d-block rounded-circle border-4 border-warning h-25 w-25 border float-start' />
                    </div>
                    <div className='p-4'>
                        <div className='bg-dark text-white p-3'>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, accusamus? Quam excepturi, dignissimos nobis reprehenderit delectus id vel quasi quaerat, esse qui omnis deserunt, minima consequuntur inventore molestiae libero architecto.</p>
                            <h5>Mike Hamell</h5>
                            <p>Magna Aliqua</p>
                        </div>
                        <img src='./images/client2.jpg' alt='moana' className='img-fluid mx-auto mt-3 d-block rounded-circle border-4 border-warning h-25 w-25 border float-start' />
                    </div>
                    <div className='p-4'>
                        <div className='bg-dark text-white p-3'>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, accusamus? Quam excepturi, dignissimos nobis reprehenderit delectus id vel quasi quaerat, esse qui omnis deserunt, minima consequuntur inventore molestiae libero architecto.</p>
                            <h5>Moana Michell</h5>
                            <p>Magna Aliqua</p>
                        </div>
                        <img src='./images/client1.jpg' alt='moana' className='img-fluid mx-auto mt-3 d-block rounded-circle border-4 border-warning h-25 w-25 border float-start' />
                    </div>
                    <div className='p-4'>
                        <div className='bg-dark text-white p-3'>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, accusamus? Quam excepturi, dignissimos nobis reprehenderit delectus id vel quasi quaerat, esse qui omnis deserunt, minima consequuntur inventore molestiae libero architecto.</p>
                            <h5>Mike Hamella</h5>
                            <p>Magna Aliqua</p>
                        </div>
                        <img src='./images/client2.jpg' alt='moana' className='img-fluid mx-auto mt-3 d-block rounded-circle border-4 border-warning h-25 w-25 border float-start' />
                    </div>

                </Slider>
                <FaChevronCircleLeft className='text-warning fs-2 me-2' onClick={previous} />
                <FaChevronCircleRight className='text-warning fs-2' onClick={next} />
            </div>
        </div>
    )
}

export default Customers