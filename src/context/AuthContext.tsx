import React, { createContext, useReducer } from 'react'
import { authReducer } from './authReducer';

// Definir la funcion que va a contener el context
//por eso defino la interfaz

export interface AuthState{
    isLoggendIn:boolean,
    userName?:string,
    favoriteIcon?:string
}

//Estado inicial

export const AuthInitialState: AuthState = {
    isLoggendIn: false, // se coloca unicamente por estar obligatorio
    userName: undefined,
    favoriteIcon: undefined
}

//defino lo que el contexto le va a exponer a los hijso 

export interface AuthContextProps{
    authState: AuthState,
    singIn: () => void,

}

// Crear el contexto 

export const AuthContext = createContext({} as AuthContextProps);


//Componente que expone le estado

export const AuthProvider = ({children} :any) =>{

    const [authState, dispatch] = useReducer(authReducer,AuthInitialState)

    const singIn = () =>{
        dispatch({type: 'sing-in'})
    }

    return(
        //envuelvo los elementos hijos que van a ser proveeidos por mi contexto
        <AuthContext.Provider
            //como type el provider en la linea 28 tengo qeu pasarle un valor 
            // que tenga los tipos del AuthContextProps
            value={{
                authState,
                singIn
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}