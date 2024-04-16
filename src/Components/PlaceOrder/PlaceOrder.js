import React, { useContext } from 'react'
import '../PlaceOrder/PlaceOrder.css'
import { StoreContext } from '../../context/StoreContext'

const PlaceOrder = () => {
    const { getTotalCartAmount } = useContext(StoreContext)
    return (
        <form className='place-order'>
            <div>
                <div className='place-order-left'>
                    <p className='title'>Delivery Information</p>
                    <div className='multi-feilds'>
                        <input type='First Name' placeholder='First Name' />
                        <input type='Last Name' placeholder='Last Name' />
                    </div>
                    <div className='email-street'>
                        <input className='Email' type='text' placeholder='Email address' />
                        <input className='street' type='text' placeholder='Street' />
                    </div>
                </div>
                <div className='multi-feilds'>
                    <input type='text' placeholder='city' />
                    <input type='text' placeholder='state' />
                </div>
                <div className='multi-feilds'>
                    <input type='text' placeholder='Zip code' />
                    <input type='text' placeholder='country' />
                </div>
                <input  className='phone' type='text' placeholder='phone' />
            </div>

            <div className='place-order-right'>
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
                        <p>{getTotalCartAmount() + 2}</p>
                    </div>
                    <button >PROCEED TO PAYMENT</button>
                </div>
            </div>
        </form>
    )
}

export default PlaceOrder