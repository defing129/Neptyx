import React from 'react';
import { createStackNavigator} from '@react-navigation/stack';
import styled from "styled-components/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {Preloader, Home, Intro, Introduction, Entry, History, Profile, Bits} from "../screens";



const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

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
                component={Home}
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

 function BottomTabs({}) {
    return (
        <Tab.Navigator
            initialRouteName={'Dashboard'}
            activeColor="#616D78"
            inactiveColor="rgba(97, 109, 120, 0.6)"

            tabBarOptions={{
                showIcon: true,
                activeTintColor: '#283933',
                inactiveTintColor: '#BCC3CC',

                tabStyle: {
                    marginTop: 13,
                    height: 50
                },
                labelStyle: {
                    fontSize: 13
                },
                style: {
                    height: 86,
                    bottom: 0,
                    opacity: .5,
                    elevation: 0,
                    borderTopWidth: 0
                }

            }}
            shifting={false}
        >
            <Tab.Screen
                name=" "
                component={Home}
                options={{
                    tabBarLabel: "",
                    tabBarIcon: ( {color}) => (
                        <Image
                            source={require("../../assets/image/utils/Vector_(5).png")}
                            style={{ width: 26, height: 26 }}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="  "
                component={Home}
                options={{
                    tabBarLabel: "",
                    tabBarIcon: ( ) => (
                        <Image
                            source={require("../../assets/image/utils/Ellipse_(3).png")}
                            style={{ width: 66, height: 86 }}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="   "
                component={Home}
                options={{
                    tabBarLabel: "",
                    tabBarIcon: ( ) => (
                        <Image
                            source={require("../../assets/image/utils/Profile_(3).png")}
                            style={{ width: 26, height: 26 }}

                        />
                    )
                }}
            />


        </Tab.Navigator>
    );
}

const Image = styled.Image `
 
`


function HistoryBottomTabs () {
    return (
        <Tab.Navigator
            initialRouteName={'History'}
            activeColor="#616D78"
            inactiveColor="rgba(97, 109, 120, 0.6)"

            tabBarOptions={{
                showIcon: true,
                activeTintColor: '#283933',
                inactiveTintColor: '#BCC3CC',

                tabStyle: {
                    marginTop: 13,
                    height: 50
                },
                labelStyle: {
                    fontSize: 13
                },
                style: {
                    height: 86,
                    bottom: 0,
                    opacity: .5,
                    elevation: 0,
                    borderTopWidth: 0
                }

            }}
            shifting={false}
        >
            <Tab.Screen
                name=" "
                component={History}
                options={{
                    tabBarLabel: "",
                    tabBarIcon: ( {color}) => (
                        <Image
                            source={require("../../assets/image/utils/Ellipse_(1).png")}
                            style={{ width: 66, height: 86, color: 'white' }}
                        />
                    )
                }}
            />
        </Tab.Navigator>
    );


}
function BitsBottomTabs () {
    return (
        <Tab.Navigator
            initialRouteName={'Bits'}
            activeColor="#616D78"
            inactiveColor="rgba(97, 109, 120, 0.6)"

            tabBarOptions={{
                showIcon: true,
                activeTintColor: '#283933',
                inactiveTintColor: '#BCC3CC',

                tabStyle: {
                    marginTop: 13,
                    height: 50
                },
                labelStyle: {
                    fontSize: 13
                },
                style: {
                    height: 86,
                    bottom: 0,
                    opacity: .5,
                    elevation: 0,
                    borderTopWidth: 0
                }

            }}
            shifting={false}
        >
            <Tab.Screen
                name=" "
                component={Bits}
                options={{
                    tabBarLabel: "",
                    tabBarIcon: ({}) => (
                        <Image
                            source={require("../../assets/image/utils/Ellipse_(1).png")}
                            style={{ width: 66, height: 86, left: 97 }}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="   "
                component={Bits}
                options={{
                    tabBarLabel: "  ",
                    tabBarIcon: ({}) => (
                        <Image
                            source={require("../../assets/image/utils/Ellipse_(2).png")}
                            style={{ width: 26, height: 26, left: 55 }}
                        />
                    )
                }}
            />
        </Tab.Navigator>
    );
}
function ProfileBottomTabs({}) {
    return (
        <Tab.Navigator
            initialRouteName={'Profile'}
            activeColor="#616D78"
            inactiveColor="rgba(97, 109, 120, 0.6)"

            tabBarOptions={{
                showIcon: true,
                activeTintColor: '#283933',
                inactiveTintColor: '#BCC3CC',

                tabStyle: {
                    marginTop: 13,
                    height: 50
                },
                labelStyle: {
                    fontSize: 13
                },
                style: {
                    height: 86,
                    bottom: 0,
                    opacity: .5,
                    elevation: 0,
                    borderTopWidth: 0
                }

            }}
            shifting={false}
        >
            <Tab.Screen
                name="  "
                component={Profile}
                options={{
                    tabBarLabel: "  ",
                    tabBarIcon: ( {}) => (
                        <Image
                            source={require("../../assets/image/utils/Vector_(5).png")}
                            style={{ width: 26, height: 26 }}
                        />
                    )
                }}
            />
            <Tab.Screen
                name=" "
                component={Profile}
                options={{
                    tabBarLabel: " ",
                    tabBarIcon: ( ) => (
                        <Image
                            source={require("../../assets/image/utils/Ellipse_(3).png")}
                            style={{ width: 66, height: 86 }}
                        />
                    )
                }}
            />
            <Tab.Screen
                name="   "
                component={Profile}
                options={{
                    tabBarLabel: "   ",
                    tabBarIcon: ( ) => (
                        <Image
                            source={require("../../assets/image/utils/Profile_(3).png")}
                            style={{ width: 26, height: 26 }}

                        />
                    )
                }}
            />


        </Tab.Navigator>
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
            {/*<Stack.Screen name="AuthStack" component={AuthStack} options={{}}*/}
            <Stack.Screen name="MainStack" component={ProfileBottomTabs} options={{}}

            />

        </Stack.Navigator>
    </NavigationContainer>
)


export default StackNavigation;

