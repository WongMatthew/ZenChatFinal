import backgroundWhiteBarImage from '../image/BackgroundWhiteBar.png';
import { BrowserRouter as Router, Switch, Route, Link, Routes } from 'react-router-dom';
import React from 'react';
import './Chat.css'

function Chat() {
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

      return (
        <div style={containerStyle}>
            <div style={bodyStyle}>
                hi
            </div>
        </div>
      );
    }

export default Chat;