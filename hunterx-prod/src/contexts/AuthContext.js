import React, { useContext, useState, useEffect } from 'react'
import { auth, db } from '../firebase'




const AuthContext = React.createContext()

export default AuthContext;

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)
  

    async function signup(email, password, displayName) {
      
        const userCredential = await auth.createUserWithEmailAndPassword(email, password);
        
         await userCredential.user.updateProfile({
            displayName: displayName
        })
        return userCredential;
    }

    function login(email, password){
        return auth.signInWithEmailAndPassword(email, password)
    }

    function logout(){
       return auth.signOut()
    }

    function resetPassword(email){
        return auth.sendPasswordResetEmail(email)
    }

    function updateEmail(email){
        return currentUser.updateEmail(email)
    }
    function updatePassword(password){
        return currentUser.updatePassword(password)
    }

    async function updateDisplayName(newDisplayName){
    
       await auth.currentUser.updateProfile({
            displayName: newDisplayName
        })
       await auth.currentUser.reload()
    }


    useEffect(() => auth.onAuthStateChanged(user => {
        
        if(!user){
            setLoading(false)
            return
        } 

        setCurrentUser(user) 
        setLoading(false)

    }), []);

    const value = {
        currentUser,
        loading,
        login,
        signup,
        logout,
        resetPassword,
        updateEmail,
        updatePassword,
        updateDisplayName
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}
