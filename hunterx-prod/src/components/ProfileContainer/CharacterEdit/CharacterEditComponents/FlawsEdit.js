import React from 'react'

export default function FlawsEdit(props) {
    const{
        flaw,
        handleFlawChange,
        handleFlawDelete
    } = props

    function handleChange( changes ) {
        handleFlawChange(flaw.id, { ...flaw, ...changes})
    }
    return (
        <div className="grid_skills edit_input-container">
            <div>
                <label htmlFor="flaw" className="input_titles">Name</label>
                <input 
                    type="text"
                    name="flaw"
                    id={flaw.id}
                    value={flaw.name}
                    onChange={(e) => handleChange( { name: e.target.value })}
                    className="character-edit__input"
                />
            </div>
            <div>
                <label htmlFor="rank" className="input_titles">Rank</label>
                <input 
                    type="number"
                    name="rank"
                    id={flaw.id}
                    value={flaw.rank}
                    onChange={(e) => handleChange( { rank: parseInt(e.target.value) || '' })}
                    className="character-edit__input numbers"
                />
            </div>
            <div className="delete_button-container">
                <button 
                    onClick={() => handleFlawDelete(flaw.id) }
                    className="delete_button" 
                >
                    &times;
                </button>
            </div>    
        </div>
    )
}