import React from 'react'

export default function PrimaryAttributesEdit(props) {
    const {
        attribute,
        handlePrimaryAttributeChange
    } = props

    function handleChange( changes ) {
      
        handlePrimaryAttributeChange(attribute.id, {...attribute, ...changes})
        
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
