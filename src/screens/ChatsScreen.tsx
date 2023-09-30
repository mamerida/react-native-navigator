import { View, Text, Button } from 'react-native'
import React, { useContext } from 'react'
import { styles } from '../theme/appTheme'
import { AuthContext } from '../context/AuthContext'

const ChatsScreen = () => {

  const {authState, logout} = useContext(AuthContext)

  return (
    <View style={styles.marginGlobal}>
      <Text style={styles.title}>ChatsScreen</Text>
      {
        authState.isLoggendIn &&
        <Button
          title='Log Out'
          onPress={logout}
        />
      }
    </View>
  )
}

export default ChatsScreen