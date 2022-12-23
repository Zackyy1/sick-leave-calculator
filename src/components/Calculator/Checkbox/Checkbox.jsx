import React from 'react'
import './Checkbox.scss'

const Checkbox = ({ label, defaultChecked, onChange }) => {
    const randomInputId = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

    return (
        <section className='component checkbox'>
            <input defaultChecked={defaultChecked} onChange={(event) => onChange && onChange(event.target.checked)} type='checkbox' id={randomInputId} />
            <label htmlFor={randomInputId}>{label}</label>
        </section>
    )
}

export default Checkbox