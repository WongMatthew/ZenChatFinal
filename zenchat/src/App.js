import { BrowserRouter as Router, Switch, Route, Link, Routes, BrowserRouter } from 'react-router-dom';
import React from 'react';
import './App.css';
import './index.css';
import Landing from './component/Landing';
import Help from './component//Help';
import Disclaimer from './component/Disclaimer';

function App() {

  return (
    <div className="App">
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="Help" element={<Help />} />
          <Route path="Disclaimer" element={<Disclaimer />} />
        </Routes>
    </BrowserRouter>
    </div>
  );
}
export default App;
