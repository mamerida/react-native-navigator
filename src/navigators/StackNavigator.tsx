import { createStackNavigator } from '@react-navigation/stack';
import Pagina1Screen from '../screens/Pagina1Screen';
import Pagina2Screen from '../screens/Pagina2Screen';
import Pagina3Screen from '../screens/Pagina3Screen';
import PersonaScreen from '../screens/PersonaScreen';

/*
  Se crea este tipo en este lado para tener de manera mas rapida un
  pantallazo general de todo lo que va a recibir es Stack.Navigator
*/

export type RootStackParams = {
  Pagina1Screen: undefined, //cuando la pantalla no recibe nada por defecto es undefined
  Pagina2Screen: undefined,
  Pagina3Screen: undefined,
  PersonaScreen: {id:number,name:string}
}


/* Se parametriza el createStack navigator para asegurarme que los nombres 
  que recibe mi stack sean los que estan definidos en el tipo y no otros
*/

const Stack = createStackNavigator<RootStackParams>();

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
      <Stack.Screen name="PersonaScreen" options={{title:"Pagina Persona"}} component={PersonaScreen} />
    </Stack.Navigator>
  );
}

export default StackNavigator