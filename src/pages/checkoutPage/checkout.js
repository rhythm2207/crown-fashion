import React from 'react';
import './checkout.scss';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'
import { selectCartItems, selectPrice } from '../../redux/cart/cart.selector'
import CheckoutItem from '../../components/checkout-items/checkout-items'

const Checkout = ({ cartItems, total }) => {
    return (
        <div className="checkout-page">
            <div className="checkout-header">
                <div className="header-block"><span>Product</span></div>
                <div className="header-block">Description</div>
                <div className="header-block"><span>Quantity</span></div>
                <div className="header-block"><span>Price</span></div>
                <div className="header-blocks"><span>Remove</span></div>
            </div>

            {cartItems.map(cartItem => (
                <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            ))}
            <div className="total">
                <span>Total : ${total}</span></div>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectPrice
})

export default connect(mapStateToProps)(Checkout)
