import { View, Text } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const SettingsScreen = () => {

  //hook que tiene los datos necesarios para mostrar el contenido 
  // de manera segura sin usar el safearea
  //pudiendo determinar mediante top , left, rigth o botton.
  const insets = useSafeAreaInsets();

  return (
    <View style={{marginTop:insets.top}}>
      <Text>SettingsScreen</Text>
    </View>
  )
}

export default SettingsScreen