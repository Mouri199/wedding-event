import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import auth from "../../Firebase/Firebase.config";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup} from "firebase/auth";

export const AuthProvider= createContext(null);
const googleProvider = new GoogleAuthProvider()


const AuthContributor = ({children}) => {

    const[user,setUser] =useState(null);
    const [load,setLoad] = useState(true)


    const createSignUpUser =(email,password) =>{
        setLoad(true);
        return createUserWithEmailAndPassword (auth,email,password)
    }

    const createSignInUser =(email,password)=>{
        setLoad(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const signInWithGoogle = () => {
       setLoad(true)
        return signInWithPopup(auth,googleProvider)
    }

    const userSignOut = () =>{
        setLoad(true)
        return signOut(auth)
    }

    useEffect(() =>{

        const signOut = onAuthStateChanged(auth,presentUser =>{
           setUser(presentUser)
           console.log("oberofjeiofj" , presentUser);
           setLoad(false)
        });
        return() => {
            signOut()
        }

    },[])

    const providerInfo = {user,createSignUpUser,createSignInUser,signInWithGoogle, userSignOut,load}
    return (
        <AuthProvider.Provider value={providerInfo}>
            {children}
        </AuthProvider.Provider>
    );
};

export default AuthContributor;

AuthContributor.propTypes ={
    children:PropTypes.node
}