import React, {useState} from "react";
import {StatusBar} from "expo-status-bar";
import styled from "styled-components/native";
import CustomHeader from "../components/complex/header/index";
import Text from '../components/Text/Text'
import {Image, ScrollView, TouchableOpacity, View} from "react-native";
import ImageIcon5 from "../../assets/Svg/ImageIcon5";



export default function Fans( ) {

    const [fns] = useState([
        {name1: 'ХОЧУ 400', name2: 'Данил Кузнецов', name3: '+500' },
        {name1: 'ХОЧУ 400', name2: 'Данил Кузнецов', name3: '+500' },
        {name1: 'ХОЧУ 400', name2: 'Данил Кузнецов', name3: '+500' },
        {name1: 'ХОЧУ 400', name2: 'Данил Кузнецов', name3: '+500' },
        {name1: 'ХОЧУ 400', name2: 'Данил Кузнецов', name3: '+500' },
        {name1: 'ХОЧУ 400', name2: 'Данил Кузнецов', name3: '+500' },
        {name1: 'ХОЧУ 400', name2: 'Данил Кузнецов', name3: '+500' },
        {name1: 'ХОЧУ 400', name2: 'Данил Кузнецов', name3: '+500' },
        {name1: 'ХОЧУ 400', name2: 'Данил Кузнецов', name3: '+500' },

    ])


    return (
        <Background
            source = {require('../../assets/image/bd/bg_home.png')}
        >
            <StatusBar style="auto" />
            <CustomHeader />
            <ScrollView>
            <BitsWrapper>
                <WrapperText>
                <Text
                    text={'Мои фанаты'}
                    color={'white'}
                    fontSize={'20px'}
                    fontWeight={500}
                    lineHeight={'30px'}
                    textAlign={'left'}
                />
                </WrapperText>
                {fns.map((item, index) => {
                return <TouchableOpacity key={index} style={{flexDirection: 'row',alignItems: 'center', justifyContent: 'center', marginTop: 10, right: 7 }}>
                    <Image source={require( '../../assets/image/utils/Rectangle_(1).png')} style={{marginRight: 30, height: 65, width: 65}}  />

                    <View style={{flexDirection: 'column', width: '60%', right: 15}}>


                        <Text
                            text={item.name1}
                            color={'#E5E5E5'}
                            fontSize={'18px'}
                            fontWeight={'bold'}
                            lineHeight={'25px'}
                            textAlign={'left'}

                        />
                        <Text
                            text={item.name2}
                            color={'#BCBCBC'}
                            fontSize={'16px'}
                            fontWeight={500}
                            lineHeight={'22px'}
                            textAlign={'left'}
                            top={'7px'}

                        />

                    </View>
                    <Image3Wrapper>
                        <Text
                            text={item.name3}
                            color={'white'}
                            fontSize={'16px'}
                            fontWeight={500}
                            lineHeight={'22px'}
                            textAlign={'left'}


                        />
                    </Image3Wrapper>
                    <Image4Wrapper>
                        <ImageIcon5 />
                    </Image4Wrapper>
                </TouchableOpacity>
            })}

            </BitsWrapper>
            </ScrollView>
        </Background>

    );
}

const Background = styled.ImageBackground`
    width: 100%;
    height: 100%;
`
const BitsWrapper = styled.View `
    background: black;
    flex: 1;
    padding-left: 48px;
    padding-top: 40px;
    width: 96%;
    margin-left: 7px;
`
const WrapperText = styled.View `
     right: 31px; 
`

const Image3Wrapper = styled.TouchableOpacity `  
     align-items: center;
     justify-content: center;
     background: #47935C;
     right: 56px;
     width: 22%;
     border-radius: 5px;
`
const Image4Wrapper = styled.TouchableOpacity `
     right: 36px;
 
`
