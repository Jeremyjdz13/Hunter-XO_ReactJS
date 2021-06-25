import React from 'react'

export default function PlayerCard({id, player}) {

    function handleGameMaster(){
        if(player.gameMaster){
            return <span>Game Master: True</span>
        }

        return <span>Game Master: False</span>
    }

    function handleEditor(){
        if(player.editor){
            return <span>Editor: True</span>
        }

        return <span>Editor: False</span>
    }
  
    return (
        <div key={id} className="gmDashboard-Data_Card">
            <div>DisplayName: {player.displayName}</div>
            <div>Email: {player.email}</div>
            <div>{handleGameMaster()}</div>
            <div>{handleEditor()}</div>
        </div>
    )
}
