import 'react-native-gesture-handler';
import React from 'react';
import StackNavigation from "./src/navigation/stack.nav";


export default function App() {
  return (
      <StackNavigation initialRouteName={'HomeScreen'}/>
  );
}

