import { Text } from 'react-native';
import React from "react";
import styled from "styled-components/native";
import LogoWrapper from '../components/layouts/LogoWrapper.js';
import Button from '../components/common/Button.js';
import GestureRecognizer from "react-native-swipe-gestures";




export default function Introduction(props) {

    return (
        <GestureRecognizer

            onSwipeUp={(state) => {
                console.log('tut')
                props.navigation.navigate('PreloadScreen')
            }}
            style={{
                flex: 1,
            }}
        >
        <Background source = {require('../../assets/image/bd/bg3.png')}>
            <TopWrapper>
                <LogoWrapper width='36px' height='43px'/>
            </TopWrapper>
            <CenterWrapper>
                <ImageWrapper>
                    <Image width='260px' height='280px' source={require('../../assets/image/utils/art_ico_screen3.png')}/>
                </ImageWrapper>
            </CenterWrapper>
            <BottomWrapper>
                <InfoTextWrapper>
                    <InfoText>
                    Большая база{"\n"}для рассылок битов
                    </InfoText>
                </InfoTextWrapper>
            </BottomWrapper>
        </Background>
        </GestureRecognizer>
    )}

const Background = styled.ImageBackground`
    width: 100%;
    height: 100%;
`
const TopWrapper = styled.View`
    flex: 2;
`
const CenterWrapper = styled.View`
    flex: 3;
`
const BottomWrapper = styled.View`
    flex: 2;
`

const ImageWrapper = styled.View`
    align-items: center;
    justify-content: center;
    margin-top: 30px;
 
`
const Image = styled.Image`
    width: ${props => props.width || '292.51px'}; 
    height: ${props => props.height || '302px'}; 
`
const InfoTextWrapper = styled.View`
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 50px 20px;
`
const InfoText = styled.Text`
    text-align: left;
    font-weight: bold;
    font-size: 34px;
    color: white;
    line-height: 40px;
    left: 8px;
`
