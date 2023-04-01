import logo from './logo.svg';
import React from 'react';
import BurgerMenu from './components/HamburgerMenu.js';
import './App.css';

function App() {
  return (
    <div>
      <BurgerMenu />
      <h1>Welcome to ZenChat</h1>
      <p>Your mental health chatbot and therapist.</p>
      {/* Rest of your app content goes here */}
    </div>
  );
}

export default App;
