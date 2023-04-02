import backgroundImage from '../image/background.png';
import logo from '../image/ZenChatLogo.png';
import { BrowserRouter as Router, Switch, Route, Link, Routes, BrowserRouter } from 'react-router-dom';
import React from 'react';
import {Card} from 'flowbite-react';

function Help() {
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
                    <div style={{ marginBottom: "25px" }}>
                        <h1 style={{ fontWeight: "bold", fontSize: "30px" }}>
                        How to use ZenChat
                        </h1>
                    </div>
                    <div style={{ marginBottom: "5px" }}>
                        <h2 style={{ fontSize: "15px", marginTop: "10px" }}>
                        ZenChat is an AI Chatbot that is intended to act as a safe space
                        to guide you through your mental health struggles and uplift your
                        state of being through chat messages. Simply state your what’s on
                        your mind, and let ZenChat do its work. Alternatively, it can be
                        used to identify external resources specifically tailored for you
                        to seek professional support.
                        </h2>
                    </div>
                    <div>
                        <h2 style={{ fontSize: "15px", marginTop: "15px" }}>
                        This app does not store your data or send it to any third party
                        entities.
                        </h2>
                    </div>
                    <div className='text-center'>
                        <Link to="/">
                            <button className="bg-indigo-500 text-black py-3 px-6 rounded-full shadow-lg text-xl" style={{ minWidth: '150px', backgroundColor: "#3A86FF"}}>
                            Back
                            </button>
                        </Link>
                    </div>
                </Card>
            </div>
        </div>
    )
}

export default Help;