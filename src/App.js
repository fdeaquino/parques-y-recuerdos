import React, { Suspense, useEffect, useState } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Element } from 'react-scroll';

const InteractiveMap = React.lazy(() => import('./components/InteractiveMap/InteractiveMap'));
const Navbar = React.lazy(() => import('./components/Navbar/Navbar'));
const Hero = React.lazy(() => import('./components/Hero/Hero'));
const ArizonaContent = React.lazy(() => import('./components/States/Arizona'));
const CaliforniaContent = React.lazy(() => import('./components/States/California'));
const ColoradoContent = React.lazy(() => import('./components/States/Colorado'));
const LouisianaContent = React.lazy(() => import('./components/States/Louisiana'));
const NewMexicoContent = React.lazy(() => import('./components/States/NewMexico'));
const NewYorkContent = React.lazy(() => import('./components/States/NewYork'));
const TexasContent = React.lazy(() => import('./components/States/Texas'));
const UtahContent = React.lazy(() => import('./components/States/Utah'));

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
          <Suspense fallback={<div>Loading map...</div>}>
            <InteractiveMap state={activeState} />
          </Suspense>        </div>
        <div className="writing-container col-lg-6 col-md-6 col-sm-12">
          {isHomePage ?
            <Element name='welcome'>
              <Suspense fallback={<div>Loading intro...</div>}>
                <Hero setActiveState={setActiveState} />
              </Suspense>
            </Element>
            : null}

          <Element name='arizona'>
            <Suspense fallback={<div>Loading Arizona parks...</div>}>
              <ArizonaContent className={isHomePage || selectedState === 'arizona' ? 'visible' : 'hidden'} setActiveState={setActiveState} />
            </Suspense>
          </Element>

          <Element name='california'>
            <Suspense fallback={<div>Loading California parks...</div>}>
              <CaliforniaContent className={isHomePage || selectedState === 'california' ? 'visible' : 'hidden'} setActiveState={setActiveState} />
            </Suspense>
          </Element>

          <Element name='colorado'>
            <Suspense fallback={<div>Loading Colorado parks...</div>}>
              <ColoradoContent className={isHomePage || selectedState === 'colorado' ? 'visible' : 'hidden'} setActiveState={setActiveState} />
            </Suspense>
          </Element>

          <Element name='louisiana'>
            <Suspense fallback={<div>Loading Louisiana parks...</div>}>
              <LouisianaContent className={isHomePage || selectedState === 'louisiana' ? 'visible' : 'hidden'} setActiveState={setActiveState} />
            </Suspense>
          </Element>

          <Element name='newmexico'>
            <Suspense fallback={<div>Loading New Mexico parks...</div>}>
              <NewMexicoContent className={isHomePage || selectedState === 'newmexico' ? 'visible' : 'hidden'} setActiveState={setActiveState} />
            </Suspense>
          </Element>

          <Element name='newyork'>
            <Suspense fallback={<div>Loading New York parks...</div>}>
              <NewYorkContent className={isHomePage || selectedState === 'newyork' ? 'visible' : 'hidden'} setActiveState={setActiveState} />
            </Suspense>
          </Element>

          <Element name='texas'>
            <Suspense fallback={<div>Loading Texas parks...</div>}>
              <TexasContent className={isHomePage || selectedState === 'texas' ? 'visible' : 'hidden'} setActiveState={setActiveState} />
            </Suspense>
          </Element>

          <Element name='utah'>
            <Suspense fallback={<div>Loading Utah parks...</div>}>
              <UtahContent className={isHomePage || selectedState === 'utah' ? 'visible' : 'hidden'} setActiveState={setActiveState} />
            </Suspense>
          </Element>

        </div>
      </div>
    </main>
  );
}


function App() {
  const [activeState, setActiveState] = useState('hero');
  const [selectedState, setSelectedState] = useState('');

  return (
    <Router>
      <div className="app-container">
        <Suspense fallback={<div>Loading Navbar...</div>}>
          <Navbar setSelectedState={setSelectedState} />
        </Suspense>
        <Routes>
          <Route path="/" element={<MainContent activeState={activeState} setActiveState={setActiveState} selectedState={selectedState} />} />
          <Route path="/:state" element={<MainContent activeState={activeState} setActiveState={setActiveState} selectedState={selectedState} />} />
        </Routes>
      </div>
    </Router>
  );
}


export default App;
