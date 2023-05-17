import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Element } from 'react-scroll';

import InteractiveMap from './components/InteractiveMap/InteractiveMap';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import ArizonaContent from './components/States/Arizona';
import CaliforniaContent from './components/States/California';
import ColoradoContent from './components/States/Colorado';
import LouisianaContent from './components/States/Louisiana';
import NewMexicoContent from './components/States/NewMexico';
import NewYorkContent from './components/States/NewYork';
import TexasContent from './components/States/Texas';
import UtahContent from './components/States/Utah';

function MainContent({ activeState, setActiveState, selectedState }) {
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  const states = ['welcome', 'arizona', 'california', 'colorado', 'louisiana', 'newmexico', 'newyork', 'texas', 'utah'];

  useEffect(() => {
    const handleScroll = () => {
      const visibleState = states.find((state) => {
        const element = document.querySelector(`[name=${state}]`)
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top >= 0 && rect.top <= window.innerHeight;
        return isVisible;
      });

      if (visibleState && visibleState !== activeState) {
        console.log("Updating active state to", visibleState);
        setActiveState(visibleState);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeState, setActiveState]);


  return (
    <main className="main-content container">
      <div className='row'>
        <div className="map-container col-lg-6 col-md-6 col-sm-12">
          <InteractiveMap state={activeState} />
        </div>
        <div className="writing-container col-lg-6 col-md-6 col-sm-12">
          {isHomePage ?
            <Element name='welcome'>
              <Hero setActiveState={setActiveState} />
            </Element>
            : null}
          <Element name='arizona'>
            <ArizonaContent className={isHomePage || selectedState === 'arizona' ? 'visible' : 'hidden'} setActiveState={setActiveState} />
          </Element>
          <Element name='california'>
            <CaliforniaContent className={isHomePage || selectedState === 'california' ? 'visible' : 'hidden'} setActiveState={setActiveState} />
          </Element>
          <Element name='colorado'>
            <ColoradoContent className={isHomePage || selectedState === 'colorado' ? 'visible' : 'hidden'} setActiveState={setActiveState} />
          </Element>
          <Element name='louisiana'>
            <LouisianaContent className={isHomePage || selectedState === 'louisiana' ? 'visible' : 'hidden'} setActiveState={setActiveState} />
          </Element>
          <Element name='newmexico'>
            <NewMexicoContent className={isHomePage || selectedState === 'newmexico' ? 'visible' : 'hidden'} setActiveState={setActiveState} />
          </Element>
          <Element name='newyork'>
            <NewYorkContent className={isHomePage || selectedState === 'newyork' ? 'visible' : 'hidden'} setActiveState={setActiveState} />
          </Element>
          <Element name='texas'>
            <TexasContent className={isHomePage || selectedState === 'texas' ? 'visible' : 'hidden'} setActiveState={setActiveState} />
          </Element>
          <Element name='utah'>
            <UtahContent className={isHomePage || selectedState === 'utah' ? 'visible' : 'hidden'} setActiveState={setActiveState} />
          </Element>

        </div>
      </div>
    </main>
  );
}


function App() {
  const [activeState, setActiveState] = useState('');
  const [selectedState, setSelectedState] = useState('');

  return (
    <Router>
      <div className="app-container">
        <Navbar setSelectedState={setSelectedState} />
        <Routes>
          <Route path="/" element={<MainContent activeState={activeState} setActiveState={setActiveState} selectedState={selectedState} />} />
          <Route path="/:state" element={<MainContent activeState={activeState} setActiveState={setActiveState} selectedState={selectedState} />} />
        </Routes>
      </div>
    </Router>
  );
}


export default App;
