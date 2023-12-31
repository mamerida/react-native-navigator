import { View, Text, Button } from 'react-native'
import React, { useContext } from 'react'
import { styles } from '../theme/appTheme'
import { AuthContext } from '../context/AuthContext'

const ContactsScreen = () => {

  const {singIn ,authState} = useContext(AuthContext)


  return (
    <View style={styles.marginGlobal}>
      <Text style={styles.title}>ContactsScreen</Text>
      {!authState.isLoggendIn && 
          <Button
            title='Sing In'
            onPress={singIn}
          />
      }
    </View>
  )
}

export default ContactsScreen