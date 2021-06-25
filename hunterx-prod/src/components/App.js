import React from "react"
import Signup from "./Signup"
import { AuthProvider } from "../contexts/AuthContext"
import { ProfileProvider } from "../contexts/ProfileContext"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Login from "./Login"
import PrivateRoute from './PrivateRoute'
import ForgotPassword from './ForgotPassword'
import UpdateProfile from "./UpdateProfile"
import Header from "./Header"
import './css/App.css'
import ProfileBar from './ProfileBar'
import { CharacterProvider } from "../contexts/CharacterContext"
import { JournalProvider } from "../contexts/JournalContext"

function App() {

  return (
    <div className="app-container box border-black">
      <Header></Header>
        <div>
          <Router>
            <AuthProvider>
              <ProfileProvider>
                <CharacterProvider>
                    <Switch>
                      <PrivateRoute path="/profile" component={ProfileBar} />
                      <PrivateRoute path="/update-profile" component={UpdateProfile} />
                      <Route path="/login" component={Login} />
                      <Route path="/signup" component={Signup} />
                      <Route path="/forgot-password" component={ForgotPassword} />
                    </Switch>
                </CharacterProvider>
              </ProfileProvider>
            </AuthProvider>
          </Router>
        </div>
    </div>
  ) 
}

export default App;
