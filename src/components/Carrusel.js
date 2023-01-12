import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import primero from '../images/banner5.jpg';
import segundo from '../images/banner2.jpg';
import tercero from '../images/banner3.jpg'

const Carrusel = () => {
  return (
        <Carousel>
            <Carousel.Item className='centrado'>
                <img src={primero} width='55%' />
            </Carousel.Item>
            <Carousel.Item className='centrado'>
                <img src={segundo}  width='45%'/>
            </Carousel.Item>
            <Carousel.Item className='centrado'>
                <img src={tercero} width='60%'  />
            </Carousel.Item>
        </Carousel>
  )
}

export default Carrusel