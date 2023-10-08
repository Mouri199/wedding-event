import { useContext } from "react";
import { AuthProvider } from "../Contributor/AuthContributor";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({children}) => {

    const{user,load} =useContext(AuthProvider);
    if(load){
        return <span className="loading loading-dots loading-lg"></span>
    }

    if(user){
        return children;
    }
    return <Navigate to="/signIn"></Navigate>
};

export default PrivateRoute;