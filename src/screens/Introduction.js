
import React from "react";
import styled from "styled-components/native";
import LogoWrapper from '../components/layouts/LogoWrapper.js';
import Button from '../components/common/Button.js';
import GestureRecognizer from "react-native-swipe-gestures";
import Text from '../components/Text/Text'



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
                    <Image width='250px' height='270px' source={require('../../assets/image/utils/art_ico_screen3.png')}/>
                </ImageWrapper>
            </CenterWrapper>
            <BottomWrapper>
                <InfoTextWrapper>

                    <Text
                        text={'Большая база для  рассылок битов'}
                        color={'white'}
                        fontSize={'36px'}
                        fontWeight={700}
                        lineHeight={'45px'}
                        textAlign={'left'}
                    />
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
    flex: 1;
    margin-top: 200;
`

const ImageWrapper = styled.View`
    align-items: center;
    justify-content: center;
    margin-top: 25px;
 
`
const Image = styled.Image`
    width: ${props => props.width || '292.51px'}; 
    height: ${props => props.height || '302px'}; 
`
const InfoTextWrapper = styled.View`
 bottom: 30px;
    padding-left: 30px;
    
`
