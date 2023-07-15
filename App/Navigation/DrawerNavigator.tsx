import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import LoginScreen from '../Containers/LoginScreen/LoginScreen';
import ProfileScreen from '../Containers/ProfileScreen/ProfileScreen';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
    return (
        <NavigationContainer>
            <Drawer.Navigator initialRouteName="LoginScreen">
                <Drawer.Screen name="LoginScreen" component={LoginScreen} />
                <Drawer.Screen name="ProfileScreen" component={ProfileScreen} />
            </Drawer.Navigator>
        </NavigationContainer>
    );
}
