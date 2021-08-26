import React from 'react'
import { connect } from 'react-redux'
import './directory.css'
import MenuItem from '../menu-item/menu-item'
import { createStructuredSelector } from 'reselect'
import { selectDirectorySections } from '../../redux/directory/directory.selector'

const Directory = ({ sections }) => (
    <div className="container">
        {
            sections.map(({ id, ...otherProps }) => (
                <MenuItem key={id} {...otherProps} />
            ))
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
})
export default connect(mapStateToProps)(Directory)