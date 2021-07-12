import React from "react";
import styled from "styled-components/native";
import LogoWrapper from '../components/layouts/LogoWrapper.js';
import Button from '../components/common/Button.js';
import GestureRecognizer from "react-native-swipe-gestures";
import Text from '../components/Text/Text'



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

                <Text
                    text={'Пропустить'}
                    color={'rgba(255, 255, 255, 0.32);'}
                    fontSize={'19px'}
                    fontWeight={500}
                    lineHeight={'19px'}

                />
            </BtnWrapper>
            <CenterWrapper>
                <ImageWrapper>
                    <Image width='320px' height='330px' source={require('../../assets/image/utils/art_ico_screen2.png')}/>
                </ImageWrapper>
            </CenterWrapper>
            <SwipeWrapper>
                <Text
                    text={'Свайпни вниз'}
                    color={'white'}
                    fontSize={'19px'}
                    fontWeight={500}
                    lineHeight={'26px'}
                    textAlign={'center'}
                    top={'160px'}
                />
            </SwipeWrapper>
            <IcoWrapper>
                <Image1 width='15px' height='21px' source={require('../../assets/image/utils/Swipe_ico.png')} />
            </IcoWrapper>
            <BottomWrapper>
                <InfoTextWrapper>

                    <Text
                        text={'Рассылайте биты исполнителям'}
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
    height: 46px;
    top: 50px;
    width: 55%;
    border: 1px solid rgba(255, 255, 255, 0.22);
    border-radius: 5px;    
`

const CenterWrapper = styled.View`
    flex: 3;
    top: 70px;
`
const ImageWrapper = styled.View`
    align-items: center;
    justify-content: center;
    top: 20px;

`
const SwipeWrapper = styled.View`
    top:155px;

`



const IcoWrapper = styled.View`
    align-items: center;
    justify-content: center;
    top: 161px ;
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
    bottom: 30px;
    padding-left: 30px;
   


`


