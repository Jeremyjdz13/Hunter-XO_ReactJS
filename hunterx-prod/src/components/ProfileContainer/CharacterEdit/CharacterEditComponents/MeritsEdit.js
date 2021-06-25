import React from 'react'

export default function MeritsEdit(props) {
    const{
        merit,
        handleMeritChange,
        handleMeritDelete
    } = props

    function handleChange( changes ) {
        handleMeritChange(merit.id, { ...merit, ...changes})
    }
    return (
        <div className="grid_skills edit_input-container">
            <div>
                 <label htmlFor="merit" className="input_titles">Name</label>
                <input 
                    type="text"
                    name="merit"
                    id={merit.id}
                    value={merit.name}
                    onChange={(e) => handleChange( { name: e.target.value })}
                    className="character-edit__input"
                />
            </div>
           <div>
                <label htmlFor="rank" className="input_titles">Rank</label>
                <input 
                    type="number"
                    name="rank"
                    id={merit.id}
                    value={merit.rank}
                    onChange={(e) => handleChange( { rank: parseInt(e.target.value) || '' })}
                    className="character-edit__input numbers"
                />
            </div>
            <div className="delete_button-container">
                <button 
                    onClick={() => handleMeritDelete(merit.id) }
                    className="delete_button"  
                >
                    &times;
                </button>
            </div>
        </div>
    )
}
