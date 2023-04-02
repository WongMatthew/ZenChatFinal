import backgroundWhiteBarImage from '../image/BackgroundWhiteBar.png';
import { BrowserRouter as Router, Switch, Route, Link, Routes } from 'react-router-dom';
import BackgroundLightBlueOffWhite from '../image/BackgroundLightBlueOffWhite.png';
import ChatText from '../image/ChatText.png';
import React from 'react';
import './style/Chat.css'

import { Carousel } from 'flowbite-react';

function ChatUplifting() {
    const containerStyle = {
        backgroundColor: '#8fc4ff',
        height: '120vh'
      };
    
    const bodyStyle = {
        backgroundImage: `url(${BackgroundLightBlueOffWhite})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh'
    };

      return (
        <div style={containerStyle}>
            <div style={bodyStyle}>

                hi

            </div>
        </div>
      );
    }

export default ChatUplifting;