import React, {useState, useEffect, useContext } from 'react'
import { useAuth } from './AuthContext'
import { db } from '../firebase'
import { v4 as uuidv4 } from 'uuid'
import JournalEntryCard from '../components/ProfileContainer/JournalComponents/JournalEntryCard'

export const JournalContext = React.createContext()

export default function JournalProvider() {
    const { currentUser, loading: loadingUser } = useAuth()
    const [selectedJournalId, setSelectedJournalId] = useState()
    const [journalEntries, setJournalEntries] = useState()
    const selectedJournal = journalEntries?.find(journal => journal.id === selectedJournalId)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
     
        if(loadingUser){
            return; //Still initializing, do nothing.
        }

        if(!currentUser){
            setJournalEntries(null)
            return;
        }

        const journalRef = db.ref(`users/${currentUser.uid}/journal`);

        const listener = journalRef.on('value', snapshot => {
            if(!snapshot.exists()){
                // no character data found, create from template
                snapshot.ref
                .set(JSON.stringify(journalTemplate)) // This will refire the listener if successful.
                .catch((error) => console.log("Failed to initialize default journal", error));
                // setLoading(false)
                return;
            }
            setJournalEntries(JSON.parse(snapshot.val()));
            // setLoading(false);
        });

        return () => journalRef.off('value', listener);
        // console.log('Testing Journal')
        // setLoading(false)

    },[currentUser, loadingUser])


    function handleJournalEntrySelect(id){
        setSelectedJournalId(id)
    }


    function handleJournalEntryAdd(){
        const newDate = new Date().getTime().toString()
        const newJournalEntry = {
            id: uuidv4(),
            title: "Entry Title",
            body: 'Notes',
            creationDate: newDate,
            editDate: newDate
        }
        const addJournal = [...journalEntries, newJournalEntry]
        setSelectedJournalId(newJournalEntry.id)
        db.ref(`users/` + currentUser.uid).child("/journal").set(JSON.stringify(addJournal))
        console.log("Journal changes updated and saved to firebase.")

    }

    function handleJournalEntryDelete(id) {

        if(selectedJournalId != null && selectedJournalId === id){
            setSelectedJournalId(undefined)
        }
        // setJournalEntries(journalEntries.filter(journalEntry => journalEntry.id !== id))
        db.ref(`users/${currentUser.uid}`).child('/journal').set(JSON.stringify(journalEntries.filter(journalEntry => journalEntry.id !== id)))
    }

    function handleJournalEntryChange(id, journalEntry){
        const newJournalEntries = [ ...journalEntries ] //Makes a copy of JournalEntries
        const index = newJournalEntries.findIndex(j => j.id === id)
        newJournalEntries[index] = journalEntry
        // setJournalEntries(newJournalEntries)
        db.ref(`users/` + currentUser.uid).child("/journal").set(JSON.stringify(newJournalEntries))
    }

    const journalContextValue = {
        journalEntries,
        selectedJournal,
        loading,
        handleJournalEntryAdd,
        handleJournalEntryDelete,
        handleJournalEntrySelect,
        handleJournalEntryChange
    }

    return (
        <JournalContext.Provider value={journalContextValue} >
            <JournalEntryCard journalEntries={journalEntries} selectedJournal={selectedJournal} />
        </JournalContext.Provider>
    )
}

const journalTemplate = [
    {
        id: uuidv4(),
        title: "Entry Title",
        body: 'Notes',
        creationDate: new Date().getTime().toString(),
        editDate: new Date().getTime().toString()
    }
]
