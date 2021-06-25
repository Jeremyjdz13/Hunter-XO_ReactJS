import React from 'react'

export default function BashingCounterEdit(props) {
    const {
        count,
        handleBashingCountChange
    } = props

    function handleChange( changes ){

        handleBashingCountChange(count.id, { ...count, ...changes })
    }
    function handleCount(){
        if(parseInt(count.value) >= 4 && parseInt(count.value) <= 5){
            return <h5>Slap fighting! -1</h5>
        } else if(parseInt(count.value) >= 6 && parseInt(count.value) <= 8){
            return <h5>No BITING! -3</h5>
        } else if(parseInt(count.value) === 9){
            return <h5>A'Chil-les Heal! -5 </h5>
        }else if(parseInt(count.value) === 10){
            return <h5>Hello Darkness My...! TKO</h5>
        }
        else {
            return <h5>Pillow FIGHT!</h5>
        }
    }

    return (
        <div className="grid_counters"> 
            <label htmlFor="counter" className="input_titles">{count.name}</label>
            <input 
                type="number"
                name="counter"
                value={count.value}
                onChange={(e) => handleChange( { value: parseInt(e.target.value) || '' } )}
                className="character-edit__input numbers"
            />
            <div className="input_titles counter_description-container">
               {handleCount()} 
            </div>
            
        </div>
    )
}
