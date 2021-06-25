import { db } from '../firebase'
import { useAuth } from './AuthContext'
import React, { useState, useEffect, useContext } from 'react'

const ProfileContext = React.createContext()  // React Database FireStore .DB

export default ProfileContext;

export function useProfile() {
    return useContext(ProfileContext)
}

export function ProfileProvider({ children }) {
    const { currentUser, loading: loadingUser } = useAuth()
    const [loading, setLoading] = useState(true)
    const [profileData, setProfileData] = useState()

    useEffect(() => {
        
       
        if (loadingUser){
            console.log(loadingUser, "Still initializing, do nothing")
            return; // still initializing, do nothing.
        }

        if(!currentUser){
            // no user signed in!
            console.log("No user signed in!")
            setProfileData(null);
            setLoading(false);
            return;
        }
        // user is logged in
        const profileRef = db.ref(`users/` + currentUser.uid + `/profile`);
        const listener = profileRef.on('value', snapshot => {
            if (!snapshot.exists()){
                // didn't find a profile for this user
                snapshot.ref
                    .set({ // <- this will refire this listener if successful with the below data. 
                        gameMaster: false,
                        editor: false,
                        displayName: currentUser.displayName,
                        email: currentUser.email,
                        emailVerified: currentUser.emailVerified,
                    })
                    .catch((error) => console.log("Failed to initialize default profile", error));
                return;
            }
            setProfileData(snapshot.val());
            setLoading(false)

        });
        return () => profileRef.off('value', listener); // cleans up the listener

    },[currentUser, loadingUser])


    const value={
        profileData,
        loading
    }

    return (
        <ProfileContext.Provider value={value}>
            {children}
        </ProfileContext.Provider>
    )
}
