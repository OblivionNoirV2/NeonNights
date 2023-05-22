import React from 'react';
import logo from './logo.svg';
import './App.css';
import './sparkles.css';
import { Link, Routes, Route } from 'react-router-dom';
import Checkout from './Checkout';
import Home from './Home';
import Explore from './Sorting';
//Want big night, synthy, future club vibes. Dark

//do a cool gradient thing 
//clicking on logo will act as home button
const Navbar = () => {
  return (
    <nav className='main-nav'>
      <ul>
        <li>
          <Link to='/'>
            logo goes here, make it rotate to look 3d
          </Link>
        </li>
        <li>
          <Link to='/'>
            Home
          </Link>
        </li>
        <li>
          <Link to='/Explore'>
            Explore
          </Link>
        </li>
        <li>
          <Link to='/Checkout'>
            Cart
          </Link>
        </li>
      </ul>
    </nav>
  )
};

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/Checkout' element={<Checkout />} />
        <Route path='/SortItems' element={<Explore />} />
        <Route path='/' element={<Home />} />
      </Routes>
    </>
  );
}


export default App;
