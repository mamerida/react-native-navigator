import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { styles } from '../theme/appTheme'
import { useNavigation } from '@react-navigation/native'

const Pagina2Screen = () => {

  const navigator = useNavigation<any>();

  return (
    <View style={styles.marginGlobal}>
      <Text>Pagina2Screen</Text>
      <Button
        title='Navegar pagina 3'
        onPress={()=> navigator.navigate('Pagina3Screen')}
      />
    </View>
  )
}

export default Pagina2Screen
