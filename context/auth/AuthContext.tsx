import { createContext } from 'react';
import { IUser } from '../../interfaces';


interface ContextProps {
    isLoggedIn: boolean;
    user? : IUser;
    logout: () => void;
    loginUser: (email: string, password: string) => Promise<boolean>; 
    registerUser: (name: string, email: string, password: string) => Promise<{ hasError: boolean; message?: string | undefined; }>
}


export const AuthContext = createContext({} as ContextProps );