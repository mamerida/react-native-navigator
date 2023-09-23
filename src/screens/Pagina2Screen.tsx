import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { styles } from '../theme/appTheme'
import { useNavigation } from '@react-navigation/native'

const Pagina2Screen = () => {

  const navigator = useNavigation<any>();

  useEffect(() => {
    navigator.setOptions({
      title: "Hola Mundo", // replace title put in StackNavigator
      headerBackTitle:"Atras" //change title in back button
    })
  
  }, [])
  

  return (
    <View style={styles.marginGlobal}>
      <Text style={styles.title}>Pagina2Screen</Text>
      <Button
        title='Navegar pagina 3'
        onPress={()=> navigator.navigate('Pagina3Screen')}
      />
    </View>
  )
}

export default Pagina2Screen
