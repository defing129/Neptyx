import React from "react";
import styled from "styled-components/native";
import LogoWrapper from '../components/layouts/LogoWrapper.js';
import Text from "../components/Text/Text";





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
                    <Text
                        text={'Полностью'}
                        color={'white'}
                        fontSize={'36px'}
                        fontWeight={700}
                        lineHeight={'45px'}
                        textAlign={'left'}
                        left={'15'}
                    />
                    <InfoText1>
                        <Text
                            text={'Бесплатно'}
                            color={'white'}
                            fontSize={'36px'}
                            fontWeight={700}
                            lineHeight={'45px'}
                            textAlign={'left'}
                        />
                    </InfoText1>
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

const ImageWrapper = styled.View`
    align-items: center;
    justify-content: center;
 
`
const Image = styled.Image`
    width: ${props => props.width || '292.51px'}; 
    height: ${props => props.height || '302px'}; 
`
const InfoTextWrapper = styled.View`
    bottom: 30px;
    padding-left: 25px;
    padding-top: 110px;
    
`
const InfoText1 = styled.View`
 
    justify-content: center;
    background: #48D6A3;
    border-radius: 5px;
    width: 65%;
    border-radius: 5px;
    padding-left: 15px;
    top: 5px;
`
