import { Button, StyleSheet, Text, Touchable, View } from 'react-native'
import React from 'react'
import { StackScreenProps } from '@react-navigation/stack'
import { styles } from '../theme/appTheme'
import { TouchableOpacity } from 'react-native-gesture-handler'

interface Props extends StackScreenProps<any, any>{}

const Pagina1Screen = ({ navigation }:Props) => {
  return (
    <View style={styles.marginGlobal}>
      <Text style={styles.title}>Pagina1Screen</Text>
      <Button
        title='Navegar pagina 2'
        onPress={()=> navigation.navigate("Pagina2Screen")}
      />
      
      <Text>Navegar con argumentos</Text>
      <View style={{flexDirection:"row"}}>
        <TouchableOpacity
          onPress={()=>navigation.navigate("PersonaScreen", {id:1, name: "Pedro"})}
          style={styles.botonGrande}
        >
          <Text style={styles.botonGrandeTexto}>Pedro</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            ...styles.botonGrande,
            backgroundColor:"#58566D" //destructuro y coloco el color que quiero
          }}
          onPress={()=>navigation.navigate("PersonaScreen", {id:2, name: "Mario"})}
        >
          <Text style={styles.botonGrandeTexto}>Mario</Text>
        </TouchableOpacity>
      </View>
      
    </View>
  )
}

export default Pagina1Screen
