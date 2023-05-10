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
    <main>
      {isHomePage ? <Hero /> : (
        <div style={{ display: 'flex', width: '100%', height: 'calc(100vh - 60px)' }}>
          <InteractiveMap state={state} />
          <BlogPost state={state} />
        </div>
      )}
    </main>
  );
}

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<MainContent />}
          />
          <Route
            path="/:state"
            element={<MainContent />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
