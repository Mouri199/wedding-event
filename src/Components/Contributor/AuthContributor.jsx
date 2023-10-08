import { createContext, useState } from "react";
import PropTypes from 'prop-types';
import auth from "../../Firebase/Firebase.config";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export const AuthProvider= createContext(null);

const AuthContributor = ({children}) => {

    const[user,setUser] =useState(null);

    const createSignUpUser =(email,password) =>{
        return createUserWithEmailAndPassword (auth,email,password)
    }

    const providerInfo = {user,createSignUpUser}
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