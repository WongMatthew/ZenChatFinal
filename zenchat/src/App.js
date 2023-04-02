import logo from './image/ZenChatLogo.png';
import backgroundImage from './image/background.png';
import landingImage from './image/LandingImage.png';
import React from 'react';
import './App.css';
import { Card, Button, Carousel } from 'flowbite-react';

function App() {
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
        <img src={logo} alt="ZenChat Logo" className="mb-12" style={{marginTop: "158px"}} />
        <img src={landingImage} alt="Phone Image" className="mb-4" style={{marginTop: "63px"}} />
        <div style={{fontFamily: 'Poppins', fontStyle: 'normal', fontWeight: 400, fontSize: '25px', lineHeight: '37px'}}>
          A guided experience for better well-being
        </div>
      </div>
    </div>
  );
}
export default App;
