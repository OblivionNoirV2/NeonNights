import React from 'react';
import logo from './logo.svg';
import './App.css';
import './sparkles.css';
import { Link, Routes, Route } from 'react-router-dom';
import Checkout from './Checkout';
import Home from './Home';
import Explore from './Sorting';
//do a cool gradient thing 
//clicking on logo will act as home button
const Navbar = () => {
  return (
    <nav className='main-nav'>
      <ul>
        <li>
          <Link to='/Home'>
            logo goes here
          </Link>
        </li>
        <li>
          <Link to='/Home'>
            Home
          </Link>
        </li>
        <li>
          <Link to='/SortItems'>
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
      <Routes>
        <Route path='/Checkout' element={<Checkout />} />
        <Route path='/Home' element={<Home />} />
        <Route path='/Explore' element={<Explore />} />
      </Routes>
      <main>
        <Navbar />
        <Home />
      </main>
    </>
  );
}

export default App;
