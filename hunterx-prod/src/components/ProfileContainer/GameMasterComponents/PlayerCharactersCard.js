import React from 'react'
import CharacterCard from './CharacterCard'

export default function PlayerCharactersCard({id, playerCharacter}) {
    const characterData = JSON.stringify(playerCharacter)
    return (
        <div key={id} className="gmDashboard-Data_Card">
            <CharacterCard characters={playerCharacter} />
        </div>
    )
}
