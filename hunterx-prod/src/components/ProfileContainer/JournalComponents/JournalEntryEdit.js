import React, { useState, useContext, useEffect } from 'react'
import { JournalContext } from '../../../contexts/JournalContext'

export default function JournalEntryEdit({ journalEntry }) {
    const [newEditDate, setNewEditDate] = useState(journalEntry.editDate)
    const { handleJournalEntrySelect, handleJournalEntryChange } = useContext(JournalContext)

    function handleChange( changes ){
        handleJournalEntryChange(journalEntry.id, { ...journalEntry, ...changes })

        console.log(changes)
    }

    return (
        <div className="sticky-container">
            <div className="secondary_buttons-main_container">
                  <button onClick={() => handleJournalEntrySelect(undefined)}  className="secondary_buttons-main">Close</button>
            </div>
          
            <div className="edit_journal_background-container comic_style-container">
                <div>
                    <label htmlFor="title" className="edit_input_titles">Title</label>
                    <input 
                        type="text"
                        name="title"
                        value={journalEntry.title}
                        onChange={e => handleChange({ title: e.target.value })}
                        className="character-edit__input"
                    />
                </div>
                <div>
                    <label htmlFor="body" className="edit_input_titles ">Body</label>
                    {console.log(journalEntry.body, "this is body edit")}
                    <textarea
                        type="text" 
                        name="body"
                        value={journalEntry.body}
                        onChange={e => handleChange({ body: e.target.value })}
                        className="character-edit__input"
                    />
                </div>
                <div>
                    <label htmlFor="editDate" className="edit_input_titles ">Date Edited</label>
                    <input 
                        type="text"
                        name="editDate"
                        value={Intl.DateTimeFormat('en-US', {year: 'numeric', month: '2-digit',day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit'}).format(journalEntry.editDate)}
                        onChange={e => handleChange({ editDate: e.target.value })}
                        readOnly={true}
                    />
                </div> 
            </div>
        </div>
    )
}
