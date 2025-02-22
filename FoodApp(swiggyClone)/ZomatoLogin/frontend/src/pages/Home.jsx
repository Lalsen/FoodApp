import React from 'react';
import Sideside from '../components/Sideside';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="home-container">
        <Sideside />
      </div>
    </>
  );
};

export default Home;
