import React from 'react'

export default function MentalEdit(props) {
    
    const {
        skill,
        handleMentalSkillChange,
        handleMentalSkillDelete
    } = props

    function handleChange( changes ) {
        handleMentalSkillChange(skill.id, { ...skill, ...changes})
    }

    return (
        <div className="grid_skills edit_input-container">
            <div>
                <label htmlFor="skillName" className="input_titles">Name</label>
                <input 
                    type="text"
                    name="skillName"
                    id={skill.id}
                    value={skill.name}
                    onChange={(e) => handleChange( { name: e.target.value })}
                    className="character-edit__input"
                />
            </div>
            <div>
                <label htmlFor="rank" className="input_titles">Rank</label>
                <input 
                    type="number" 
                    name="rank"
                    onChange={(e) => handleChange({ rank: parseInt(e.target.value) || '' })}
                    value={skill.rank}
                    className="character-edit__input numbers"
                />
            </div>
            <div className="delete_button-container">
                <button 
                    onClick={() => handleMentalSkillDelete(skill.id) }
                    className="delete_button" 
                >
                    &times;
                </button>
            </div>
        </div>
    )
}
