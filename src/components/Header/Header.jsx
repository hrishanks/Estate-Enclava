import React, { useState } from 'react'
import './Header.css'
import {BiMenuAltRight} from 'react-icons/bi'
import OutsideClickHandler from 'react-outside-click-handler'

const Header = () => {
  const [menuOpened, setmenuOpened] = useState(false)

  const getMenuStyles = (menuOpened) => {
    if (document.documentElement.clientWidth <= 800)
    {
    return {right: !menuOpened && "-100%"}
    }
  }
  return (
    <section className="h-wrapper">
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
                <a href="">Residencies</a>
                <a href="">Rent</a>
                <a href="">Values</a>
                <a href="">Contact Us</a>
                <a href="">About Us</a>
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