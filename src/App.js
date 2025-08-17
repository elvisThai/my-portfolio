import React, { useState, useEffect } from 'react';
import About from './components/About';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    setTimeout(() => setLoading(false), 1000);
  }, []);

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="loading-spinner"></div>
        <p>Loading Portfolio...</p>
      </div>
    );
  }

  return (
    <div className="App">
      <About />
    </div>
  );
}

export default App;
