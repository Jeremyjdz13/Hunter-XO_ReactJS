import React from 'react'
import { Link, useRouteMatch } from 'react-router-dom'
import { useProfile } from '../../contexts/ProfileContext'


export default function NavBar() {
    const { profileData } = useProfile()

    function handleGMProfileLink(){
        if(profileData?.gameMaster == false){
            console.log("not GM")
            return;
        }

        return <Link  className="gmDashboard-link  link" to={`${match.url}/gmdashboard`}>GM Dashboard</Link>
    }

    const match = useRouteMatch()
    return (
        <div className="nav-bar">
            {handleGMProfileLink()}
            <Link className="character-link link" to={`${match.url}/characters`}>Characters</Link>
            <Link className="link journal-link" to={`${match.url}/journal`} >Journal</Link>
            <Link className="link" to={`${match.url}/game_charts`} >Game Charts</Link>
            <Link className="game_rules-link link" to={`${match.url}/game_rules`} >Game Rules</Link>
        </div>
    )
}
