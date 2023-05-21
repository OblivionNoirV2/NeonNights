import React from 'react';
import logo from './logo.svg';
import './App.css';
import './sparkles.css';
import { Link, Routes, Route } from 'react-router-dom';
import Checkout from './Checkout';
import Home from './Home';
import SortItems from './Sorting';
//do a cool gradient thing 
const Navbar = () => {
  return (
    <nav className='main-nav'>
      <ul>

      </ul>
    </nav>
  )
};

function App() {
  return (
    <>
      <Routes>
        <Route path='/Checkout' element={<Checkout />} />
        <Route path='/Home' element={<Home />} />
        <Route path='/Explore' element={<SortItems />} />
      </Routes>
      <main>
        <Navbar />
      </main>
    </>
  );
}

export default App;
