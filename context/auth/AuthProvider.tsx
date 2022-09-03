import { FC, useReducer } from "react";
import { IUser } from "../../interfaces";
import { AuthContext, AuthReducer } from "./";
import tesloApi from '../../api/tesloApi';
import Cookies from "js-cookie";
import axios from "axios";

export interface AuthState {
    isLoggedIn: boolean;
    user?: IUser;
}

const Auth_INITIAL_STATE: AuthState = {
    isLoggedIn: false,
  user:undefined
};

export const AuthProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(AuthReducer, Auth_INITIAL_STATE);
  

  const loginUser = async (email:string,password:string):Promise<boolean>=>{
    try {
      const{data} = await tesloApi.post('/user/login',{email,password});
      const { token, user } = data;
      Cookies.set('token',token);
      dispatch({type:'[Auth] - Login',payload:user})
      return true;

    } catch (error) {
      return false;
    }
  }

  const registerUser = async( name: string, email: string, password: string ): Promise<{hasError: boolean; message?: string}> => {
    try {
        const { data } = await tesloApi.post('/user/register', { name, email, password });
        const { token, user } = data;
        Cookies.set('token', token );
        dispatch({ type: '[Auth] - Login', payload: user });
        return {
            hasError: false
        }

    } catch (error) {
        if ( axios.isAxiosError(error) ) {
            return {
                hasError: true,
                message: 'Error axios'
            }
        }

        return {
            hasError: true,
            message: 'No se pudo crear el usuario - intente de nuevo'
        }
    }
}


  return (
    <AuthContext.Provider
      value={{
        ...state,
        loginUser,
        registerUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
