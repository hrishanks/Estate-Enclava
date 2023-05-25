import React, { useState } from 'react'
import './Header.css'
import {BiMenuAltRight} from 'react-icons/bi'
import OutsideClickHandler from 'react-outside-click-handler'
// import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-scroll'
const Header = () => {
  const [menuOpened, setmenuOpened] = useState(false)

  const getMenuStyles = (menuOpened) => {
    if (document.documentElement.clientWidth <= 800)
    {
    return {right: !menuOpened && "-100%"}
    }
  }
  return (
    <section className="h-wrapper" id='Header'>
        <div className="flexCenter paddings innerWidth h-container">
            <img src="./images/logo.png" alt="logo" width={100} />

            <OutsideClickHandler
              onOutsideClick={()=>{
                setmenuOpened(false)
              }}
            >
            <div className="flexCenter h-menu"
            style={getMenuStyles(menuOpened)}
            > 
                < NavLink to='/'>Home</NavLink>
                < Link to="Residencies" spy={true} smooth={true} offset={-100} duration={500}>Residencies</Link>
                < Link to="Value" spy={true} smooth={true} offset={-50} duration={500}>Value</Link>
                < NavLink to='./AboutUs'>About Us</NavLink>
                <button className='button'> Login</button>
            </div>
            </OutsideClickHandler>
            <div className="menu-icon" onClick={()=>setmenuOpened((prev)=>!prev)}>
              <BiMenuAltRight Size={30}/>
            </div>
        </div>
        
    </section>
  )
}

export default Header