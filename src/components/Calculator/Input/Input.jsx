import React from 'react'
import './Input.scss'
const Input = ({ required, type, unit, label, min, step, defaultValue, placeholder, onChange }) => {
    const randomInputId = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    return (
        <section className='component input'>
            <label htmlFor={randomInputId}>{label}</label>
            <div className='input-container'>
                <input required={required} onChange={(event) => onChange(event.target.value)} step={step || 1} defaultValue={defaultValue} placeholder={placeholder || 'Enter value'} type={type} min={min || 0} id={randomInputId} />
                {unit && <div className='unit'>{unit}</div>}
            </div>
        </section>
    )
}

export default Input