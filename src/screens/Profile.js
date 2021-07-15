import React from "react";
import {StatusBar} from "expo-status-bar";
import styled from "styled-components/native";
import Text from '../components/Text/Text'
import ProfileHeader from "../components/Profile";



export default function Profile( ) {
    return (
        <Background
            source = {require('../../assets/image/bd/bg_home.png')}
        >
            <StatusBar style="auto" />
            <ProfileHeader />
            <ProfileWrapper>
                    <Text
                        text={'Пригласить друга'}
                        color={'white'}
                        fontSize={'14px'}
                        fontWeight={600}
                        lineHeight={'19px'}

                    />
            </ProfileWrapper>
            <TextWrapper>
                <Text
                    text={'Мой профиль'}
                    color={'white'}
                    fontSize={'20px'}
                    fontWeight={500}
                    lineHeight={'45px'}
                    textAlign={'left'}
                />
            </TextWrapper>


        </Background>

    );
}

const Background = styled.ImageBackground`
    width: 100%;
    height: 100%;
`
const ProfileWrapper = styled.TouchableOpacity` 
    align-items: center;
    justify-content: center; 
    bottom: 38px;
    background-color:  green;
    padding-top: 8px;
    padding-bottom: 8px;
    margin-left: 25px;
    margin-right: 25px;
    border-radius: 5px;

`
const TextWrapper =  styled.View`
 padding-left: 48px;
 bottom: 10px;
`

