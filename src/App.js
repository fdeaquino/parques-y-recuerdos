import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, useParams } from 'react-router-dom';

import InteractiveMap from './components/InteractiveMap/InteractiveMap';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import BlogPost from './components/BlogPost/BlogPost';

function MainContent() {
  const location = useLocation();
  const { state } = useParams();

  // Check if the current route is the home page
  const isHomePage = location.pathname === "/";

  return (
    <main className="main-content container">
      <div className='row'>
        <div className="map-container col-lg-6 col-md-6 col-sm-12">
          <InteractiveMap state={state} />
        </div>
        <div className="writing-container col-lg-6 col-md-6 col-sm-12">
          {isHomePage ? <Hero /> : <BlogPost state={state} />}
        </div>
      </div>

    </main>
  );
}

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/:state" element={<MainContent />} />
        </Routes>
      </div>
    </Router>
  );
}


export default App;
