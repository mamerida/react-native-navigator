import { AuthState } from "./AuthContext";

type authActions =
    {type:'sing-in'} |
    {type: 'changeIcon', payload: string } |
    {type: 'logout'}

export const authReducer = (state:AuthState, action:authActions):AuthState =>{
    switch (action.type) {
        case 'sing-in' :
            return {
                ...state,
                isLoggendIn:true,
                userName:'no-user-name'
            }
        case 'changeIcon':
            return{
                ...state,
                favoriteIcon: action.payload
            }
        case 'logout':
            return{
                isLoggendIn:false,
                favoriteIcon: undefined,
                userName:undefined
            }
        default:
            return state;
    }
}