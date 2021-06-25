import React, { useState, useEffect, useContext } from 'react'
import { useAuth } from './AuthContext'
import { db } from '../firebase'
import { v4 as uuidv4 } from 'uuid'

const CharacterContext = React.createContext()

export function useCharacter(){
    return useContext(CharacterContext)
}

export function CharacterProvider({ children }) {
    const { currentUser, loading: loadingUser } = useAuth()
    const [selectedCharacterId, setSelectedCharacterId] = useState()
    const [selectedCharacterIdSuccessRoller, setSelectedCharacterIdSuccessRoller] = useState()
    const [characters, setCharacters] = useState()
    const selectedCharacter = characters?.find(character => character.id === selectedCharacterId)
    const selectedCharacterSuccessRoller = characters?.find(character => character.id === selectedCharacterIdSuccessRoller)
    const [loading, setLoading] = useState(true)
   

  

    useEffect(() => {
        if(loadingUser){
            return; // still initializing, do nothing.
        }

        if(!currentUser){
            //no user signed in!
            setCharacters(null);
            setLoading(false)
            return;
        }

        const charactersRef = db.ref(`users/${currentUser.uid}/characters`);

        const listener = charactersRef.on('value', snapshot => {
            if(!snapshot.exists()){
                //no character data found, create from template
                snapshot.ref
                .set(JSON.stringify(characterTemplate)) // This will refire the listener if successful.
                .catch((error) => console.log("Failed to initialize default characters", error));
                // setCharacters([])
                // setLoading(false);
                return;
            }
            setCharacters(JSON.parse(snapshot.val()));
            setLoading(false);

        });

        return () => charactersRef.off('value', listener);
        
    }, [currentUser, loadingUser]);

  
    function handleCharacterSelect(id){
        setSelectedCharacterId(id)
        setSelectedCharacterIdSuccessRoller(undefined)
    }
    
    function handleCharacterSelectSuccessRoller(id){
        setSelectedCharacterIdSuccessRoller(id)
        setSelectedCharacterId(undefined)
    }

    function handleCharacterAdd(){
        const newCharacter = {
            id: uuidv4(),
            name: 'Character Template',
            alias: 'Alias',
            nature: 'Nature',
            primaryAttributes:[
                    {
                        id: uuidv4(),
                        name: 'Fight',
                        rank: 3
                    },
                    {
                        id: uuidv4(),
                        name: 'Strength',
                        rank: 3
                    },
                    {
                        id: uuidv4(),
                        name: 'Agility',
                        rank: 3
                    },
                    {
                        id: uuidv4(),
                        name: 'Endurance',
                        rank: 3
                    },
                    {
                        id: uuidv4(),
                        name: 'Reason',
                        rank: 3
                    },
                    {
                        id: uuidv4(),
                        name: 'Intuition',
                        rank: 3
                    },
                    {
                        id: uuidv4(),
                        name: 'Psyche',
                        rank: 3
                    }
                ],
            secondaryAttributes:[
                    {
                        id: uuidv4(),
                        name: 'Acclaim',             
                        rank: 0
                    },
                    {
                        id: uuidv4(),
                        name: 'Infamy',             
                        rank: 0
                    }, 
                    {
                        id: uuidv4(),
                        name: 'Karma',             
                        rank: 0
                    },
                    {
                        id: uuidv4(),
                        name: 'Experience',             
                        rank: 0
                    },
                    {
                        id: uuidv4(),
                        name: 'Armor',             
                        rank: 0
                    },
                    {
                        id: uuidv4(),
                        name: 'Protonium',             
                        rank: 0
                    }
                ],
            combatSkills:[
                    {
                        id:uuidv4(),
                        name: 'Combat Skill',
                        rank: 1
                    }
                ],
            physicalSkills:[
                    {
                        id: uuidv4(),
                        name: 'Physical Skill',
                        rank: 1
                    }
                ],   
            professionalSkills:[
                    {
                        id: uuidv4(),
                        name: 'Professional Skill',
                        rank: 1
                    }
                ],
            mentalSkills:[
                    {
                        id: uuidv4(),
                        name: 'Mental Skill',
                        rank: 1
                    }
                ],
            backgrounds:[
                    {
                        id: uuidv4(),
                        name: 'Background',
                        rank: 1
                    }
                ],
            merits:[
                    {
                        id: uuidv4(),
                        name: 'Merit',
                        rank: 1
                    }
                ],
            flaws:[
                    {
                        id: uuidv4(),
                        name: 'Flaw',
                        rank: 1
                    }
                ],
            powers:[
                    {
                        id: uuidv4(),
                        name: 'Super Power',
                        rank: 1
                    }
                ],
            talismans:[
                    {
                        id: uuidv4(),
                        name: 'Talisman',
                        rank: 1,
                        description: 'What does this Talisman do?'
                    }
                ],
            powerStunts:[
                    {
                        id: uuidv4(),
                        name: 'Power Stunt',
                        rank: 0,
                        description: 'What does this Power Stunt do?'
                    }
                ] ,
            protoniumCounter:[
                    {
                        id: uuidv4(),
                        name: 'Spent Protonium',
                        value: 0,
                    }
                ],
            bashingCounter:[
                    {
                        id: uuidv4(),
                        name: 'Count',
                        value: 0
                    }
                ],
            lethalCounter:[
                    {
                        id: uuidv4(),
                        name: 'Count',
                        value: 0, 
                    }
                ],
            equipmentItems:[
                    {
                        id: uuidv4(),
                        name: 'Kitchen Chair',
                        rank: 5,
                        description: 'Solid Oak chair for bashing heads or to sit for a nice cup of tea.'
                    },
                    {
                        id: uuidv4(),
                        name: 'Cash',
                        rank: 4,
                        description: 'Based off of my resources I should have this much cash per month.'
                    }
                ] 
        }

        const addCharacter = [...characters, newCharacter]
        db.ref(`users/` + currentUser.uid).child("/characters").set(JSON.stringify(addCharacter))
        setSelectedCharacterId(newCharacter.id)
        console.log("New character saved to firebase.")
        // setCharacters([...characters, newCharacter])
    }

    function handleCharacterChange(id, character){
  
        const newCharacters = [ ...characters ] //Makes a copy of character cards
        const index = newCharacters.findIndex(c => c.id === id)
        newCharacters[index] = character
        
        // setCharacters(newCharacters)
        db.ref(`users/` + currentUser.uid).child("/characters").set(JSON.stringify(newCharacters))
        console.log("Character changes updated and saved to firebase.")
        
    }

    function handleCharacterDelete(id){
        if (selectedCharacterId != null && selectedCharacterId === id){
            setSelectedCharacterId(undefined)
        }
        // setCharacters(characters.filter(character => character.id !== id))
        db.ref(`users/` + currentUser.uid).child("/characters").set(JSON.stringify(characters.filter(character => character.id !== id)))

    } 

    const characterContextValue = {
        characters,
        selectedCharacter,
        selectedCharacterSuccessRoller,
        loading,
        handleCharacterAdd,
        handleCharacterDelete,
        handleCharacterSelect,
        handleCharacterChange,
        handleCharacterSelectSuccessRoller
    }

    return (
        <CharacterContext.Provider value={characterContextValue}>
            {!loading && children}             
        </CharacterContext.Provider>
    )
}

const characterTemplate = [
    {
        id: uuidv4(),
        name: 'Character Template',
        alias: 'Alias',
        nature: 'Nature',
        primaryAttributes:[
                {
                    id: uuidv4(),
                    name: 'Fight',
                    rank: 3
                },
                {
                    id: uuidv4(),
                    name: 'Strength',
                    rank: 3
                },
                {
                    id: uuidv4(),
                    name: 'Agility',
                    rank: 3
                },
                {
                    id: uuidv4(),
                    name: 'Endurance',
                    rank: 3
                },
                {
                    id: uuidv4(),
                    name: 'Reason',
                    rank: 3
                },
                {
                    id: uuidv4(),
                    name: 'Intuition',
                    rank: 3
                },
                {
                    id: uuidv4(),
                    name: 'Psyche',
                    rank: 3
                }
            ],
        secondaryAttributes:[
                {
                    id: uuidv4(),
                    name: 'Acclaim',             
                    rank: 0
                },
                {
                    id: uuidv4(),
                    name: 'Infamy',             
                    rank: 0
                }, 
                {
                    id: uuidv4(),
                    name: 'Karma',             
                    rank: 0
                },
                {
                    id: uuidv4(),
                    name: 'Experience',             
                    rank: 0
                },
                {
                    id: uuidv4(),
                    name: 'Armor',             
                    rank: 0
                },
                {
                    id: uuidv4(),
                    name: 'Protonium',             
                    rank: 0
                }
            ],
        combatSkills:[
                {
                    id:uuidv4(),
                    name: 'Combat Skill',
                    rank: 1
                }
            ],
        physicalSkills:[
                {
                    id: uuidv4(),
                    name: 'Physical Skill',
                    rank: 1
                }
            ],   
        professionalSkills:[
                {
                    id: uuidv4(),
                    name: 'Professional Skill',
                    rank: 1
                }
            ],
        mentalSkills:[
                {
                    id: uuidv4(),
                    name: 'Mental Skill',
                    rank: 1
                }
            ],
        backgrounds:[
                {
                    id: uuidv4(),
                    name: 'Background',
                    rank: 1
                }
            ],
        merits:[
                {
                    id: uuidv4(),
                    name: 'Merit',
                    rank: 1
                }
            ],
        flaws:[
                {
                    id: uuidv4(),
                    name: 'Flaw',
                    rank: 1
                }
            ],
        powers:[
                {
                    id: uuidv4(),
                    name: 'Super Power',
                    rank: 1
                }
            ],
        talismans:[
                {
                    id: uuidv4(),
                    name: 'Talisman',
                    rank: 1,
                    description: 'What does this Talisman do?'
                }
            ],
        powerStunts:[
                {
                    id: uuidv4(),
                    name: 'Power Stunt',
                    rank: 0,
                    description: 'What does this Power Stunt do?'
                }
            ] ,
        protoniumCounter:[
                {
                    id: uuidv4(),
                    name: 'Spent Protonium',
                    value: 0,
                },
                {
                    id: uuidv4(),
                    name: 'Max Protonium',
                    value: undefined
                }
            ],
        bashingCounter:[
                {
                    id: uuidv4(),
                    name: 'Count',
                    value: 0
                }
            ],
        lethalCounter:[
                {
                    id: uuidv4(),
                    name: 'Count',
                    value: 0, 
                }
            ],
        equipmentItems:[
                {
                    id: uuidv4(),
                    name: 'Kitchen Chair',
                    rank: 5,
                    description: 'Solid Oak chair for bashing heads or to sit for a nice cup of tea.'
                },
                {
                    id: uuidv4(),
                    name: 'Cash',
                    rank: 4,
                    description: 'Based off of my resources I should have this much cash per month.'
                }
            ] 
    }
]

