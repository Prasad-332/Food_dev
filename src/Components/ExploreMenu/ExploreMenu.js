import React from 'react'

import './ExploreMenu.css'
import { menu_list } from '../../Assets/assets/assets'
const ExploreMenu = ({category,setCategory}) => {
console.log(menu_list,"menu")
    console.log(category,"category ")
    return (
        <div className='explore-menu'>
            <h1>Explore our Menu</h1>
            <p className='explore-menu-text'>Choose from a diverse menu features adelectible array</p>
            <div className='explore-menu-list'>
                {menu_list.map(( item, index) => (
                    <div onClick ={() =>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)}key={index} className='explore-menu-list-item'>
                        <img className={category===item.menu_name?"active":""}src={item.menu_image} alt=''/> 
                        <p>{item.menu_name}</p>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default ExploreMenu;