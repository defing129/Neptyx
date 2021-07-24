import React from 'react';
import { createStackNavigator} from '@react-navigation/stack';
import styled from "styled-components/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {Preloader, Home, Intro, Introduction, Entry, History, Profile, Bits, SubjectBits, Fans} from "../screens";
import ArrowIcon from "../../assets/Svg/Tabs/ArrowIcon";
import ArrowIcon2 from "../../assets/Svg/Tabs/ArrowIcon2";
import ArrowIcon3 from "../../assets/Svg/Tabs/ArrowIcon3";
import ArrowIcon4 from "../../assets/Svg/Tabs/ArrowIcon4";
import ArrowIcon5 from "../../assets/Svg/Tabs/ArrowIcon5";
import {TouchableOpacity} from "react-native";

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


 function BottomTabs({navigation}) {
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
                    tabBarIcon: () => (
                        <ArrowIcon color={'white'} />
                    )
                }}
            />
            <Tab.Screen
                name="  "
                component={Home}
                options={{
                    tabBarLabel: "",
                    tabBarIcon: ( ) => (
                        <TouchableOpacity onPress={() => navigation.navigate('HistoryBottomTabs')} style={{width: 120, height: 55, alignItems: "center", justifyContent: 'center'}} >
                        <ArrowIcon2 />
                        </TouchableOpacity>
                    )
                }}
            />
            <Tab.Screen
                name="   "
                component={Home}

                options={{
                    tabBarLabel: "",
                    tabBarIcon: ({focused}) => (
                        <TouchableOpacity onPress={()=> navigation.navigate('ProfileBottomTabs')} style={{width: 120, height: 55, alignItems: "center", justifyContent: 'center'}} >
                            <ArrowIcon3
                                resizeMode='contain'
                                style={{
                                    width: 25,
                                    height: 25,
                                    tintColor: focused ? '#e32f45' : '#748c94'
                            }}
                            />

                        </TouchableOpacity>
                    )
                }}
            />


        </Tab.Navigator>
    );
}



function HistoryBottomTabs ({navigation}) {
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
                name="  "
                component={History}
                options={{
                    tabBarLabel: "  ",
                    tabBarIcon: () => (
                        <TouchableOpacity onPress={() => navigation.navigate('BottomTabs')} style={{width: 120, height: 55, alignItems: "center", justifyContent: 'center'}}>
                      <ArrowIcon4 color={'white'} />
                        </TouchableOpacity>
                    )
                }}
            />
        </Tab.Navigator>
    );
}
function BitsBottomTabs ({navigation}) {
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
                    fontSize: 13,
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
                component={Bits}
                options={{
                    tabBarLabel: "  ",
                    tabBarIcon: ( {} ) => (
                        <TouchableOpacity onPress={() => navigation.navigate('BottomTabs' ) } style={{width: 120, height: 55, alignItems: "center", justifyContent: 'center',marginLeft : 200}} >
                            <ArrowIcon4 color={'white'}  />
                        </TouchableOpacity>
                    )
                }}
            />
            <Tab.Screen
                name=" "
                component={Bits}
                options={{

                    tabBarLabel: " ",
                    tabBarIcon: ( ) => (
                        <TouchableOpacity style={{left: 40}} >
                            <ArrowIcon5 color={'white'} />
                        </TouchableOpacity>
                    )
                }}
            />


        </Tab.Navigator>
    );
}
function ProfileBottomTabs({navigation}) {
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
                        <TouchableOpacity onPress={() => navigation.navigate('BottomTabs')} style={{width: 120, height: 55, alignItems: "center", justifyContent: 'center'}}>
                        <ArrowIcon />
                        </TouchableOpacity>
                    )
                }}
            />
            <Tab.Screen
                name=" "
                component={Profile}
                options={{
                    tabBarLabel: " ",
                    tabBarIcon: ( ) => (
                        <TouchableOpacity onPress={() => navigation.navigate('FansBottomTabs')} style={{width: 120, height: 55, alignItems: "center", justifyContent: 'center'}}>
                        <ArrowIcon2 />
                        </TouchableOpacity>
                    )
                }}
            />
            <Tab.Screen
                name="   "
                component={Profile}
                options={{
                    tabBarLabel: "   ",
                    tabBarIcon: ( ) => (
                       <ArrowIcon3 color={'white'}
                       />
                    )
                }}
            />


        </Tab.Navigator>
    );
}
function SubjectBottomTabs({navigation}) {
    return (
        <Tab.Navigator
            initialRouteName={'SubjectBits'}
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
                component={SubjectBits}
                options={{
                    tabBarLabel: "  ",
                    tabBarIcon: ( {}) => (
                        <TouchableOpacity  onPress={() => navigation.navigate(BottomTabs)} style={{width: 120, height: 55, alignItems: "center", justifyContent: 'center'}}>
                       <ArrowIcon4 color={'white'} />
                        </TouchableOpacity>
                    )
                }}
            />
        </Tab.Navigator>
    );
}

function FansBottomTabs ({navigation}) {
    return (
        <Tab.Navigator
            initialRouteName={'Fans'}
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
                component={Fans}
                options={{
                    tabBarLabel: "  ",
                    tabBarIcon: () => (
                        <TouchableOpacity onPress={() => navigation.navigate('ProfileBottomTabs')} style={{width: 120, height: 55, alignItems: "center", justifyContent: 'center'}}>
                            <ArrowIcon4 color={'white'} />
                        </TouchableOpacity>
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
            <Stack.Screen name="AuthStack" component={AuthStack} options={{}} />
       <Stack.Screen name="BottomTabs" component={BottomTabs} options={{}}/>
       <Stack.Screen name="HistoryBottomTabs" component={HistoryBottomTabs} options={{}}/>
       <Stack.Screen name="BitsBottomTabs" component={BitsBottomTabs} options={{}}/>
       <Stack.Screen name="ProfileBottomTabs" component={ProfileBottomTabs} options={{}}/>
       <Stack.Screen name="SubjectBottomTabs" component={SubjectBottomTabs} options={{}}/>
       <Stack.Screen name="FansBottomTabs" component={FansBottomTabs} options={{}}/>

        </Stack.Navigator>
    </NavigationContainer>
)


export default StackNavigation;

