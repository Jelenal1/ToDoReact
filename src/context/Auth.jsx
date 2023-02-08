import { onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState} from "react";
import { auth } from "../firebase";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        onAuthStateChanged(auth, () => {
            setCurrentUser(auth.currentUser);
        })
    }, []);

return (
<AuthContext.Provider value={{currentUser}}>
{children}
</AuthContext.Provider>
)



}