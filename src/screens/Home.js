import React from "react";
import {StatusBar} from "expo-status-bar";
import styled from "styled-components/native";
import CustomHeader from "../components/complex/header/index";
import NewsHeader from "../components/Home/news/index";
import ServHeader from "../components/Home/servies/index";
import MenuHeader from "../components/Home/menu/index";
import BottomTabs from '../navigation/stack.nav'
import Text from "../components/Text/Text";



export default function Home( ) {
    return (
        <Background
            source = {require('../../assets/image/bd/bg_home.png')}
        >
            <StatusBar style="auto" />
            <CustomHeader />
            <HomeWrapper>
                <Text
                    text={'Новости'}
                    color={'white'}
                    fontSize={'20px'}
                    fontWeight={500}
                    lineHeight={'45px'}
                    textAlign={'left'}

                />
                <Text
                    text={'ХОЧУ 400 ХОЧУ 4--'}
                    color={'white'}
                    fontSize={'12px'}
                    fontWeight={500}
                    lineHeight={'18px'}
                    textAlign={'left'}
                />
            </HomeWrapper>
            <ServWrapper>
            <Text
                text={'Услуги'}
                color={'white'}
                fontSize={'20px'}
                fontWeight={500}
                lineHeight={'18px'}
                textAlign={'left'}
                top={'20px'}
            />
            <Text
                text={'Услуги которые предоставляют учасники'}
                color={'rgba(255, 255, 255, 0.31)'}
                fontSize={'10px'}
                fontWeight={500}
                lineHeight={'18px'}
                left={'22px'}
            />
            </ServWrapper>
        </Background>

    );
}

const Background = styled.ImageBackground`
    width: 100%;
    height: 100%;
`
const HomeWrapper = styled.View`
    padding-left: 48px
    padding-top: 30px
`
const ServWrapper = styled.View`
    padding-left: 48px
    padding-top:  40px
`
