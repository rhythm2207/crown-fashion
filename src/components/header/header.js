import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/crown.svg'
import './header.scss'
const Header = () => {
    return (
        <div className="header">
            <Link className='logo' to='/'>
                <Logo title='Brand Logo' />
            </Link>
            <div className="options">
                <Link className='option' to='/'>SHOP</Link>
                <Link className='option' to='/'>CONTACT</Link>
                <Link className='option' to='/'>SIGN IN</Link>
                <Link className='option' to='/'>BAG</Link>
            </div>
        </div>
    )
}

export default Header