import React from 'react'
import { connect } from 'react-redux'
import { selectCollection } from '../../redux/shop/shop.selector'
import './collection.scss'
import collectionItem from '../../components/collection-item/collection-item'

const Collection = ({ collection }) => (
    <div className="collection-page">
        <h2>Category Page</h2>
    </div>
)

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(Collection)









