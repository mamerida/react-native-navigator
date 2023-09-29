import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Tab1Screen from '../screens/Tab1Screen';
import StackNavigator from './StackNavigator';
import { colores } from '../theme/appTheme';
import { Platform, Text } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import TopTapNavigator from './TopTapNavigation';
import Icon from 'react-native-vector-icons/Ionicons';



export const Tabs = () =>{

    //diferencio entre tabs de android y de ios
    return Platform.OS === "ios" ?
        <TabsIOS/>
        :
        <TabsAndroid/>
}

const TabsAndroids= createMaterialBottomTabNavigator();

const TabsAndroid = () => {
    return (
      <TabsAndroids.Navigator
        sceneAnimationEnabled
        activeColor="black"
        inactiveColor="#FFFFFF"
        barStyle={{backgroundColor: colores.primary}}
        screenOptions={({route}) => ({
            tabBarStyle:{
                borderTopColor:colores.primary,
                borderTopWidth: 0,
                elevation:0
            },
            tabBarIcon:({color, focused})=>{
                let iconName : string = '';
                switch(route.name){
                case 'Tab1Screen':
                    iconName = 'airplane-outline';
                    break;
                case 'TopTapNavigator':
                    iconName = 'american-football-outline';
                    break;
                case 'StackNavigator':
                    iconName = 'american-football-outline';
                    break;
                }
                return(
                  <Icon name={iconName} size={20} color={color} />
                )}
        })}
        
    >
        <TabsAndroids.Screen name="Tab1Screen" options={{title:'Tab1'}} component={Tab1Screen} />
        <TabsAndroids.Screen name="TopTapNavigator" options={{title:'Tab2'}}  component={TopTapNavigator} />
        <TabsAndroids.Screen name="StackNavigator" options={{title:'Tab3'}}  component={StackNavigator} />
      </TabsAndroids.Navigator>
    );
  }



const bottonTubIOS = createBottomTabNavigator();

const TabsIOS = ()  => {
  return (
    <bottonTubIOS.Navigator 
    screenOptions={({route}) => ({
        tabBarActiveTintColor:colores.primary,
        tabBarStyle:{
          borderTopColor:colores.primary,
          borderTopWidth: 0,
          elevation:0
        },
        tabBarLabelStyle:{
          fontSize:15
        },
        tabBarIcon:({color, focused, size})=>{
          let iconName : string = '';
          switch(route.name){
            case 'Tab1Screen':
              iconName = 'T1';
              break;
            case 'Tab2Screen':
              iconName = 'T2';
              break;
            case 'StackNavigator':
              iconName = 'ST';
              break;
          }
          return(
            <Icon name="airplane-outline" size={30} color={color} />
          )}
        })}
        sceneContainerStyle={{
            backgroundColor: 'white',
        }}
    >
      {/* configuracion para cada opcion por separado */}
      {/* <Tab.Screen name="Tab1Screen" options={{title:'Tab1', tabBarIcon:()=><Text>T1</Text>}} component={Tab1Screen} /> */}
      <bottonTubIOS.Screen name="Tab1Screen" options={{title:'Tab1'}} component={Tab1Screen} />
      <bottonTubIOS.Screen name="TopTapNavigator" options={{title:'Tab2'}}  component={TopTapNavigator} />
      <bottonTubIOS.Screen name="StackNavigator" options={{title:'Tab3'}}  component={StackNavigator} />
    </bottonTubIOS.Navigator>
  );
}