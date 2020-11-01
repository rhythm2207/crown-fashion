import React from 'react'
import SHOP_DATA from './SHOP_DATA'
import PreviewCollections from '../../components/preview-collections/preview-collecions'

class ShopPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: SHOP_DATA
        }
    }

    render() {
        const { collections } = this.state
        return (
            <div><h1>COLLECTIONS</h1>
                {
                    collections.map(({ id, ...otherprops }) => (
                        <PreviewCollections key={id} {...otherprops} />
                    ))
                }
            </div>
        )
    }
}

export default ShopPage