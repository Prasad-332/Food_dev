import { useState } from 'react'
import React from 'react'
import { assets } from '../../Assets/assets/assets'
import '../Loginpopup/Loginpopup.css'

const Loginpopup = ({ setShowLogin }) => {

  const [currState, setcurrUseState] = useState("Login")
  return (
    <div className='login-popup'>
      <div className='login-popup-container'>
        <div className='login-popup-title'>
          <h2>{currState}</h2>
          <img onClick={() => setShowLogin(false)} src={assets.cross_icon}></img>
        </div>
        <div className='login-popup-inputs'>
          {currState === "Login" ? <></> : <input type="text" placeholder='yourname' required />}
          <input type="email" placeholder='your email' required />
          <input type="password" placeholder='your password' required />
        </div>
        <button>{currState === "sign Up" ? "create account" : "Login"}</button>
        <div className='login-popup-condition'>
          <input type="checkbox" required />
          <p> By continuing, i agree  to the term of use & privacy policy</p>
        </div>
        {
          currState === "Login" ?
            <p>Create a new account ?<span onClick={() => setcurrUseState("sign Up")}>click here</span></p> :
            <p>Already have a  account ?<span onClick={() => setcurrUseState("Login")}>Login here</span></p>
        }
      </div>
    </div>
  )
}

export default Loginpopup