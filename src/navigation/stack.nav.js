import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

import {Preloader, Home, Intro, Introduction, Entry} from "../screens";


const Stack = createStackNavigator();

const MyTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: 'rgb(0,64,226)',
        background: '#030303',
        card: '#030303',
        text: 'rgba(255,255,255,1)',
        border: '#030303',
        notification: '#ffffff'
    },
    dark: false
};

function AuthStack() {
    return (
        <Stack.Navigator
            initialRouteName={'HomeScreen'}
            screenOptions={{
                headerShown: false,
                gestureEnabled: true
            }}
        >
            <Stack.Screen
                name="HomeScreen"
                component={Intro}
                options={{
                    gestureEnabled: false
                }}
            />
            <Stack.Screen
                name="EntryScreen"
                component={Entry}
                options={{
                    gestureEnabled: false
                }}
            />
            <Stack.Screen
                name="Introduct"
                component={Introduction}
                options={{
                    gestureEnabled: false
                }}
            />
            <Stack.Screen
                name="PreloadScreen"
                component={Preloader}
                options={{
                    gestureEnabled: false
                }}
            />
        </Stack.Navigator>
    );
}

const StackNavigation = (props) => (
    <NavigationContainer theme={MyTheme}>
        <Stack.Navigator
                         initialRouteName={props.initialRouteName}
                         screenOptions={{
                             headerShown: false,
                             gestureEnabled: false
                         }}
        >
            <Stack.Screen name="AuthStack" component={AuthStack} options={{}}
            />

        </Stack.Navigator>
    </NavigationContainer>
)

export default StackNavigation;
