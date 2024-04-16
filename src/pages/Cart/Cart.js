import React, { useContext } from 'react';
import './Cart.css';
import { StoreContext } from '../../context/StoreContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItems, food_list, removeFromCart,  getTotalCartAmount } = useContext(StoreContext);

  const navigate =useNavigate();
  return (
    <div className='cart'>
      <div className='cart-items'>
        <div className='cart-items-title'>
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <>
                <div className='cart-items-item' key={index}>
                  <img src={item.image} />
                  <p>{item.name}</p>
                  <p>{item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>{item.price * cartItems[item._id]}</p>
                  <p onClick={() => removeFromCart(item._id)} className='cross'>x</p>
                </div>
                <hr />
              </>
            )
          }
        })}
      </div>
      <div className='cart-bottom'>
        <div className='cart-total'>
          <h2>Cart Total</h2>

          <div className='cart-total-details'>
            <p>subtotal</p>
            <p>{getTotalCartAmount()}</p>
            
          </div>
          <div className='cart-total-details'>
            <p>Deliveryfee</p>
            <p>$2</p>
          </div>
          <div className='cart-total-details'>
            <h4>Total</h4>
            <p>{getTotalCartAmount()+2}</p>
          </div>
          <button onClick={()=>navigate('/order')}>PROCEED TO CHECK OUT</button>
        </div>

        <div className='cart-promocode'>
          <p>if you have a promocide ,Enter it Here</p>
          <div className='cart-promocode-input'>
            <input type='text' placeholder='promo code' />
            <button>Submit</button>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Cart;
