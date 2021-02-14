import React from 'react';

import './cart-item.styles.scss';

const CartItem = ({ item }) => (
    <div className='cart-item'>
        <img src={item.imageUrl} className='img' alt={item.name}/>
        <div className='item-details'>
            <span className='name'>{item.name}</span>
            <span>{item.quantity} x €{item.price}</span>
        </div>
    </div>
)

export default CartItem;