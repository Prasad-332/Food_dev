import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { Route, Routes } from 'react-router-dom'; 
import Cart from './pages/Cart/Cart';
import Home from './pages/Home/Home';
 
import Footer from './Components/Footer/Footer';
import { useState } from 'react';
import Loginpopup from './Components/Loginpopup/Loginpopup';
import PlaceOrder from './Components/PlaceOrder/PlaceOrder';



function App() {
  const [showLogin,setShowLogin] =useState(false)

  return (
    <>
    {showLogin?<Loginpopup setShowLogin={setShowLogin}/>:<></>}
      <div className="app">
        <Navbar setShowLogin={setShowLogin}/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<PlaceOrder/>} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
