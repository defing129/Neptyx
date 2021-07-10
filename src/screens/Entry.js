import { Text } from 'react-native';
import React from "react";
import styled from "styled-components/native";
import LogoWrapper from '../components/layouts/LogoWrapper.js';
import Button from '../components/common/Button.js';
import GestureRecognizer from "react-native-swipe-gestures";




export default function Entry(props) {

    return (
        <GestureRecognizer

            onSwipeUp={(state) => {
                console.log('tut')
                props.navigation.navigate('Introduct')
            }}


            style={{
                flex: 1,
            }}
        >

        <Background source = {require('../../assets/image/bd/bg2.png')}>
            <TopWrapper>
                <LogoWrapper width='36px' height='43px'/>
            </TopWrapper>
            <BtnWrapper onPress={() => props.navigation.navigate('Introduct')}>
                <Text1>
                    Пропустить
                </Text1>
            </BtnWrapper>
            <CenterWrapper>
                <ImageWrapper>
                    <Image width='350px' height='360px' source={require('../../assets/image/utils/art_ico_screen2.png')}/>
                </ImageWrapper>
            </CenterWrapper>
            <SwipeWrapper>
                <SwipeText>
                    Свайпни вниз
                </SwipeText>
            </SwipeWrapper>
            <IcoWrapper>
                <Image1 width='12px' height='16px' source={require('../../assets/image/utils/Swipe_ico.png')} />
            </IcoWrapper>
            <BottomWrapper>
                <InfoTextWrapper>
                    <InfoText>
                  Рассылайте биты{'\n'}исполнителям
                    </InfoText>
                </InfoTextWrapper>
            </BottomWrapper>

        </Background>
        </GestureRecognizer>
    )}

const Background = styled.ImageBackground`
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
`
const TopWrapper = styled.View`
    flex: 1;
`
const BtnWrapper = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    color: white;
    height: 46;
    top: 30;
    width: 55%;
    border: 1px solid rgba(255, 255, 255, 0.22);
border-radius: 5px;    
`


const Text1 = styled.Text`
    text-align: left;
    font-weight: 500;
    font-size: 19px;
    color: rgba(255, 255, 255, 0.32);
    line-height: 19px;
  
`
const CenterWrapper = styled.View`
    flex: 3;
    top: 70px;
`
const ImageWrapper = styled.View`
    align-items: center;
    justify-content: center;

`
const SwipeWrapper = styled.View`


`
const SwipeText = styled.Text`
    text-align: center;
    font-weight: 500;
    font-size: 19px;
    color: white;
    line-height: 26px;
    top: 160px ;


`


const IcoWrapper = styled.View`
    align-items: center;
    justify-content: center;
    top: 165px ;
`
const Image1 = styled.Image`
    width: ${props => props.width || '292.51px'};
    height: ${props => props.height || '302px'};
`

const Image = styled.Image`
    width: ${props => props.width || '292.51px'};
    height: ${props => props.height || '302px'};

`


const BottomWrapper = styled.View`
    flex: 1;
    margin-top: 200px;

`
const InfoTextWrapper = styled.View`
    bottom: 30;
   


`
const InfoText = styled.Text`
    text-align: left;
    font-weight: 700;
    font-size: 38px;
    color: white;
    line-height: 45px;
    top: 15px ;

`

