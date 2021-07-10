import { Text } from 'react-native';
import React from "react";
import styled from "styled-components/native";
import LogoWrapper from '../components/layouts/LogoWrapper.js';
import Button from '../components/common/Button.js';




export default function Preloader( ) {
    return (
        <Background source = {require('../../assets/image/bd/bg4.png')}>
            <TopWrapper>
                <LogoWrapper width='36px' height='43px'/>
            </TopWrapper>
            <CenterWrapper>
                <ImageWrapper>
                    <Image width='225px' height='306px' source={require('../../assets/image/utils/art4.png')}/>
                </ImageWrapper>
            </CenterWrapper>
            <BottomWrapper>
                <InfoTextWrapper>
                    <InfoText>
                        Полностью
                    </InfoText>
                    <InText>
                        Бесплатно
                    </InText>
                </InfoTextWrapper>
            </BottomWrapper>
        </Background>
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

const ButtonWrapper = styled.View`
    align-items: center;
    justify-content: center;
`
const ImageWrapper = styled.View`
    align-items: center;
    justify-content: center;
 
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
    font-size: 40px;
    color: white;
    line-height: 40px;
    padding-left: 10;
`
const InText = styled.Text`
    text-align: left;
    font-weight: bold;
    font-size: 40px;
    color: white;
    line-height: 40px;
    background: #48D6A3;
    border-radius: 5px;
    width: 65%;
    padding-left: 10;
    padding-top: 10;
    border-radius: 5px;
    padding-right: 10;
`
