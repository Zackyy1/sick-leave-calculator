import React from 'react'
import './BulletList.scss'

const BulletList = ({ children }) => {
    return (
        <section className='component bullet-list'>
            <ul>
                {children}
            </ul>
        </section>
    )
}

export default BulletList