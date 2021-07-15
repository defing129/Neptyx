import React from "react";
import {StatusBar} from "expo-status-bar";
import styled from "styled-components/native";
import CustomHeader from "../components/complex/header/index";
import NewsHeader from "../components/Home/news/index";
import ServHeader from "../components/Home/servies/index";
import Text from '../components/Text/Text'



export default function Bits( ) {
    return (
        <Background
            source = {require('../../assets/image/bd/bg_home.png')}
        >
            <StatusBar style="auto" />
            <CustomHeader />
            <BitsWrapper>
                <Text
                    text={'Мои биты'}
                    color={'white'}
                    fontSize={'20px'}
                    fontWeight={500}
                    lineHeight={'30px'}
                    textAlign={'left'}
                />
            </BitsWrapper>

        </Background>

    );
}

const Background = styled.ImageBackground`
    width: 100%;
    height: 100%;
`
const BitsWrapper = styled.View `
 padding-left: 48px
 padding-top: 30px
`
