import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <section className="h-wrapper">
        <div className="flexCenter paddings innerWidth h-container">
            <img src="./images/logo.png" alt="logo" width={100} />

            <div className="flexCenter h-menu"> 
                <a href="">Residencies</a>
                <a href="">Rent</a>
                <a href="">Sell</a>
                <a href="">Contact Us</a>
                <a href="">About Us</a>
                <button className='button'> Login</button>
            </div>
        </div>
    </section>
  )
}

export default Header