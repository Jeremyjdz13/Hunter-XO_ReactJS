import React, { useContext } from 'react'
import { GameRulesContext } from '../../../contexts/GameRulesContext'
import { v4 as uuidv4 } from 'uuid'
import PageEdit from './GameBookComponents/PagesEdit'

export default function GameBookEdit({ selectedRule }) {

    const { handleGameRuleSelect, handleGameRuleChange, handleGameBookSelect } = useContext(GameRulesContext)

    function handleChange( changes ){
        handleGameRuleChange(selectedRule.id, { ...selectedRule, ...changes })
    }

    function handlePagesAdd(){
        const newPage = {
            id: uuidv4(),
            pageTitle: 'Title of page',
            paragraph: 'Write something'
        }

        handleChange({ pages: [...selectedRule.pages, newPage] })
    }

    function handlePageChange(id, page){
        const newPages = [ ...selectedRule.pages ]  //Makes a copy of pages
        const index = newPages.findIndex( p => p.id === id)
        newPages[index] = page
        handleChange( { pages: newPages })
    }

    function handlePageDelete(id){
        handleChange({
            pages: selectedRule.pages.filter(p => p.id !== id)
        })
    }

    function handleCloseEdit(id){
        handleGameRuleSelect(undefined)
        handleGameBookSelect(id)
    }

       return (
        <div className="sticky-container">
            <div className="cRow">
                <button onClick={() => handleCloseEdit(selectedRule.id)} >Close</button>
            </div>
            <div className="book-edit_container comic_style-container">
                <div>
                    <h3>{selectedRule.bookTitle}</h3>
                    <div>
                        <label htmlFor="title">Book Title</label>
                        <input 
                            type="text"
                            id="title" 
                            name="title"
                            value={selectedRule.bookTitle}
                            onChange={e => handleChange({ bookTitle: e.target.value })}
                            className="character-edit__input"
                        />
                    </div>
                    <div>
                        <label htmlFor="body">Title Page Paragraph</label>
                        <textarea
                            type="text" 
                            id="body"
                            name="body"
                            value={selectedRule.mainParagraph}
                            onChange={e => handleChange({ mainParagraph: e.target.value })}
                            className="book-paragraph-edit__input"
                        />
                    </div>
                </div>
                <div>
                    <span>Pages</span>
                    {selectedRule.pages.map(page => (
                        <PageEdit 
                            key={page.id}
                            page={page}
                            handlePageChange={handlePageChange}
                            handlePageDelete={handlePageDelete}
                        />
                    ))}
                    <button onClick={() => handlePagesAdd()} >Add a Page</button>
                </div>
            </div>
        </div>
    )
}