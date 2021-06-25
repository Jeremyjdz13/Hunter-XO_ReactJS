import React from 'react'

export default function LethalCounterEdit(props) {
    const {
        count,
        handleLethalCountChange
    } = props

    function handleChange( changes ){

        handleLethalCountChange(count.id, { ...count, ...changes })
    }

    function handleCount(){
        if(parseInt(count.value) >= 3 && parseInt(count.value) <=4){
            return <h5>That really hurt! -1</h5>
        } else if(parseInt(count.value) >= 5 && parseInt(count.value) <= 6){
            return <h5>Is that blood?! -2</h5>
        } else if(parseInt(count.value) >= 7 && parseInt(count.value) <=8){
            return <h5>I ain't got time to bleed! -4</h5>
        }else if(parseInt(count.value) === 9){
            return <h5>To die or not to die? -6</h5>
        }else if(parseInt(count.value) === 10){
            return <h5>Let's weigh your sins!</h5>
        }else {
            return <h5>You looking AT ME?!</h5>
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
