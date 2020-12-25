import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import './header.scss'
import { auth } from '../../firebase/firebase.utils'
import { connect } from 'react-redux'
import CartIcon from '../cart-icon/cart-icon'
import CartDropdown from '../cart-dropdown/cart-dropdown'

const Header = ({ currentUser, hidden }) => {
    return (
        <div className="header">
            <Link className='logo' to='/'>
                <Logo className="svg" title='Brand Logo' />
            </Link>
            <div className="options">
                <Link className='option' to='/'>SHOP</Link>
                <Link className='option' to='/'>CONTACT</Link>
                {
                    currentUser
                        ? (
                            <div className="option" onClick={() => auth.signOut()}>
                                SIGN OUT
                            </div>
                        ) : (
                            <Link className='option' to='/signin'>SIGN IN</Link>
                        )
                }
                <CartIcon />

            </div>
            {
                hidden ? null :
                    <CartDropdown />
            }

        </div>
    )
}

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({

    currentUser,
    hidden
})

export default connect(mapStateToProps)(Header)