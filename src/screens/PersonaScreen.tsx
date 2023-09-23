import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { styles } from '../theme/appTheme'
import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParams } from '../navigators/StackNavigator'

// interface RouteParams {
//     id: string,
//     name: string
// } forma rapida de aplicar interfaces

/*
    Para poder importar el type que no defini en el stack y usarlo en la ruta 
    debo parametrizar el stackScreenProps en el primero de los argumentos y le defino
    dentro de mi stack de tipos cual es que el quiero que utilice
*/

interface Props extends StackScreenProps<RootStackParams,'PersonaScreen'>{}

const PersonaScreen = ({ route, navigation }: Props) => {

    // const params = route.params as RouteParams; // forma rapida de aplicar interfaces


    useEffect(() => {
        navigation.setOptions({
        title:route.params.name    
    })
    }, [])
    
    return (
        <View style={styles.marginGlobal}>
        <Text style={styles.title}>PersonaScreen</Text>
        </View>
    )
}

export default PersonaScreen