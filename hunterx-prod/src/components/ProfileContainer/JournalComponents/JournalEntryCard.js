import React, {useContext} from 'react'
import JournalEntryCardElement from './JournalEntryCardElement'
import { JournalContext } from '../../../contexts/JournalContext'
import JournalEntryEdit from '../JournalComponents/JournalEntryEdit'

export default function JournalEntryCard({journalEntries, selectedJournal}) {

    const { handleJournalEntryAdd } = useContext(JournalContext)

    return (
        <div>
            <div className="add_button-container">
                <div className="journal-title">Journal</div>
                <button onClick={handleJournalEntryAdd} className="add_button-main" >Add Journal Entry</button>  
            </div>
            <div className="parent-container">
                <div>
                    {journalEntries?.map(journalEntry => {
                        return (
                            <JournalEntryCardElement key={journalEntry.id} {...journalEntry} />
                        )
                    })}
                </div>
                <div>
                    {selectedJournal && <JournalEntryEdit journalEntry={selectedJournal} /> }
                </div>
            </div>
        </div>
    )
}
