import { View, Text } from 'react-native'
import React from 'react'
import { styles } from '../theme/appTheme'
import TouchableIcon from '../components/TouchableIcon';

const Tab1Screen = () => {

  return (
    <View style={styles.marginGlobal}>
      <Text style={styles.title}>Tab1Screen</Text>
      <Text>
        <TouchableIcon name="airplane-outline"/>
        <TouchableIcon name="bag-handle-outline"/>
        <TouchableIcon name="cafe-outline"/>
        <TouchableIcon name="bonfire-outline"/>
        <TouchableIcon name="brush-outline"/>
      </Text>
    </View>
  )
}

export default Tab1Screen