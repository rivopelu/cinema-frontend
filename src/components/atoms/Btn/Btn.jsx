import React from 'react'
import './btn.scss'
const Btn = ({ title, ...rest }) => {
    return (
        <button {...rest} className='btn'>{title}</button>
    )
}

export default Btn