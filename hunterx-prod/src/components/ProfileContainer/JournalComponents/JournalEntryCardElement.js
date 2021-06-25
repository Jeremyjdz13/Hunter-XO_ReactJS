import React, { useContext } from 'react'
import { JournalContext } from '../../../contexts/JournalContext'
export default function JournalEntryCardElement(props) {
    const {
        id,
        title,
        body,
        creationDate,
        editDate
    } = props

    const { handleJournalEntrySelect, handleJournalEntryDelete } = useContext(JournalContext)

    function handleDeleteWarning(id, name) {
        const answer = window.confirm(`"Are you sure you want to delete? ${name}"`)

        if(answer){
           handleJournalEntryDelete(id)
        } else{

        }  
    }
    
    return (
        <div className="left-container">
            <div className="secondary_buttons-main_container">
                <button 
                onClick={() => handleDeleteWarning(id, title) } 
                className="secondary_buttons-main"
                >
                    Delete Entry
                </button>
                <button 
                onClick={() => handleJournalEntrySelect(id)}
                className="secondary_buttons-main"
                >
                    Edit
                </button> 
            </div>
            <div className="journal_background-container comic_style-container">
                <h5>{title}</h5>
                <p className="journal-body">{body}</p>
                <div>
                    <h6>Date Entered: {Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(creationDate)}</h6>
                    <h6>Last Edited: {Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(editDate)}</h6> 
                </div>  
            </div>
        </div>
    )
}
