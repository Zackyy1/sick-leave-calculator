import React from 'react'
import './Headline.scss'

const Headline = ({ children, tag }) => {
    const Tag = tag
    return (
        <section className="component headline">
            <Tag>{children}</Tag>
        </section>
    )
}

export default Headline