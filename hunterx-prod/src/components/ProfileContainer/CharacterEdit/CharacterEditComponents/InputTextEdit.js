import React from 'react'

export default function InputTextEdit(props) {
    const {
        item,
        handleSecondaryAttributesChange
    } = props
    
    function handleChange( changes ) {
      
        handleSecondaryAttributesChange(item.id, { ...item, ...changes})
        console.log(changes, "This is the input")
    }
    return (
        <>
          <label htmlFor={item.name}>{item.name}</label>
            <input 
                type="number" 
                name={item.name}
                id={item.id}
                value={item.rank}
                onChange={e => handleChange({ name: e.target.value })}
                className="character-edit__input"
            />
            <label htmlFor={item.rank}>{item.rank}</label>
            <input 
                type="number" 
                name={item.rank}
                id={item.rank}
                value={item.rank}
                onChange={e => handleChange({ rank: e.target.value })}
                className="character-edit__input"
            />
        </>
    )
}
