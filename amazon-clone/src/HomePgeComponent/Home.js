import React from 'react'
import './Home.css';
import Slider from 'react-slick';

import Product from './Product';
import leanstraup from './productPictures/leanStartup.jpg'
import perfume from './productPictures/bellVita.webp';
import shoes from './productPictures/shoes.jpg';
import earing from './productPictures/earing.jpg';
import frame from './productPictures/frame.jpg';
import tv from './productPictures/tv.jpg';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import PrimeVideoImage from './pictures/primevideoImage.png';
import Netflix from './pictures/Netflix.png';
import summersale from './pictures/summerSale.jpg';
import amazon_adds from './pictures/amazon adds.jpg';
import bangle from './pictures/bangle.jpg';

function Home() {

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const sliderData = [
    { img: PrimeVideoImage },
    { img: amazon_adds },
    { img: Netflix },
    { img: summersale },
    { img: bangle },
  ];

  return (
    <div className='Home'>
      <div className="home-container">
        {/* <img className='home_image' src={PrimeVideoImage} alt='primeV'/> */}
        <Slider {...sliderSettings}>
          {sliderData.map((d, index) => (
            <div key={index}>
              <img className='home_image' src={d.img} alt='' />
            </div>
          ))}
        </Slider>

      <div className="home_row">
      <Product 
      id='1' title='the lean startup' 
      price={29.99}
      image={leanstraup} 
      rating={5}/>
      <Product 
      id='2' title='the BellaVitta' 
      price={9.99}
      image={perfume} 
      rating={4}/>
      </div>

      <div className="home_row">
      <Product
      id='3'  title='the shoes' 
      price={16.89}
      image={shoes} 
      rating={4}/>
     <Product id='4'  title='Earingg' 
      price={5.99}
      image={earing} 
      rating={5}/>
   <Product id='5' title='the frame' 
      price={2.99}
      image={frame} 
      rating={4}/>
      </div>

      <div className="home_row">
      <Product id='5' title='LCD TVs' 
      price={190.99}
      image={tv} 
      rating={5}/>
        
      </div>

      </div>
    </div>
  )
}

const data=[
{
  img:{amazon_adds}
},
{
  img:{Netflix}
},
{
  img:{summersale}
},
  
  

]




export default Home;
