import React from "react";
import {StatusBar} from "expo-status-bar";
import styled from "styled-components/native";
import CustomHeader from "../components/complex/header/index";
import NewsHeader from "../components/Home/news/index";
import ServHeader from "../components/Home/servies/index";
import MenuHeader from "../components/Home/menu/index";



export default function Home( ) {
    return (
        <Background
            source = {require('../../assets/image/bd/bg_home.png')}
        >
            <StatusBar style="auto" />
            <CustomHeader/>
            <NewsHeader/>
            <ServHeader />
            <MenuHeader />
        </Background>

    );
}

const Background = styled.ImageBackground`
    width: 100%;
    height: 100%;
`
