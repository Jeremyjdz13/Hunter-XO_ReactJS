import React, {useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid'
import GameBookCards from '../components/ProfileContainer/GameRulesComponents/GameBookCards'
import { useAuth } from './AuthContext'
import { db } from '../firebase'

export const GameRulesContext = React.createContext()

export default function GameRules() {
    const { currentUser } = useAuth()
    const [selectedGameRuleId, setSelectedGameRuleId] = useState()
    const [selectedGameBookId, setSelectedGameBookId] = useState()
    const [gameRules, setGameRules] = useState()
    const selectedRule = gameRules?.find(rule => rule.id === selectedGameRuleId)
    const selectedBook = gameRules?.find(rule => rule.id === selectedGameBookId)

    useEffect(() => {
  
        if(!currentUser){
            setGameRules(null);
            return;
        }
        const gameRules = db.ref(`rulebooks/`);

        const listener = gameRules.on('value', snapshot => {
            if(!snapshot.exists()){
                snapshot.ref
                .set(JSON.stringify(books))
                .catch((error) => {
                    console.log("Failed to initialize default books.", error);
                })
                return;
            }
            setGameRules(JSON.parse(snapshot.val()));
        })
        return () => gameRules.off('value', listener)
    },[])


    const gameRulesContextValue = {
        handleGameBookDelete,
        handleGameRuleSelect,
        handleGameBookSelect,
        handleGameRuleChange,
        handleGameBookAdd
    }

    function handleGameRuleSelect(id){
        setSelectedGameRuleId(id)
    }

    function handleGameBookSelect(id){
        setSelectedGameBookId(id)
    }

    function handleGameBookDelete(id) {

        if(selectedGameRuleId != null && selectedGameRuleId === id){
            setSelectedGameRuleId(undefined)
        }
        // setGameRules(gameRules.filter(rule => rule.id !== id))
        db.ref(`rulebooks`).set(JSON.stringify(gameRules.filter(rule => rule.id !== id)))
    }

    function handleGameBookAdd(){
        const newBook = {
            id: uuidv4(),
            bookTitle: "Book Title",
            mainParagraph: 'Placeholder for a Main Paragraph.',
            pages: [
                {
                    id: uuidv4(),
                    pageTitle: 'SubTitle placeholder',
                    paragraph: 'paragraph placeholder'
                }
            ]
        } 
        setSelectedGameRuleId(newBook.id)
        const addBook = [...gameRules, newBook]
        // setGameRules([...gameRules, newBook])
        db.ref(`rulebooks`).set(JSON.stringify(addBook))
    }


    function handleGameRuleChange(id, gameRule){
        const newGameRules = [ ...gameRules] //Makes a copy of Game rules
        const index = newGameRules.findIndex(r => r.id === id)
        newGameRules[index] = gameRule
        // setGameRules(newGameRules)
        db.ref(`rulebooks`).set(JSON.stringify(newGameRules))
    }

    return (
        <GameRulesContext.Provider value={gameRulesContextValue} >
            <GameBookCards 
                gameRules={gameRules} 
                selectedRule={selectedRule} 
                selectedBook={selectedBook}
                />
           
        </GameRulesContext.Provider>
    )
}

const books = [
    {
        id: uuidv4(),
        bookTitle: "XO: ExtraOrdinary",
        mainParagraph: "XO is a super-powers game set in the modern world, where normal people have to cope with not only their mundane lives, but with abilities that most of their fellow men do not have.  But XO is more than just a game; it is an examination of morality, ethics, power and corruption; the human spirit. It intends to bring into question the concepts of Good and Evil, and what makes such a thing ‘good’ for one person, and ‘evil’ for another. And the game is meant to evolve as the choices of the players, and the consequences of those choices, change the world around the characters. The world is a pond, and the larger the splash, the more the ripples are evident everywhere.",
        pages:[
            {
                id: uuidv4(),
                pageTitle: 'something',
                paragraph: 'something for paragraph'
            }
        ]
    },
    {    
        id: uuidv4(),
        bookTitle: "Character Creation",
        mainParagraph: 'Placeholder for Main Paragraph.',
        pages:[
            {
                id: uuidv4(),
                pageTitle: 'Attributes',
                paragraph: 'We like attributes'
            },
            {
                id: uuidv4(),
                pageTitle: 'Powers',
                paragraph: 'Slide!!!'
            },
                
            {
                id: uuidv4(),
                pageTitle: 'Power Stunts',
                paragraph: 'Lous Tavern'
            },
        ]
    },  
    { 
        id: uuidv4(),
        bookTitle: "Protonium & Powers",
        mainParagraph: 'Placeholder for a Main Paragraph.',
        pages: [
            {
                id: uuidv4(),
                pageTitle: 'SubTitle placeholder',
                paragraph: 'paragraph placeholder'
            }
        ]
        
    },
    {
        id: uuidv4(),
        bookTitle: "Merits",
        mainParagraph: 'Placeholder for a Main Paragraph.',
        pages: [
            {
                id: uuidv4(),
                pageTitle: 'SubTitle placeholder',
                paragraph: 'paragraph placeholder'
            }
        ]
    },
    {
        id: uuidv4(),
        bookTitle: "Flaws",
        mainParagraph: 'Placeholder for a Main Paragraph.',
        pages: [
            {
                id: uuidv4(),
                pageTitle: 'SubTitle placeholder',
                paragraph: 'paragraph placeholder'
            }
        ]
    },
    {
        id: uuidv4(),
        bookTitle: "Combat",
        mainParagraph: 'Placeholder for a Main Paragraph.',
        pages: [
            {
                id: uuidv4(),
                pageTitle: 'SubTitle placeholder',
                paragraph: 'paragraph placeholder'
            }
        ]
    },
    {
        id: uuidv4(),
        bookTitle: "Drugs & Poisons",
        mainParagraph: 'Placeholder for a Main Paragraph.',
        pages: [
            {
                id: uuidv4(),
                pageTitle: 'SubTitle placeholder',
                paragraph: 'paragraph placeholder'
            }
        ]
    },
    {
        id: uuidv4(),
        bookTitle: "Inventing",
        mainParagraph: 'Placeholder for a Main Paragraph.',
        pages: [
            {
                id: uuidv4(),
                pageTitle: 'SubTitle placeholder',
                paragraph: 'paragraph placeholder'
            }
        ]
    }           
]
    
    
