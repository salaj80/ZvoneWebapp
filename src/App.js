import React from 'react';
import Navbar from './components/navbar';
import Hero from './components/hero';
import Analytics from './components/analytics';
import Mailform from './components/mailform';

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Analytics/>
      <Mailform/>
    </div>
  );
}

export default App;
