import React from 'react'

const Image = ({ image, alt, width, height }) => {

    return (
        <section className='component image'>
            <img src={image} width={width} height={height} alt={alt || ""} />
        </section>
    )
}

export default Image