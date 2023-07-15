import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import LoginScreen from '../Containers/LoginScreen/LoginScreen';
import ProfileScreen from '../Containers/ProfileScreen/ProfileScreen';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
    return (
        <NavigationContainer>
            <Tab.Navigator initialRouteName="LoginScreen">
                <Tab.Screen name="LoginScreen" component={LoginScreen} />
                <Tab.Screen name="ProfileScreen" component={ProfileScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
