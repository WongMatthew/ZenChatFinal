import { BrowserRouter as Router, Switch, Route, Link, Routes, BrowserRouter } from 'react-router-dom';
import React from 'react';
import './App.css';
import './index.css';
import Landing from './component/Landing';
import Help from './component//Help';
import Disclaimer from './component/Disclaimer';
import End from './component/End';
import Resources from './component/Resources';
import Chat from './component/Chat';
import Test from './component/Test';
import ChatDecatastrophizing from './component/ChatDecatastrophizing';
import ChatUplifting from './component/ChatUplifting';
import ChatPositiveReinforcement from './component/ChatPositiveReinforcement';
import Feedback from './component/Feedback';

function App() {

  return (
    <div className="App">
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="Chat" element={<Chat />} />
          <Route path="Help" element={<Help />} />
          <Route path="Disclaimer" element={<Disclaimer />} />
          <Route path="End" element={<End />} />
          <Route path="Resources" element={<Resources />} />
          <Route path="Test" element={<Test />} />
          <Route path="ChatDecatastrophizing" element={<ChatDecatastrophizing />} />
          <Route path="ChatUplifting" element={<ChatUplifting />} />
          <Route path="ChatPositiveReinforcement" element={<ChatPositiveReinforcement />} />
          <Route path="Feedback" element={<Feedback />} />
        </Routes>
    </BrowserRouter>
    </div>
  );
}
export default App;
