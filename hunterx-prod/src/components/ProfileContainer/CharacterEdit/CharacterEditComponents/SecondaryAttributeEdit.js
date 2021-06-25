import React from 'react'

export default function InputListEdit(props) {
    const {
        attribute,
        handleSecondaryAttributeChange,
    } = props

    function handleChange( changes ) {
      
        handleSecondaryAttributeChange(attribute.id, { ...attribute, ...changes})

    }

    return (
        <div className="cRow">
            <label htmlFor={attribute.name} className="input_titles">{attribute.name}</label>
            <input 
                type="number" 
                name={attribute.rank}
                onChange={(e) => handleChange({ rank: parseInt(e.target.value) || '' })}
                value={attribute.rank}
                className="character-edit__input numbers"
            />
        </div>
    )
}