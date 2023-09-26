import { DrawerContentComponentProps, createDrawerNavigator, DrawerContentScrollView } from '@react-navigation/drawer';
import StackNavigator from './StackNavigator';
import SettingsScreen from '../screens/SettingsScreen';
import { Image, View, useWindowDimensions } from 'react-native';
import { styles } from '../theme/appTheme';

const Drawer = createDrawerNavigator();

const  MenuLateral = () => {

    const { width } = useWindowDimensions();
    return (
        <Drawer.Navigator
        screenOptions={{
            drawerType: width >= 768 ? 'permanent' : 'front',
        }}
        drawerContent={(props)=><MenuInterno {...props}/>}
        >
            <Drawer.Screen name="StackNavigator" options={{title:"Home"}} component={StackNavigator} />
            <Drawer.Screen name="SettingsScreen" options={{title:"Settings"}} component={SettingsScreen} />
        </Drawer.Navigator>
    );
}

const MenuInterno = (props: DrawerContentComponentProps) =>{
    return(
        <DrawerContentScrollView>
            <View
                style={styles.avatarContainer}
            >
                <Image
                    source={{
                        uri: 'https://png.pngtree.com/png-vector/20210604/ourlarge/pngtree-gray-avatar-placeholder-png-image_3416697.jpg'
                    }}
                    style={styles.avatar}
                />
            </View>
        </DrawerContentScrollView>
    );
}

export default MenuLateral