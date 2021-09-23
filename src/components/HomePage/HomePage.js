import React from 'react';
import './HomePage.css';
import image from './chucknorris_logo_coloured_small.png';

function HomePage() {
  return (
    <div className='container'>
      <div className='homePage'>
        <div className='text'>
          <p>This page is the homepage. Jokes will be shared on this screen.</p>
        </div>
        <div className='image'>
          <img src={image}  />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
