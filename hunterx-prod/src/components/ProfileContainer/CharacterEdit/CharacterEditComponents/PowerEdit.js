import React from 'react'

export default function PowerEdit(props) {
    const{
        power,
        handlePowerChange,
        handlePowerDelete
    } = props

    function handleChange( changes ) {
      
        handlePowerChange(power.id, { ...power, ...changes})
    }
    return (
        <div className="grid_skills edit_input-container">
            <div>
                <label htmlFor="power" className="input_titles">Power</label>
                <input 
                    type="text"
                    name="power"
                    id={power.id}
                    value={power.name}
                    onChange={(e) => handleChange( { name: e.target.value })}
                    className="character-edit__input" 
                />
            </div>
            <div>
                <label htmlFor="rank" className="input_titles">Rank</label>
                <input 
                    type="number"
                    name="rank"
                    id={power.id}
                    value={power.rank}
                    onChange={(e) => handleChange( { rank: parseInt(e.target.value) || '' })}
                    className="character-edit__input numbers" 
                />
            </div>
            <div className="delete_button-container">
                <button 
                    onClick={() => handlePowerDelete(power.id)} 
                    className="delete_button"
                >
                    &times;
                </button>
            </div>
        </div>
    )
}
