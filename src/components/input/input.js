import React from 'react';
import './input.scss'

const Input = ({ label, handleChange, ...otherProps }) => {
    return (
        <div className="form">
            <input type={label} name={label} onChange={handleChange} required className="input" />
            {
                label ?

                    <label className={`${otherProps.value.length ? 'shrink' : ''} label`}>
                        {label.toUpperCase()}
                    </label>
                    : null
            }

        </div>
    )
}

export default Input