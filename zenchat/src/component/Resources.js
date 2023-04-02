import backgroundWhiteBarImage from '../image/BackgroundWhiteBar.png';
import RiseShineButton from '../image/RiseShineButton.png';
import WindDownButton from '../image/WindDownButton.png';
import BurMentalHealth from '../image/BurMentalHealth.png';
import VanMentalHeatlh from '../image/VanMentalHealth.png';
import AbbMentalHealth from '../image/AbbMentalHealth.png';
import logo from '../image/ZenChatLogo.png';
import { BrowserRouter as Router, Switch, Route, Link, Routes } from 'react-router-dom';
import React from 'react';
import {Card} from 'flowbite-react';

function Resources() {
    const containerStyle = {
        backgroundColor: '#3A86FF',
        height: '120vh'
      };
    
    const bodyStyle = {
        backgroundImage: `url(${backgroundWhiteBarImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh'
    };

    const tailoredResourcesStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        maxWidth: '330px',
        textAlign: 'center',
        justifyContent: 'center',
        margin: 'auto'
    };

    const buttonStyle = {
        backgroundColor: 'transparent',
        border: 'none',
        margin: '15px 0'
    }
    
    const RiseShineButtonStyle = {
        ...buttonStyle,
        marginTop: "-40px",
      };

      const windDownButtonStyle = {
        ...buttonStyle,
        marginTop: "-100px",
      };

      return (
        <div style={containerStyle}>
            <div style={bodyStyle}>
                <div style={{ height: '116px', backgroundColor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Link to="/end">
                        <button style={{ backgroundColor: '#3167EB', color: 'white', fontSize: '16px', fontWeight: 'bold', padding: '10px', borderRadius: '4px', marginRight: '16px' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                        </button>
                    </Link>
                    <h1 style={{ fontSize: '36px', fontWeight: 'bold' }}>External Resources</h1>
                </div>

                <div style={tailoredResourcesStyle}>
                    <h1 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '10px', marginTop: '40px'}}>Your Tailored Resources</h1>
                    <p style={{ fontSize: '16px' }}>These are the resources tailored to relieve you of your burdens and uplift your state of mind.</p>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', marginTop: '34px', paddingLeft: '50px', paddingRight: '20px' }}>
                    <h2 style={{ fontWeight: 'bold', fontSize: '20px', marginRight: '10px' }}>Zen Exercises</h2>
                    <Link to="">
                        <button style={{color: 'black', fontSize: '16px', fontWeight: 'bold', padding: '10px', borderRadius: '4px' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </Link>
                </div>

                <Link to="/zen-exercises">
                    <button style={{ ...RiseShineButtonStyle }}>
                        <img src={RiseShineButton} alt="Rise and Shine Button" />
                    </button>
                </Link>


                <Link to="">
                    <button style={{ ...windDownButtonStyle }}>
                        <img src={WindDownButton} alt="Wind Down Button" />
                    </button>
                </Link>

                <div style={{ display: 'flex', alignItems: 'center', marginTop: '-50px', paddingLeft: '50px', paddingRight: '20px' }}>
                    <h2 style={{ fontWeight: 'bold', fontSize: '20px', marginRight: '10px' }}>Local Service Centres</h2>
                    <Link to="">
                        <button style={{color: 'black', fontSize: '16px', fontWeight: 'bold', padding: '10px', borderRadius: '4px' }}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>
                    </Link>
                </div>

                <button style={{ ...RiseShineButtonStyle }}>
                    <a href="https://www.vch.ca/en/health-topics/community-based-mental-health-substance-use-services">
                        <img src={VanMentalHeatlh} alt="VanMental" />
                    </a>
                </button>

                    <button style={{ ...windDownButtonStyle }}>
                    <a href="https://www.fraserhealth.ca/Service-Directory/Locations/Burnaby/burnaby-mental-health-centre">
                        <img src={BurMentalHealth} alt="BurMental" />
                    </a>
                </button>

                <button style={{ ...windDownButtonStyle }}>
                    <a href="https://www.fraserhealth.ca/Service-Directory/Service-At-Location/C/D/mental-health-centre---abbotsford">
                        <img src={AbbMentalHealth} alt="AbbMental" />
                    </a>
                </button>

            </div>
        </div>
      );
    }

export default Resources;