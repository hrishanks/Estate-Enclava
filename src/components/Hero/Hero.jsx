import React from 'react'
import './Hero.css'
import {HiLocationMarker} from 'react-icons/hi'
import CountUp from 'react-countup';

const Hero = () => {
  return (
    <section className="hero-wrapper">
        <div className="paddings innerWidth flexCenter hero-container">
          {/* Left Section */}
          <div className="flexColStart hero-left">
            <div className="hero-title">
              <div className="orange-circle"/>
                <h1>Discover</h1>
                <h1>Most Suitable</h1>
                <h1>Property</h1>
            </div>
            <div className="flexColStart hero-des">
              <span className='secondaryText'> Find a variety of properties that suit you very easilty</span> 
              <span className='secondaryText'> Forget all difficulties in finding a residence for you</span> 
            </div>
          </div>

          <div className="flexCenter search-bar">
            <HiLocationMarker color="var(--blue)" size={25}/>
            <input type="text"/>
            <button className="button">Search</button>
          </div>

          <div className="flexCenter stats">
          <div className= "flexColCenter stat">
              <span>
                <CountUp start={1000} end={1250} duration={4}/> 
              <span>+</span>
              </span> 
              <span className='secondaryText'>Premium Products</span>
            </div>
            <div className= "flexColCenter stat">
              <span>
                <CountUp start={150} end={175} duration={4}/> 
              <span>+</span>
              </span> 
              <span className='secondaryText'>Happy Customers</span>
            </div>
            <div className= "flexColCenter stat">
              <span>
                <CountUp start={20} end={27} duration={4}/> 
              <span>+</span>
              </span> 
              <span className='secondaryText'>Awards Worn</span>
            </div> 
          </div>
        
          {/* Right Section */}
          <div className="flexCenter hero-right">
            <div className="image-container">
            <img src="./images/hero-image.png" alt="hero_image"/>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Hero