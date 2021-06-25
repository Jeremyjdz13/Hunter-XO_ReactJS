import React, { useState, useContext } from 'react'
import { GameRulesContext } from '../../../../contexts/GameRulesContext'
import { useProfile } from '../../../../contexts/ProfileContext'
import Pages from './Pages'


export default function Book({ selectedBook }) {
    const { profileData } = useProfile()
     
    const { handleGameRuleSelect, handleGameBookSelect } = useContext(GameRulesContext)

    const [selectedPageParagraphId, setSelectedPageParagraphId] = useState()
    const selectedPage = selectedBook.pages.find( paragraph => paragraph.id === selectedPageParagraphId )
    
    function handleSelectPageParagraph(id){
        setSelectedPageParagraphId(id)
    }

    function handleSelect(id){
        handleGameRuleSelect(id)
        handleGameBookSelect(undefined)
   
    }

    function handleEditDelete(){
  
        if (profileData?.editor == false){
            console.log(profileData?.editor, "Editing Rights")
            return 

        }

        return (
            <>
                <button onClick={() => handleSelect(selectedBook.id)}>Edit</button>
            </>
        )
    }

    return (
        <div className="sticky-container">
            <div>
                <button onClick={() => handleGameBookSelect(undefined)} >Close</button>
                {/* <button onClick={() => handleSelect(selectedBook.id)}>Edit</button> */}
                {handleEditDelete()}
            </div>
            <div className="mainParagraph_container border-red">
                <h4>{selectedBook.bookTitle}</h4>
                <ul>
                    {selectedBook.pages.map(page=> {
                        return <button onClick={() => handleSelectPageParagraph(page.id)}>{page.pageTitle}</button>
                    })}
                </ul>
                <p>{selectedBook.mainParagraph}</p>
                <div>
                    {selectedPage && <Pages {...selectedPage} handleSelectPageParagraph={handleSelectPageParagraph} />}
                </div>
            </div>
        </div>
    )
}