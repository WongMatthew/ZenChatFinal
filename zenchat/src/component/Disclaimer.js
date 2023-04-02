import backgroundImage from '../image/background.png';
import logo from '../image/ZenChatLogo.png';
import { BrowserRouter as Router, Switch, Route, Link, Routes, BrowserRouter } from 'react-router-dom';
import React from 'react';

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
        </div>
    )
}

export default Disclaimer;