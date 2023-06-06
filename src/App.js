// Imports: React hooks and core imports, React Router for client-side routing, and Scroll library for React
import React, { Suspense, useEffect, useState } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Element } from 'react-scroll';

// Lazy-loading components improvdes performance as components are only loaded when they are about to be used
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

// MainContent component includes the main content of the app
function MainContent({ activeState, setActiveState, selectedState }) {

  // React Router hook to access the current location object which contains the URL
  const location = useLocation();

  // Checks if the current page is the home page
  const isHomePage = location.pathname === "/";

  // The states array contains all the state names that are used for the scroll functionality
  const states = ['welcome', 'arizona', 'california', 'colorado', 'louisiana', 'newmexico', 'newyork', 'texas', 'utah'];

  // This useEffect hook runs side effects after every rendering 
  // In this case, this useEffect is used for managing scroll events and determining which state's content is currently in view
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

  // returns JSX for the main content of the app
  // The Suspense components below, allows the user to 'wait' for some code to load and declaritively specifies a loading state
  return (
    <main className="main-content container">
      <div className=''>

        {/* A div for the interactive map */}
        <div className="map-container">
          <Suspense fallback={<div>Loading map...</div>}>
            {/* InteractiveMap component is passed to the activeState prop */}
            <InteractiveMap state={activeState} />
          </Suspense>
        </div>

        {/* a div for the main content, and renders content for different states */}
        <div className="writing-container" style={{ height: "93vh", width: "fit-content" }}>

          {/* Conditionally render the welcome message only if the user is viewing home page */}
          {isHomePage ?
            <Element name='welcome'>
              <Suspense fallback={<div>Loading intro...</div>}>
                <Hero setActiveState={setActiveState} />
              </Suspense>
            </Element>
            : null}

          {/* The code blocks below each represent a different state. */}
          {/* Conditionally render the content based on whether the content page is the home page or the selected state matches the content'state */}
          {/* Each state content component is passed a setActiveState function prop, which likely allows it to update the activeState in its parent component */}
          {/* If a user selects Arizona, the Hero and other states components will not be visible, only the Arizona component will render */}
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

// The App component, includes the router and top-level routing config
function App() {
  // useState hooks to manage state in a function component
  const [activeState, setActiveState] = useState('hero');
  const [selectedState, setSelectedState] = useState('');

  // returns JSX for the App component
  // Router compoent has to wrap the application
  // Routes component wraps all Route components.
  // Each Route component represents a single route of the app
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
