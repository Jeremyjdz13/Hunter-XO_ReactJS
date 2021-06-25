import React from 'react'

export default function ProtoniumCounterEdit(props) {
    const {
        count,
        maxProtonium,
        handleProtoniumCountChange
    } = props

    
    function handleChange( changes ){

        handleProtoniumCountChange(count.id, { ...count, ...changes })
    }

    return (
        <div className="grid_name_rank">
            <div>
                <label htmlFor="counter" className="input_titles">{count.name}</label>
                <input 
                    type="number"
                    name="counter"
                    value={count.value}
                    onChange={(e) => handleChange( { value: parseInt(e.target.value) || '' } )}
                    className="character-edit__input numbers"
                />
            </div> 
            {/* <div>
                <span className="input_titles">Max Protonium</span>
                <h5 className="input_titles">{maxProtonium.rank}</h5>
            </div> */}
            
        </div>
    )
}
