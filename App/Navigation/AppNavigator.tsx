import * as React from 'react';

import { Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import appImages from '../Themes/appImages';

import LoginScreen from '../Containers/LoginScreen/LoginScreen';
import ProfileScreen from '../Containers/ProfileScreen/ProfileScreen';
import SignUpScreen from '../Containers/SignUpScreen/SingUpScreen';
import ForgetPasswordScreen from '../Containers/ForgetPasswordScreen/ForgetPasswordScreen';
import WelcomeScreen from '../Containers/WelcomeScreen/WelcomeScreen';
import HomeScreen from '../Containers/HomeScreen/HomeScreen';
import TasksScreen from '../Containers/TasksScreen/TasksScreen';
import RankingScreen from '../Containers/RankingScreen/RankingScreen';

// import appStyles from '../Themes/appStyles';

const mainStack = createStackNavigator();
const StartStackScreen = () => (
    <mainStack.Navigator
        initialRouteName="WelcomeScreen"
        headerMode="float"
        screenOptions={{
            title: ' ',
            headerTransparent: true,
            headerTitleAlign: 'center',
            headerTitleStyle: { color: "white" },
            headerBackImage: () => (<Image source={appImages.backButton} style={{width: wp('5%'), height: hp('5%'), tintColor: 'white'}}/>),
        }}
    >
        <AppStack.Screen
            name="WelcomeScreen"
            component={WelcomeScreen}
            options={{ headerShown: false}}
        />
        <mainStack.Screen
                name="LoginScreen"
                component={LoginScreen}
        />
         <mainStack.Screen
                name="ForgetPasswordScreen"
                component={ForgetPasswordScreen}
        />
         <mainStack.Screen
                name="SignUpScreen"
                component={SignUpScreen}
        />
    </mainStack.Navigator>
);

const AppStack = createStackNavigator();
const AppStackScreen = () => (
    <AppStack.Navigator
        initialRouteName="HomeScreen"
        screenOptions={{
            title: ' ',
            headerTransparent: true,
            headerTitleAlign: 'center',
            headerTitleStyle: { color: "white" , marginLeft: wp('-17%'), marginTop: hp('1%'), fontFamily: 'Metropolis-Regular' },
            headerBackImage: () => (<Image source={appImages.backButton} style={{width: wp('5%'), height: hp('5%'), tintColor: 'white'}}/>),
        }}
    >  
        <AppStack.Screen
            name="HomeScreen"
            component={HomeScreen}
            options={{ headerShown: false }}
        />
        <AppStack.Screen
            name="TasksScreen"
            component={TasksScreen}
            options={{ title: "Tarefas"}}
        />
        <AppStack.Screen
            name="RankingScreen"
            component={RankingScreen}
            options={{ title: "Ranking"}}
        />
    </AppStack.Navigator>
);

const RootStack = createStackNavigator();
export default function AppNavigator(loggedIn: boolean) {
    return (
        <NavigationContainer>
            <RootStack.Navigator headerMode={'none'}>
            {loggedIn ? (
                    <RootStack.Screen name={'App'} component={AppStackScreen} />
                ) : (
                    <RootStack.Screen name={'main'} component={StartStackScreen} />
                )}
            </RootStack.Navigator>
        </NavigationContainer>
    );
}