import React from 'react'
import { useCharacter } from '../../../contexts/CharacterContext'
import CharacterCard from './CharacterCard'
import CharacterCardEdit from '../../ProfileContainer/CharacterEdit/CharacterCardEdit'
import SuccessRoller from '../CharacterComponents/SuccessRoller/SuccessRoller'

export default function CharacterCards() {
    const { handleCharacterAdd,  characters, selectedCharacter, selectedCharacterSuccessRoller, loading } = useCharacter()
 
    return (
        <div>
            <div className="add_button-container">
               <div className="character-card-title">Characters</div><button onClick={handleCharacterAdd} className="add_button-main" >Add Character</button>
            </div>
            <div className="parent-container">
                <div>
                    {!loading && characters?.map(character => {
                            return (
                                <CharacterCard key={character.id} {...character} />    
                            )
                        })
                    }
                </div>
                <div>
                    {selectedCharacter && <CharacterCardEdit character={selectedCharacter} />}
                    {selectedCharacterSuccessRoller && <SuccessRoller character={selectedCharacterSuccessRoller} />} 
                </div>
            </div>
        </div>
    )
}

// { characters, selectedCharacter, selectedCharacterSuccessRoller }