import React from 'react';
import logo from './logo.svg';

import './Sparkles.css';
import { Link, Routes, Route } from 'react-router-dom';
import Checkout from './Checkout';
import Home from './Home';
import Explore from './Sorting';
//Want big night, synthy, future club vibes. Dark

//do a cool gradient thing 
//clicking on logo will act as home button

//use spotify api to add a cool soundtrack to really drive in the future vibe?
const SiteLogo = () => {
  return (
    <Link to='/'>
      <img src={require("./assets/NNlogo.png")} alt="logo"
        className="h-full w-auto flex" />
    </Link>
  )
}

const Navbar = () => {
  return (
    <nav className='main-nav bg-black neon-text w-full h-24 flex justify-between mr-4'>
      <SiteLogo />
      <ul className='flex text-5xl mt-4'>
        <li className='mr-8'>
          <Link to='/'>
            Home
          </Link>
        </li>
        <li className='mr-8'>
          <Link to='/Explore'>
            Explore
          </Link>
        </li>
        <li className='mr-8'>
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
