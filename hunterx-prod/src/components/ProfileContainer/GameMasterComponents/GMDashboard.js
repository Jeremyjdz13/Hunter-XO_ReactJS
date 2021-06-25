import React, {useEffect, useState} from 'react'
import { db } from '../../../firebase'
import PlayerCard from './PlayerCard'
import PlayerCharactersCard from './PlayerCharactersCard'

export default function GMDashboard() {

    const [ playerData, setPlayerData ] = useState()
    const [ playerCharacters, setPlayerCharacters ] = useState()

    useEffect(() => {
        const players = db.ref(`users/`)
        const listener = players.on('value', snapshot => {
            if(!snapshot.exists()){
                setPlayerData([])
                return;
            }
            const playerRecords = []
            const playerRecordsCharacters = []
            snapshot.forEach(userSnapshot =>{
               let userKey = userSnapshot.key;
               let userData = userSnapshot.val().profile;
               let userDataCharacters = userSnapshot.val().characters;
            //    console.log(userKey)
            //    console.log(userSnapshot.val().profile)
                playerRecords.push({id:userKey, profile:userData})
                playerRecordsCharacters.push({id:userKey, characters:JSON.stringify(userDataCharacters)})
            })
            setPlayerData(playerRecords)
            setPlayerCharacters(playerRecordsCharacters)
        });

        return () => players.off('value', listener)

    }, [])

    return (
        <div className="gmDashboard-container">
            <div className="add_button-container gmDashboard_Header-container">
                <div>Game Master Dashboard</div><button className="add_button-main">Invite a Player</button>
            </div>
            <div className="gmDashboard_Body-container">
                <div className="">
                    <h3>Players &amp; Characters</h3>
                    <div className="gmDashboard_Data_Cards">
                        {/* <PlayerCard playerData={playerData} /> */}
                        {playerData?.map(player =>{
                            return  <PlayerCard id={player.id} player={player.profile} />
                        })}
                        {playerCharacters?.map(playerCharacter => {
                            return <PlayerCharactersCard playerCharacter={playerCharacter.characters} />
                        })}
                    </div>
                </div>
            </div>
        </div>
      
    )
}
