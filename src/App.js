import React, { useState, useEffect } from 'react';
import Portfolio from './components/Portfolio';
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
        <p>Loading..</p>
      </div>
    );
  }

  return (
    <div className="App">
      <Portfolio />
    </div>
  );
}

export default App;
