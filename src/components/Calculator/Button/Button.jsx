import React from 'react'
import './Button.scss'

const Button = ({ children }) => {
    return (
        <section className="component button">
            <button>{children}</button>
        </section>
    )
}

export default Button