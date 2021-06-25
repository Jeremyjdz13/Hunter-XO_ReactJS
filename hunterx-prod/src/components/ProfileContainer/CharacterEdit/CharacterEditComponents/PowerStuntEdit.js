import React from 'react'

export default function PowerStuntEdit(props) {
   
    const {
        powerStunt,
        handlePowerStuntChange,
        handlePowerStuntDelete
    } = props

    function handleChange( changes ) {
        handlePowerStuntChange(powerStunt.id, { ...powerStunt, ...changes})
    }

    return (
        <div className="edit_input-container">
            <div className="grid_skills" >
                <div>
                    <label htmlFor="powerStunt" className="input_titles">Power Stunt</label>
                    <input 
                        type="text"
                        name="powerStunt"
                        value={powerStunt.name}
                        onChange={(e) => handleChange( { name: e.target.value })}
                        className="character-edit__input"
                    />
                </div>
                <div>
                    <label htmlFor="attempts" className="input_titles">Attempts</label>
                    <input 
                        type="number"
                        name="attempts"
                        value={powerStunt.rank}
                        onChange={(e) => handleChange( { rank: parseInt(e.target.value) || ''  })}
                        className="character-edit__input numbers"
                        >
                    </input>
                </div>
                <div className="delete_button-container">
                    <button 
                        onClick={() => handlePowerStuntDelete(powerStunt.id) }
                        className="delete_button" 
                    >
                        &times;
                    </button>
                </div>
            </div>
            <div>
                <label htmlFor="description" className="input_titles">Description</label>
                <textarea 
                    type="text"
                    name="description"
                    value={powerStunt.description}
                    onChange={(e) => handleChange( { description: e.target.value })}
                    className="character-edit__input"
                    >
                </textarea>
            </div>
        </div>
    )
}
