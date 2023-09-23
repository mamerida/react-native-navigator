import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import { styles } from '../theme/appTheme'

interface Props extends StackScreenProps<any, any>{}

const Pagina1Screen = ({ navigation }:Props) => {
  return (
    <View style={styles.marginGlobal}>
      <Text>Pagina1Screen</Text>
      <Button
        title='Navegar pagina 2'
        onPress={()=> navigation.navigate("Pagina2Screen")}
      />
    </View>
  )
}

export default Pagina1Screen
