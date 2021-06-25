import React from 'react'

export default function EquipmentItemsEdit(props) {
    const{
        item,
        handleEquipmentItemChange,
        handleEquipmentItemDelete
    } = props

    function handleChange( changes ) {
        handleEquipmentItemChange(item.id, { ...item, ...changes})
    }

    return (
        <div className="edit_input-container">
            <div className="grid_skills">
                <div>
                    <label htmlFor="item" className="input_titles">Item</label>
                    <input 
                        type="text"
                        name="item"
                        value={item.name}
                        onChange={(e) => handleChange( { name: e.target.value })}
                        className="character-edit__input"
                    />
                </div>
                <div>
                    <label htmlFor="counter" className="input_titles">Rank</label>
                    <input 
                        type="number"
                        name="counter"
                        value={item.rank}
                        onChange={(e) => handleChange( { rank: parseInt(e.target.value) || '' } )}
                        className="counter-edit__input numbers"
                        />
                </div>
                <div className="delete_button-container">
                    <button 
                        onClick={() => handleEquipmentItemDelete(item.id) }
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
                    value={item.description}
                    onChange={(e) => handleChange( { description: e.target.value })}
                    className="character-edit__input"
                >
                </textarea>
            </div>
        </div>
        
    )
}
