import React from 'react';
import './App.css';
import data from './data/etsy.json';
import Listing from './components/Listing';

const info: any = data

function App() {
  return (
    <div className="wrapper">
      <Listing items={info} />
    </div>
  );
}

export default App;
