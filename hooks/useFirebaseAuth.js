import { useEffect, useState } from "react";
import { auth } from "../firebase/clientApp";
import { signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword } from 'firebase/auth'
import { createUserData, getUserData } from "../firebase/utils";

const useFirebaseAuth = () => {
    const [authUser, setAuthUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const clear = () => {
        setAuthUser(null)
        setLoading(false)
    }

    const authStateChanged = async (authState) => {
        if (!authState) {
            setAuthUser(null)
            setLoading(false)
            return
        }

        setLoading(true)

        console.log(authState)

        getUserData(authState, data => {
            if (data) {
                setAuthUser(data)
            } else {
                const userData = {
                    name: authState.displayName | '',
                    email: authState.email,
                    photo: authState.photoURL | '',
                    role: 'user'
                }

                createUserData(authState.uid, userData, res => {
                    console.log(res)
                })
            }
            setLoading(false)
        })
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(authStateChanged)
        return () => unsubscribe()
    }, [])

    return {
        authUser,
        loading,
        signInWithEmailAndPassword: (email, password) => signInWithEmailAndPassword(auth, email, password),
        createUserWithEmailAndPassword: (email, password) => createUserWithEmailAndPassword(auth, email, password),
        signOut: () => signOut(auth).then(clear)
    };
}

export default useFirebaseAuth;