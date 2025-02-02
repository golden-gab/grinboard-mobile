import React from "react";
import { Navigate } from "react-router-dom";
import { AuthService } from "../services/auth.service";



const AuthGuard = ({ children ,role}) => {

  let logged = AuthService.isLogged();
  let TokenRole = 1

  if (logged) {
    let user = AuthService.getUser(); 
    TokenRole = user.role;
  } 
  if (!logged) {
    return <Navigate to={"/connexion"} />;
  }
  if(parseInt(role)  !== TokenRole){

    return <Navigate to={"/notauthorized"} />;
    
  }

  return children;
};



export default AuthGuard;
