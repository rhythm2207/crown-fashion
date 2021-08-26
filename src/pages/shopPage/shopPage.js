import React from 'react'
import { Route } from 'react-router-dom'
import CollectionsOverview from '../../components/preview-collections/collections-overview/collections-overview'
import Collection from '../collection/collection'

const ShopPage = ({ match }) => (
    <div>
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route path={`${match.path}/:collectionId`} component={Collection} />
    </div>
)

export default ShopPage