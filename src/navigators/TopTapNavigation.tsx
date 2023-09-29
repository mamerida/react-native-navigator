import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ContactsScreen from '../screens/ContactsScreen';
import ChatsScreen from '../screens/ChatsScreen';
import AlbumScreen from '../screens/AlbumScreen';

const Tab = createMaterialTopTabNavigator();

const TopTapNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="ContactsScreen" component={ContactsScreen} />
      <Tab.Screen name="ChatsScreen" component={ChatsScreen} />
      <Tab.Screen name="AlbumScreen" component={AlbumScreen} />
    </Tab.Navigator>
  );
}

export default TopTapNavigator