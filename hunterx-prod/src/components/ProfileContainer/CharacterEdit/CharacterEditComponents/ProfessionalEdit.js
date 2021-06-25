import React from 'react'

export default function ProfessionalEdit(props) {
    const {
        skill,
        handleProfessionalSkillChange,
        handleProfessionalSkillDelete
    } = props

    function handleChange( changes ) {
        handleProfessionalSkillChange(skill.id, { ...skill, ...changes})
    }

    return (
        <div className="grid_skills edit_input-container">
            <div>
                <label htmlFor="name" className="input_titles">Name</label>
                <input 
                    type="text"
                    name="name"
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
                    onClick={() => handleProfessionalSkillDelete(skill.id) }
                    className="delete_button" 
                >
                   &times;
                </button>
            </div>
        </div>
    )
}
