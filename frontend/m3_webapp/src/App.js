// src/App.js
import React from 'react';
import TopBar from './components/TopBar';
import MainContent from './components/MainContent';
import './App.css';

function App() {
  return (
    <div className="App">
      <TopBar />
      <MainContent />
    </div>
  );
}

export default App;
