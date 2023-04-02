import backgroundOffWhiteImage from '../image/BackgroundOffWhite.png';
import logo from '../image/ZenChatLogo.png';
import { BrowserRouter as Router, Switch, Route, Link, Routes, BrowserRouter } from 'react-router-dom';
import React from 'react';
import {Card} from 'flowbite-react';

function End() {
    const style = {
        backgroundImage: `url(${backgroundOffWhiteImage})`,
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
            <div className="max-w-screen-lg mx-auto pt-20 px-8 flex flex-col items-center justify-center text-center" style={{ position: 'absolute', left: '40%', transform: 'translate(-35%)', top: '250px' }}>
                <div className="text-xl font-bold mb-6">Your session has ended</div>
                <div className="text-sm mb-8">We hope you are satisfied with your chat. If you require external resources, we have prepared a list here for you based off your previous session.</div>
                <Link to="/resources">
                    <button className="bg-blue-500 text-white py-3 px-6 rounded-full shadow-lg flex items-center text-xl" style={{ minWidth: '150px', backgroundColor: "#3A86FF", marginTop: '20px'}}>
                    External Resources
                    </button>
                </Link>
            </div>

            <div className="max-w-screen-lg mx-auto pt-20 px-8 flex flex-col items-center justify-center text-center" style={{ left: '40%', top: '300px', marginTop: '300px' }}>
                <div className="text-xl font-bold mb-3">Have feedback?</div>
                <Link to="">
                    <button className="bg-blue-500 text-white py-3 px-6 rounded-full shadow-lg flex items-center text-xl" style={{ minWidth: '150px', backgroundColor: "#3A86FF", marginTop: '10px'}}>
                        Submit Feedback
                    </button>
                </Link>
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
    )
}

export default End;