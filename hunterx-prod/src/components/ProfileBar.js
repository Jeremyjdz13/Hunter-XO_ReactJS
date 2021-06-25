import React, { useState, useEffect } from 'react'
import { Alert } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import { Link, useHistory, useRouteMatch, Route, Switch} from 'react-router-dom'
import { db } from '../firebase'
import NavBar from './ProfileContainer/NavBar'
import CharacterCards from '../components/ProfileContainer/CharacterComponents/CharacterCards'
import GameCharts from './ProfileContainer/GameCharts'
import Journal from '../contexts/JournalContext'
import GameRules from '../contexts/GameRulesContext'
import { useProfile } from '../contexts/ProfileContext'
import GMDashboard from './ProfileContainer/GameMasterComponents/GMDashboard'

export default function ProfileBar() {
    const [error, setError] = useState("")
    const { logout, currentUser } = useAuth()
    const { profileData } = useProfile()
  
  
    const history = useHistory()

    async function handleLogout(){
        setError('')

        try{
            await logout()
            history.push('/login')
        } catch {
            setError('Failed to log out')
        }
    }

    function handleGMDisplay(){
        
        if(profileData?.gameMaster == false){
            console.log("not GM")
            return (
                <div>
                    Player
                </div>
            )
        }

        return (
            <div>
                GM
            </div>
        )
        
    }

    function handleGMProfileRoute(){
        if(profileData?.gameMaster == false){
            console.log("not GM")
            return;
        }

        return <Route path={`${match.path}/gmdashboard`} component={GMDashboard} />
    }
    
    const match = useRouteMatch()

    return (
       <>
            <div>
                <div className="cRow profilebar">
                    {error && <Alert variant="danger">{error}</Alert>}
                    <div className="">
                        <div ><strong>Profile:</strong> <span className="profile-name">{currentUser.displayName}</span></div>     
                        <div><strong>Email:</strong> <span className="profile-name">{currentUser.email}</span> </div> 
                    </div>
                    <div>
                        <NavBar />
                    </div>
                    <span>{handleGMDisplay()}</span>
                    <div className="profilebar-links">
                        <Link className="profile-link" to="/update-profile" >Update Profile</Link>
                        <Link className="profile-link" onClick={handleLogout}>Log Out</Link>
                    </div>
                </div>
                <div>
                    <Switch>
                        {handleGMProfileRoute()}
                        <Route path={`${match.path}/characters`} component={CharacterCards} />
                        <Route path={`${match.path}/journal`} component={Journal} />  
                        <Route path={`${match.path}/game_charts`} component={GameCharts} />
                        <Route path={`${match.path}/game_rules`} component={GameRules} />
                    </Switch>   
                </div>
            </div>
       </>
    )
}
