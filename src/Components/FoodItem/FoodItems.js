import React, { useContext } from 'react'
import '../FoodItem/FoodItems.css'
import { useState } from 'react'
import { assets } from '../../Assets/assets/assets'
import { StoreContext } from '../../context/StoreContext'

const FoodItems = ({ id, name, price, description, image }) => {
    const [itemCount, setItemCount] = useState(0);
    const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);

    return (
        <div className='food-item'>
            <div className='food-item-ima-container'>
                <img className='food-item-image' src={image} alt='' />
                {!cartItems[id]
                    ? <img className='add' onClick={() => addToCart(id)} src={assets.add_icon_white} />
                    : <div className='food-item-counter'>
                        <img onClick={() => removeFromCart(id)} src={assets.remove_icon_red} />
                        {/* Render the count of items for the specific id */}
                        <p>{cartItems[id]}</p>
                        <img onClick={() => addToCart(id)} src={assets.add_icon_green} />
                    </div>
                }
            </div>
            <div className='food-item-info'>
                <div className='food-item-name-rating'>
                    <p>{name}</p>
                    <img src={assets.rating_starts} />
                </div>
                <div>
                    <p>{description}</p>
                    <h3>${price}</h3>
                </div>
            </div>
        </div>
    )
}

export default FoodItems;
