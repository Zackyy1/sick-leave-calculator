import React from 'react'
import './BodyText.scss'

const BodyText = ({ children }) => {
    return (
        <section className='component body-text'>
            {children}
        </section>
    )
}

export default BodyText