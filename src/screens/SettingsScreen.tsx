import { View, Text } from 'react-native'
import React, { useContext } from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { AuthContext } from '../context/AuthContext';

const SettingsScreen = () => {

  //hook que tiene los datos necesarios para mostrar el contenido 
  // de manera segura sin usar el safearea
  //pudiendo determinar mediante top , left, rigth o botton.
  const insets = useSafeAreaInsets();

  //genero el contexto y busco dentro de los contextos que tengo cual es 
  //el que quiero

  const {authState, singIn} = useContext(AuthContext)

  return (
    <View style={{marginTop:insets.top}}>
      <Text>SettingsScreen</Text>
      <Text>{JSON.stringify(authState, null, 4)}</Text>
    </View>
  )
}

export default SettingsScreen