import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Tab1Screen from '../screens/Tab1Screen';
import Tab2Screen from '../screens/Tab2Screen';
import Tab3Screen from '../screens/Tab3Screen';
import StackNavigator from './StackNavigator';
import { colores } from '../theme/appTheme';

const Tab = createBottomTabNavigator();

const Tabs = ()  => {
  return (
    <Tab.Navigator 
        screenOptions={{ 
            headerShown: false,
            tabBarActiveTintColor: colores.primary,
            tabBarStyle: {
              borderTopColor: colores.primary,
              borderTopWidth: 0, // para quitarle el borde a los tabs
              elevation: 0,
            },
        }}
        sceneContainerStyle={{
            backgroundColor: 'white',
        }}
    >
      <Tab.Screen name="Tab1Screen" component={Tab1Screen} />
      <Tab.Screen name="Tab2Screen" component={Tab2Screen} />
      <Tab.Screen name="StackNavigator" component={StackNavigator} />
    </Tab.Navigator>
  );
}

export default Tabs