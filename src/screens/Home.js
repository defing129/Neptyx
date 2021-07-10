import React from "react";

import {StatusBar} from "expo-status-bar";
import styled from "styled-components/native";
import CustomHeader from "../components/complex/header"
import Container from "../components/layouts/Container"


export default function Home( ) {
    return (

        <Background
            source = {require('../../assets/image/bd/bg1.png')}
        >
            <StatusBar style="auto" />
            <CustomHeader/>
            <MainView>
               <WrapperView>
                   <TouchView onPress={() => null}>
                       <Text>Войти</Text>
                   </TouchView>
                   <TouchView>
                       <VkIcon source={require('../../assets/image/utils/vk_icon.png')}/>
                   </TouchView>
               </WrapperView>
            </MainView>
        </Background>

    );
}

Home.defaultProps = {
    title: 'Главная'
}
const Background = styled.ImageBackground`
    width: 100%;
    height: 100%;
`
const Text = styled.Text`
   width: 70%;
    color: #000;
    background: transparent;
`
const WrapperView = styled.View`
    background: #fff;
  border-radius: 10;
    height: 50px;
    flex-direction: row;
    width: 180px;
    align-items: center;
    justify-content: center;
`
const TouchView = styled.TouchableOpacity`
    padding-left: 30;    
    flex: 2;
    background: transparent;
`
const VkIcon = styled.Image`
   width: 24;
   height: 14;  
`
const MainView = styled.View`
    margin-top: 60%;
    align-items: center;
    background: transparent;
    
`
