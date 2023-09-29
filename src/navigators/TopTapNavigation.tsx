import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ContactsScreen from '../screens/ContactsScreen';
import ChatsScreen from '../screens/ChatsScreen';
import AlbumScreen from '../screens/AlbumScreen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colores } from '../theme/appTheme';
import { Text } from 'react-native';


const Tab = createMaterialTopTabNavigator();

const TopTapNavigator = () => {

    const { top } = useSafeAreaInsets(); 
    
    return (
        <Tab.Navigator
            style={{
                paddingTop:top
            }}
            //change background color del cuerpo del componente
            sceneContainerStyle={{
                backgroundColor:'white'
            }}
            //cambio el color del press
            screenOptions={({route}) => ({
                tabBarPressColor:colores.primary,
                tabBarShowIcon:true,
                tabBarIndicatorStyle:{
                    backgroundColor:colores.primary,
                },
                tabBarStyle:{
                    borderTopWidth: 0,
                    elevation:0,
                    shadowColor:'transparent'
                },
                tabBarIcon:({color, focused})=>{
                  let iconName : string = '';
                  switch(route.name){
                    case 'ContactsScreen':
                      iconName = 'Co';
                      break;
                    case 'ChatsScreen':
                      iconName = 'Cl';
                      break;
                    case 'AlbumScreen':
                      iconName = 'Al';
                      break;
                  }
                  return(
                  <Text style={{color }}>
                    {iconName}
                  </Text>
                  )}
                })}
        >
            <Tab.Screen name="ContactsScreen" component={ContactsScreen} />
            <Tab.Screen name="ChatsScreen" component={ChatsScreen} />
            <Tab.Screen name="AlbumScreen" component={AlbumScreen} />
        </Tab.Navigator>
    );
}

export default TopTapNavigator
