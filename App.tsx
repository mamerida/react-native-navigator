import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
// import StackNavigator from './src/navigators/StackNavigator';
// import MenuLateralBasico from './src/navigators/MenuLateralBasico';
import MenuLateral from './src/navigators/MenuLateral';
// import {Tabs} from './src/navigators/Tabs';


const App = () => {
  return (
    <NavigationContainer>
      {/* <StackNavigator/> */}
      <MenuLateral/>
      {/* <Tabs/> */}
    </NavigationContainer>
  )
}

export default App
