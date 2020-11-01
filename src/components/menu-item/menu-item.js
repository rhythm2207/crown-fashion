import React from 'react'
import { withRouter } from 'react-router-dom'
import './menu-item.scss'

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => {
    return (
        <div className={`item ${size}`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
            <div className="background" style={{ backgroundImage: `url(${imageUrl})` }} />
            <div className="item-info">
                <h1 className="title">{title.toUpperCase()}</h1>
                <p className="subtitle">Shop Now</p>
            </div>
        </div >
    )
}

export default withRouter(MenuItem);