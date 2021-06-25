import React from 'react'

export default function BackgroundsEdit(props) {
    const{
        background,
        handleBackgroundChange,
        handleBackgroundDelete
    } = props

    function handleChange( changes ) {
        handleBackgroundChange(background.id, { ...background, ...changes})
    }
    return (
        <div className="grid_skills edit_input-container">
            <div>
                <label htmlFor="name" className="input_titles">Name</label>
                <input 
                    type="text"
                    name="name"
                    id={background.id}
                    value={background.name}
                    onChange={(e) => handleChange( { name: e.target.value })}
                    className="character-edit__input" 
                />
            </div>
            <div>
                <label htmlFor="rank" className="input_titles">Rank</label>
                <input 
                    type="number"
                    name="rank"
                    id={background.id}
                    value={background.rank}
                    onChange={(e) => handleChange( { rank: parseInt(e.target.value) || '' })}
                    className="character-edit__input numbers" 
                />
            </div>
            <div className="delete_button-container">
                <button 
                    onClick={() => handleBackgroundDelete(background.id)} 
                    className="delete_button"
                >
                    &times;
                </button>
            </div>
        </div>
    )
}
