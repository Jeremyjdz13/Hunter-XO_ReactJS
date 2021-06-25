import React, { useContext } from 'react'
import { useProfile } from '../../../contexts/ProfileContext'
import { GameRulesContext } from '../../../contexts/GameRulesContext'
import GameBookCard from './GameBookCard'
import GameBookEdit from './GameBookEdit'
import Book from './GameBookComponents/Book'

export default function GameBookCards({ gameRules, selectedRule, selectedBook }) {
    const { profileData } = useProfile()

    const { handleGameBookAdd } = useContext(GameRulesContext)

    function handleEditDelete(){
  
        if (profileData?.editor == false){
            console.log(profileData?.editor, "Editing Rights")
            return 

        }

        return (
            <div>
                <button onClick={handleGameBookAdd} className="add_button-main">Add Book</button>
            </div>
        )
    }

    return (
        <div className="book-body">
            <div className="add_button-container">
                <div className="game_rule_books-title">Game Rule Books</div>
                {handleEditDelete()}
            </div>
            <div className="book_parent-container">
                <div className="book-grid">
                    {gameRules?.map(book => {
                        return <GameBookCard key={book.id} {...book} gameRules={gameRules} />
                    })}
                </div>
                <div>
                    {selectedRule && <GameBookEdit selectedRule={selectedRule} /> }
                    {selectedBook && <Book selectedBook={selectedBook} />}
                </div>
            </div>
            
        </div>
    )
}
