import logo from '../image/ZenChatLogo.png';
import backgroundImage from '../image/background.png';
import landingImage1 from '../image/LandingImage1.png';
import landingImage2 from '../image/LandingImage2.png';
import landingImage3 from '../image/LandingImage3.png';
import { BrowserRouter as Router, Switch, Route, Link, Routes, BrowserRouter } from 'react-router-dom';
import React from 'react';
import { Carousel, Card } from 'flowbite-react';

function Landing() {
  const style = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh'
  };

  return (
    <div style={style}>
      <div className="hero container max-w-screen-lg mx-auto pb-10 flex flex-col items-center justify-center">
        <img src={logo} alt="ZenChat Logo" className="mb-12" style={{ marginTop: "158px" }} />

        

        {/* <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 bg-red-500">
        <Carousel>
          <div className='bg-red-300'>
            <img src={landingImage1} alt="Phone Image" className="mb-4" style={{marginTop: "58px"}} />
            <div className="flex items-center justify-center ml-6 mb-6 max-w-xs max-w-[350px]" style={{fontFamily: "Poppins", fontStyle: "normal", fontWeight: 400, fontSize: "28px", lineHeight: "39px", textAlign: "center", letterSpacing: "-0.408px"}}>
              <p className="whitespace-pre-wrap">A Guided Experience for{'\n'}a Better Mental Well-Being{'\n'}through an AI Chatbot</p>
            </div>
          </div>
          <div>
            <img src={landingImage2} alt="Phone Image" className="mb-4" style={{marginTop: "58px"}} />
            <div className="flex items-center justify-center ml-6 mb-6 max-w-xs max-w-[350px]" style={{fontFamily: "Poppins", fontStyle: "normal", fontWeight: 400, fontSize: "28px", lineHeight: "39px", textAlign: "center", letterSpacing: "-0.408px"}}>
              <p className="whitespace-pre-wrap">A Guided Experience for{'\n'}a Better Mental Well-Being{'\n'}through an AI Chatbot</p>
            </div>
          </div>
          <div>
            <img src={landingImage3} alt="Phone Image" className="mb-4" style={{marginTop: "58px"}} />
            <div className="flex items-center justify-center ml-6 mb-6 max-w-xs max-w-[350px]" style={{fontFamily: "Poppins", fontStyle: "normal", fontWeight: 400, fontSize: "28px", lineHeight: "39px", textAlign: "center", letterSpacing: "-0.408px"}}>
              <p className="whitespace-pre-wrap">A Guided Experience for{'\n'}a Better Mental Well-Being{'\n'}through an AI Chatbot</p>
            </div>
          </div>
        </Carousel>
        </div> */}

        <img src={landingImage1} alt="Phone Image" className="mb-4" style={{ marginTop: "58px" }} />
        <div className="flex items-center justify-center ml-6 mb-6 max-w-xs max-w-[350px]" style={{ fontFamily: "Poppins", fontStyle: "normal", fontWeight: 400, fontSize: "28px", lineHeight: "39px", textAlign: "center", letterSpacing: "-0.408px" }}>
          <p className="whitespace-pre-wrap">A Guided Experience for{'\n'}a Better Mental Well-Being{'\n'}through an AI Chatbot</p>
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
        <div className="my-4" style={{ position: 'absolute', left: '50%', transform: 'translate(-50%)', bottom: '55px' }}>
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