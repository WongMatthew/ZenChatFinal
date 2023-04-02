import backgroundImage from '../image/background.png';
import logo from '../image/ZenChatLogo.png';
import { BrowserRouter as Router, Switch, Route, Link, Routes, BrowserRouter } from 'react-router-dom';
import React from 'react';
import {Card} from 'flowbite-react';

function Disclaimer() {
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
            </div>
            <div className=''>
                <Card style={{ marginTop: '75px', marginLeft: '25px', marginRight: '25px' }}>
                    <div style={{ marginBottom: "10px" }}>
                        <h1 style={{ fontWeight: "bold", fontSize: "30px" }}>
                        User Disclaimer
                        </h1>
                    </div>
                    <div style={{ marginBottom: "5px" }}>
                        <h2 style={{ fontSize: "15px", marginTop: "10px" }}>
                        Please be aware that this AI chatbot is designed to provide insight and guidance only, 
                        and is not intended to be relied upon for professional mental health advice. We strongly 
                        recommend that you seek external resources and consult with qualified professionals before making 
                        any decisions based on the information provided by this chatbot. By continuing to use this service, 
                        you acknowledge that you have read and understood this disclaimer.
                        </h2>
                    </div>
                    <div>
                        <h2 style={{ fontSize: "15px", marginTop: "10px"}}>
                        By beginning, you acknowledge this disclaimer
                        </h2>
                    </div>
                    <div className='text-center mt-1'>
                        <Link to="/">
                            <button className="bg-indigo-500 text-black py-3 px-6 rounded-full shadow-lg text-xl" style={{ minWidth: '150px', backgroundColor: "#D9D9D9"}}>
                            Back
                            </button>
                        </Link>
                        <Link to="/">
                            <button className="bg-indigo-500 text-black py-3 px-6 rounded-full shadow-lg text-xl" style={{ minWidth: '150px', backgroundColor: "#3A86FF", marginRight: "1rem" }}>
                            Begin
                            </button>
                        </Link>
                    </div>
                </Card>
            </div>
        </div>
    )
}

export default Disclaimer;