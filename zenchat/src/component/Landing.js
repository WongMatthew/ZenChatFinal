import { BrowserRouter as Router, Switch, Route, Link, Routes } from 'react-router-dom';
import backgroundImage from '../image/background.png';
import React from 'react';
import './style/Chat.css'

import logo from '../image/ZenChatLogo.png';
import { Carousel } from 'flowbite-react';
import landingImage1 from '../image/LandingImage1.png';
import landingImage2 from '../image/LandingImage2.png';
import landingImage3 from '../image/LandingImage3.png';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Landing() {
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
      };

    const items = [
        {
            text: 'A Guided Experience for a Better Well-Being',
            image: landingImage1
        },
        {
            text: 'Revitalize your mental health and gain strength to power through your day',
            image: landingImage2
        },
        {
            text: "Seeking more help? We'll redirect you to trusted external resources",
            image: landingImage3
          }
    ];

    const containerStyle = {
        backgroundColor: '#A2D2FF',
        height: '100vh'
      };
    
    const bodyStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh'
    };

      return (
        <div style={containerStyle}>
            <div style={bodyStyle}>

            <div className="hero container max-w-screen-lg mx-auto pb-10 flex flex-col items-center justify-center">
                <img src={logo} alt="ZenChat Logo" className="mb-12" style={{ marginTop: "158px" }} />    
            </div>
            <div className="justify-center flex flex-col" style={{marginTop: '58px'}}>
                <Slider {...sliderSettings}>
                    {items.map(item => (
                        <div key={item.text}>
                            <img src={item.image} alt={item.text} style={{ display: 'block', margin: '0 auto' }}/>
                            <h2 style={{ marginTop: '15px', fontFamily: "Poppins", fontStyle: "normal", fontWeight: 400, fontSize: "24px", lineHeight: "39px", textAlign: "center", letterSpacing: "-0.408px", textAlign: 'center', maxWidth: '300px', margin: '0 auto' }}>{item.text}</h2>
                        </div>
                    ))}
                </Slider>
            </div>

                <div className="fixed bottom-24 left-1/2 transform -translate-x-1/2 " style={{ position: 'absolute', left: '50%', transform: 'translate(-50%)', bottom: '150px' }}>
                    <Link to="/disclaimer">
                        <button className="bg-white text-black py-3 px-6 rounded-full shadow-lg flex items-center text-xl">
                        Start Session
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M13.707 10l-4.147 4.146a.5.5 0 11-.708-.708L12.293 10l-3.44-3.438a.5.5 0 11.707-.707L13.707 10z" clipRule="evenodd" />
                        </svg>
                        </button>
                    </Link>
                    </div>
                    <div className="my-4" style={{ position: 'absolute', left: '50%', transform: 'translate(-50%)', bottom: '85px' }}>
                    <Link to="/help">
                        <button className="bg-white text-black py-3 px-6 rounded-full shadow-lg flex items-center text-xs">
                        How to Use ZenChat
                        </button>
                    </Link>
                </div>
            </div>
        </div>
      );
    }

export default Landing;