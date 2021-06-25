import React, { useContext, useEffect } from 'react'
import { GameRulesContext } from '../../../contexts/GameRulesContext'
import { useProfile } from '../../../contexts/ProfileContext'


export default function GameRuleCard( props ) {
    const {
        id,
        bookTitle,
    } = props

    const { profileData } = useProfile()
    const { handleGameBookDelete, handleGameBookSelect } = useContext(GameRulesContext)

    function handleDeleteWarning(id, name) {
        const answer = window.confirm(`"Are you sure you want to delete? ${name}"`)

        if(answer){
            handleGameBookDelete(id)
        } else{

        }  
    }

    function handleEditDelete(){
  
        if (profileData?.editor == false){
            console.log(profileData?.editor, "Editing Rights")
            return 

        }

        return (
            <div>
                <button onClick={() => handleDeleteWarning(id, bookTitle)}>Delete Book</button>
            </div>
        )
    }

    
    return (
        <div className="">
            <div>
               <button key={id} className={"coverPage-container"} onClick={() => handleGameBookSelect(id)}>
                    <div>
                        <span>{bookTitle}</span>  
                    </div>
                </button> 
            </div>
            {/* <div><button onClick={() => handleDeleteWarning(id, bookTitle)}>Delete Book</button></div> */}
            {handleEditDelete()}
        </div>
    )
}
