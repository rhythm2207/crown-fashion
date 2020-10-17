import React from 'react'
import './menu-item.scss'

const MenuItem = ({ title, imageUrl, size }) => {
    return (
        <div className={`item ${size}`} >
            <div className="background" style={{ backgroundImage: `url(${imageUrl})` }} />
            <div className="item-info">
                <h1 className="title">{title.toUpperCase()}</h1>
                <p className="subtitle">Shop Now</p>
            </div>
        </div >
    )
}

export default MenuItem