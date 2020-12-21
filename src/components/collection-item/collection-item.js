import React from 'react'
import './collection-item.scss'
import CustomButton from '../custom button/custom-button'
import { connect } from "react-redux";
import { addItem } from '../../redux/cart/cart.actions'

const CollectionItem = ({ item, addItem }) => {
    const { name, price, imageUrl } = item;
    return (
        <div className='collection-item'>
            <div className="image" style={{
                background: `url(${imageUrl}) no-repeat`, backgroundSize: `cover`, backgroundPosition: `center`
            }}>
                <CustomButton onClick={() => addItem(item)} inverted>Add to Cart </CustomButton>
            </div>
            <div className="collection-footer">
                <span className='name'>{name}</span>
                <span className='price'>${price}</span>
            </div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem)