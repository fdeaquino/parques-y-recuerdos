import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useParams } from 'react-router-dom';

import InteractiveMap from './components/InteractiveMap/InteractiveMap';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import CaliforniaContent from './components/States/California';
import ColoradoContent from './components/States/Colorado';
import LouisianaContent from './components/States/Louisiana';
import NewMexicoContent from './components/States/NewMexico';
import NewYorkContent from './components/States/NewYork';
import TexasContent from './components/States/Texas';
import UtahContent from './components/States/Utah';

function MainContent({ activeState, setActiveState }) {
  const location = useLocation();

  // Check if the current route is the home page
  const isHomePage = location.pathname === "/";

  // Get the current hash, remove the '#' character, and convert it to lowercase
  const hash = window.location.hash.slice(1).toLowerCase();

  return (
    <main className="main-content container">
      <div className='row'>
        <div className="map-container col-lg-6 col-md-6 col-sm-12">
          <InteractiveMap state={hash} />
        </div>
        <div className="writing-container col-lg-6 col-md-6 col-sm-12">
          {isHomePage ? <Hero /> : null}

          <CaliforniaContent className={isHomePage || activeState === 'california' ? 'visible' : 'hidden'} />
          <ColoradoContent className={isHomePage || activeState === 'colorado' ? 'visible' : 'hidden'} />
          <LouisianaContent className={isHomePage || activeState === 'louisiana' ? 'visible' : 'hidden'} />
          <NewMexicoContent className={isHomePage || activeState === 'newmexico' ? 'visible' : 'hidden'} />
          <NewYorkContent className={isHomePage || activeState === 'newyork' ? 'visible' : 'hidden'} />
          <TexasContent className={isHomePage || activeState === 'texas' ? 'visible' : 'hidden'} />
          <UtahContent className={isHomePage || activeState === 'utah' ? 'visible' : 'hidden'} />
        </div>
      </div>
    </main>
  );
}


function App() {
  const [activeState, setActiveState] = useState('');

  return (
    <Router>
      <div className="app-container">
        <Navbar setActiveState={setActiveState} />
        <Routes>
          <Route path="/" element={<MainContent activeState={activeState} setActiveState={setActiveState} />} />
          <Route path="/:state" element={<MainContent activeState={activeState} setActiveState={setActiveState} />} />
        </Routes>
      </div>
    </Router>
  );
}


export default App;
