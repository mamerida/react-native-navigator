import { createStackNavigator } from '@react-navigation/stack';
import Pagina1Screen from '../screens/Pagina1Screen';
import Pagina2Screen from '../screens/Pagina2Screen';
import Pagina3Screen from '../screens/Pagina3Screen';

const Stack = createStackNavigator();

const  StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle:{
          elevation: 0, // delete header botton border in android
          shadowColor:'transparent'// delete header botton border in ios
        },
        cardStyle:{
          backgroundColor:'white'// background color de cada pagina
        }
      }}
    >
      {/* option is header title */}
      <Stack.Screen name="Pagina1Screen" options={{title:"Pagina 1"}} component={Pagina1Screen} />
      <Stack.Screen name="Pagina2Screen" options={{title:"Pagina 2"}} component={Pagina2Screen} />
      <Stack.Screen name="Pagina3Screen" options={{title:"Pagina 3"}} component={Pagina3Screen} />
    </Stack.Navigator>
  );
}

export default StackNavigator