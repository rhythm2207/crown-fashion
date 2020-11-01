import React from 'react'
import './preview-collections.scss'
import CollectionItem from '../collection-item/collection-item'
const PreviewCollections = ({ title, items }) => {
    return (
        <div className="collection-preview">
            <h1 className="title">{title.toUpperCase()}</h1>
            <div className="preview" >
                {
                    items
                        .filter((item, idx) => idx < 4)
                        .map(item => (
                            <CollectionItem name={item.name} price={item.price} imageUrl={item.imageUrl} />
                        ))
                }
            </div>
        </div>
    )
}

export default PreviewCollections