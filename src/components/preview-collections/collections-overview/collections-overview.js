import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import './collections-overview.scss'
import PreviewCollections from '../preview-collecions'
import { selectCollections } from '../../../redux/shop/shop.selector'

const CollectionsOverview = ({ collections }) => (
    <div className="collections-overview">
        {
            collections.map(({ id, ...otherprops }) => (
                <PreviewCollections key={id} {...otherprops} />
            ))
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollections
})

export default connect(mapStateToProps)(CollectionsOverview)
