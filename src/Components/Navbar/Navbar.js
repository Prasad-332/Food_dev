import React, { useContext } from 'react'
import './Navbar.css'
import { assets } from '../../Assets/assets/assets'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

export const Navbar = ({ setShowLogin }) => {

    const {  getTotalCartAmount} =useContext(StoreContext)
    const [menu, setMenu] = useState("home")
    return (
        <div className='navbar'>
            {/* <Link to='/'><img src={assets.logo} alt="" className="logo" /></Link> */}
            <ul className='navbar-menu'>
                <li onClick={() => setMenu("home")} className={menu === "home" ? "active" : ""}>home</li>
                <li onClick={() => setMenu("menu")} className={menu === "menu" ? "active" : ""}>menu</li>
                <li onClick={() => setMenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>mobile-app</li>
                <li onClick={() => setMenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>contact-us</li>
            </ul>
            <div className='navbar-right'>
                <img src={assets.search_icon} alt=" " className='search-icon' />
                <div className='navbar-search-icon'>
                    <Link to='/cart'> <img src={assets.basket_icon} alt='' className='backet_icon' /></Link>
                    <div className= {  getTotalCartAmount()===0?"":"dot"}></div>
                </div>
                <button onClick={() => setShowLogin(true)}>sign in</button>
            </div>
        </div>
    )
}
