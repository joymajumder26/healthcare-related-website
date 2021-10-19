import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
// import Registration from "../Pages/Home/Registration/Registration";
import initializeAuthentication from './../Pages/Login/Firebase/firebase.init';

initializeAuthentication()

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setInLoading] = useState(true);
    // const {email,password}=Registration;


    const auth = getAuth();

    const signInUsingGoogle = () => {
        setInLoading(true);
        const googleProvider = new GoogleAuthProvider();

        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);
            })
            .finally(() => setInLoading(false));
    }

    //observe user state change
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({})
            }
            setInLoading(false)
        })
        return () => unsubscribed;
    }, [])
    const logOut = () => {
        setInLoading(true)
        signOut(auth)
            .then(() => {

            })
            .finally(() => setInLoading(false));
    }
    const processLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user.displayName);
                console.log(user);

            })
            .catch(error => {
                // setError(error.message);
            })
    }
    return {
        user,
        isLoading,
        processLogin,
        signInUsingGoogle,
        logOut
    }
}

export default useFirebase;