import React, { useState } from "react"
import { createBrowserHistory } from 'history';
import "./header.css"
import logo from "../pic/2.png"
import Search from "../Search/Search";
import { useNavigate } from 'react-router-dom';

const Header = () => {
  // fixed Header
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header")
    header.classList.toggle("active", window.scrollY > 100)
  })
  // Toogle Menu
  const [Mobile, setMobile] = useState(false)
  
    const navigate=useNavigate();     //Navigate hook
  const handleSearch=()=>{
    navigate("/Searchbar")
  }
// const history = createBrowserHistory();

  return (
    <>
      <header className='header'>
        <div className='container d_flex'>
          <div className='logo'>
            <img src={logo} alt='' style={{width:'60px',borderRadius:'50%', border:'5px solid #ccc'}}/>
          </div>

          <div className='navlink'>
            <ul className={Mobile ? "nav-links-mobile" : "link f_flex uppercase"} onClick={() => setMobile(false)}>
              {/*<ul className='link f_flex uppercase {Mobile ? "nav-links-mobile" : "nav-links"} onClick={() => setMobile(false)}'>*/}
              <li>
                <a href='#home'>home</a>
              </li>
              {/* <li>
                <a href='#features'>features</a>
              </li> */}
              <li>
                <a href='#portfolio'>popular products</a>
              </li>
              <li>
                <a href='#resume'>features</a>
              </li>
              <li>
                <a href='#clients'>clients</a>
              </li>
              <li>
                <a href='#blog'>Team</a>
              </li>
              <li>
                <a href='#contact'>contact</a>
              </li>
              <li>
                <button className='btn_shadow' onClick={handleSearch}>
                      Search
                    </button>
              </li>
              <li>
                <button className='home-btn'>Login</button>
              </li>
            </ul>

            <button className='toggle' onClick={() => setMobile(!Mobile)}>
              {Mobile ? <i className='fas fa-times close home-btn'></i> : <i className='fas fa-bars open'></i>}
            </button>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
