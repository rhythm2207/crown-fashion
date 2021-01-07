import React from 'react';
import CustomButton from '../custom button/custom-button'
import './cart-dropdown.scss'
import CartItem from '../cart-item/cart-item'
import { connect } from 'react-redux'
import { selectCartItems } from '../../redux/cart/cart.selector'
import { createStructuredSelector } from 'reselect'
import { withRouter } from 'react-router-dom'
import { toggleCartHidden } from '../../redux/cart/cart.actions'

const CartDropdown = ({ cartItems, history, dispatch }) => (
    <div className='cart-dropdown'>

        <div className="cart-items">
            {
                cartItems.length ?
                    cartItems.map(cartItem => (
                        <CartItem key={CartItem.id} item={cartItem} />
                    ))
                    :
                    <span className="empty-message">Your cart is empty</span>
            }
        </div>
        <CustomButton onClick={
            () => {
                history.push('/checkout')
                dispatch(toggleCartHidden())
            }}> Checkout
        </CustomButton>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})
export default withRouter(connect(mapStateToProps)(CartDropdown))