import React from 'react';
import logo from './logo.svg';
import { useState, useEffect } from 'react';
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
    <section className='w-[10rem]'>
      <Link to='/'>
        <img src={require("./assets/NNlogo.png")} alt="logo"
          className="h-full w-auto flex" />
      </Link>
    </section>
  )
}
//the billboard rotates every so often
//text courtesy of gpt4
const ScrollAdvertisementsDict: { [key: number]: string } = {
  0: 'Experience Life 2.0 with VirtuReal™: Bored of your humdrum existence? Experience life like never before in our immersive digital utopia. VirtuReal™ brings you the future of entertainment. Dive into a world of infinite possibilities, where reality is what you make it. With VirtuReal™, you are the architect of your own universe. Experience a vast array of digital landscapes, engage in extraordinary activities, and make unforgettable memories. Start your adventure today! VirtuReal™ - Your alternate reality awaits!',
  1: "Stay Ahead with Neurolink's Brain Enhancement Chips: Are you always a step behind? Can't keep up with the information age? Upgrade your mind with Neurolink's revolutionary brain enhancement chips. Boost memory, speed up learning, and access the net directly with your thoughts. Don't just survive the future - master it. Imagine a world where complex calculations take no more time than a thought, where every language is at your fingertips, where you can explore the depths of the digital universe with just a thought. Upgrade yourself with Neurolink and stay ahead.",
  2: "Elysium Skycars - Redefine Your Horizon: Tired of gridlock? Take to the skies with Elysium Skycars. Our cutting-edge vehicles combine luxury, speed, and effortless vertical takeoff. Cruise above the cityscape in style and experience the thrill of personal flight. Elysium Skycars - Redefine your horizon. Immerse yourself in a revolutionary travel experience - silence the noise of the city, glide through the clouds, and reach your destination in record time. Feel the thrill of freedom as you soar above it all with Elysium Skycars.",
  3: "KRONOS Tech - Control Time. Control Life: Introducing KRONOS Tech's latest innovation in personal time management. Our patented Chrono-Adjuster wrist device lets you manipulate your perception of time. Need more time for a project? Or want to fast forward through a boring meeting? Now you can. With KRONOS Tech, control time, control life. Imagine enjoying more moments of relaxation, achieving greater productivity, and taking control of your life in ways you never thought possible. The power to shape your experience of time is now within your reach. With KRONOS Tech, time is truly in your hands."
}

const ReallyCoolScrollingText = () => {
  const [ad, setAd] = useState<string>("");

  function getRandomInt() {
    return Math.floor(Math.random() * 4);
  }

  useEffect(() => {
    console.log("useEffect called");
    //Set initial advertisement
    setAd(ScrollAdvertisementsDict[getRandomInt()]);

    //Set interval to change advertisement every minute
    const intervalId = setInterval(() => {
      setAd(ScrollAdvertisementsDict[getRandomInt()]);
    }, 60000);

    //Cleanup interval on unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className='overflow-hidden w-2/3 h-24 flex items-center mr-4 text-2xl'>
      <p className="whitespace-nowrap px-4 animate-ad">
        {ad}
      </p>
    </div>
  );
};
/*there will be a number positioned over this, 
showing how many items are in the cart*/
const CartIcon = () => {
  return (
    <div className='w-24 h-24 mr-4'>
      <Link to='/Checkout'>
        <img src={require("./assets/cart.png")} alt="cart"
          className="h-full w-auto flex" />
      </Link>
    </div>
  )
}
const Navbar = () => {
  return (
    <>
      <nav className='main-nav bg-black neon-text w-full h-24 flex justify-between mr-4'>
        <SiteLogo />
        <ReallyCoolScrollingText />
        <ul className='flex text-5xl mt-4'>
          <li className='mr-8'>
            <Link to='/'>
              Home
            </Link>
          </li>
          <li className='-mr-6'>
            <Link to='/Explore'>
              Explore
            </Link>
          </li>
        </ul>
        <CartIcon />
      </nav>
      <hr></hr>
    </>
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
