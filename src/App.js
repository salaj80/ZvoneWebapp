import React from 'react';
import Navbar from './components/navbar';
import Hero from './components/hero';
import Analytics from './components/analytics';
import Mailform from './components/mailform';
import Contact from './components/contact';

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Analytics/>
      <Mailform/>
      <Contact/>
    </div>
  );
}

export default App;
