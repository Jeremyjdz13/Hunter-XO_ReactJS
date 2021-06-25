import React from 'react'

export default function TalismanEdit(props) {
    const{
        talisman,
        handleTalismanChange,
        handleTalismanDelete
    } = props

    function handleChange( changes ) {
      
        handleTalismanChange(talisman.id, { ...talisman, ...changes})
    }
    return (
        <div className="edit_input-container">
            <div className="grid_skills">
                <div>
                    <label htmlFor="talisman" className="input_titles">Talisman</label>
                    <input 
                        type="text"
                        name={talisman.id}
                        value={talisman.name}
                        onChange={(e) => handleChange( { name: e.target.value })}
                        className="character-edit__input" 
                    />
                </div>
                <div>
                    <label htmlFor="rank" className="input_titles">Rank</label>
                    <input 
                        type="number"
                        name="rank"
                        value={talisman.rank}
                        onChange={(e) => handleChange( { rank: parseInt(e.target.value) || '' })}
                        className="character-edit__input numbers" 
                    />
                </div>
                <div className="delete_button-container">
                    <button 
                        onClick={() => handleTalismanDelete(talisman.id)} 
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
                    value={talisman.description}
                    onChange={(e) => handleChange( { description: e.target.value })}
                    className="character-edit__input"
                    >
                </textarea>
            </div>
        </div>
    )
}
