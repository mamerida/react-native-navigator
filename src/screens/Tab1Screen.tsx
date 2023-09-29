import { View, Text } from 'react-native'
import React from 'react'
import { styles } from '../theme/appTheme'
import Icon from 'react-native-vector-icons/Ionicons';

const Tab1Screen = () => {

  return (
    <View style={styles.marginGlobal}>
      <Text style={styles.title}>Tab1Screen</Text>
      <Icon name="airplane-outline" size={30} color="#900" />
    </View>
  )
}

export default Tab1Screen