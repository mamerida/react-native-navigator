import { AuthState } from "./AuthContext";

type authActions = {
    type:'sing-in'
}

export const authReducer = (state:AuthState, action:authActions):AuthState =>{
    switch (action.type) {
        case 'sing-in' :
            return {
                ...state,
                isLoggendIn:true,
                userName:'no-user-name'
            }
            break;
    
        default:
            return state;
        break;
    }
}