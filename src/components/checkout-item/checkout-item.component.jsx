import React from 'react'

import './checkout-item.styles.scss'
import { connect } from 'react-redux'
import { clearItemFromCart, addItem, removeItem } from '../../redux/cart/cart.actions'

const CheckoutItem =({ item, clearItem, addItem, removeItem })=> {
    const {name, imageUrl, price, quantity} = item

    return (
    <div className='checkout-item'>
        <div className='image-container'>
            <img src={imageUrl} alt='item' />
        </div>
        <span className='name'>{name}</span>
        <span className='quantity'>
            <span className='arrow' onClick={() => removeItem(item)}>&#10094;</span>
            <span className='value'>{quantity}</span>
            <span className='arrow' onClick={() => addItem(item)}>&#10095;</span>
        </span>
        <span className='price'>${price}</span>
        <div className='remove-button' onClick={() => clearItem(item)}>&#10005;</div>
    </div>
    )
}

const mapDispatchToProps =(dispatch)=> ({
    clearItem: item => dispatch(clearItemFromCart(item)),
    addItem: item => dispatch(addItem(item)),
    removeItem: item => dispatch(removeItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem)