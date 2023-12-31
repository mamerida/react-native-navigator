import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import { styles } from '../theme/appTheme'

interface Props extends StackScreenProps<any,any>{}

const Pagina3Screen = ({ navigation }:Props) => {
  return (
    <View>
      <Text style={styles.title}>Pagina3Screen</Text>
      <Button
        title='Regresar'
        onPress={()=> navigation.pop()}
      />
      <Button
        title='Navegar pagina 1'
        onPress={()=> navigation.popToTop()}
      />
    </View>
  )
}

export default Pagina3Screen
