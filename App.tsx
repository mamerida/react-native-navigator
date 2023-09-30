import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
// import StackNavigator from './src/navigators/StackNavigator';
// import MenuLateralBasico from './src/navigators/MenuLateralBasico';
import MenuLateral from './src/navigators/MenuLateral';
import {AuthProvider } from './src/context/AuthContext';
// import {Tabs} from './src/navigators/Tabs';


const App = () => {
  return ( 
    <NavigationContainer>
      <AppState>
          {/* <kNavigator/> */}
          <MenuLateral/>
          {/* <Tabs/> */}
      </AppState>
    </NavigationContainer>
  )
}

const AppState = ({children}: any) =>{
  return(
    <AuthProvider>
      {children}
    </AuthProvider>
  )
}

export default App
