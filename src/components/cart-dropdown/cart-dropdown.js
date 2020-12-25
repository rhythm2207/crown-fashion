import React from 'react';
import CustomButton from '../custom button/custom-button'
import './cart-dropdown.scss'
import CartItem from '../cart-item/cart-item'
import { connect } from 'react-redux'



const CartDropdown = ({ cartItems }) => (
    <div className='cart-dropdown'>
        <div className="cart-items">
            {
                cartItems.map(cartItem => (
                    <CartItem key={CartItem.id} item={cartItem} />
                ))
            }
        </div>
        <CustomButton > Checkout </CustomButton>
    </div>
)

const mapStateToProps = ({ cart: { cartItems } }) => ({
    cartItems
})
export default connect(mapStateToProps)(CartDropdown)