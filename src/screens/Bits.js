import React, {useState} from "react";
import {StatusBar} from "expo-status-bar";
import styled from "styled-components/native";
import CustomHeader from "../components/complex/header/index";
import Text from '../components/Text/Text'
import {Image, ScrollView, TouchableOpacity, View} from "react-native";
import ImageIcon3 from "../../assets/Svg/ImageIcon3";
import ImageIcon4 from "../../assets/Svg/ImageIcon4";



export default function Bits( ) {

    const [btc] = useState([
        {name1: 'ХОЧУ 400', name2: 'Данил Кузнецов' },
        {name1: 'ХОЧУ 400', name2: 'Данил Кузнецов' },
        {name1: 'ХОЧУ 400', name2: 'Данил Кузнецов' },
        {name1: 'ХОЧУ 400', name2: 'Данил Кузнецов' },
        {name1: 'ХОЧУ 400', name2: 'Данил Кузнецов' },
        {name1: 'ХОЧУ 400', name2: 'Данил Кузнецов' },
        {name1: 'ХОЧУ 400', name2: 'Данил Кузнецов' },
        {name1: 'ХОЧУ 400', name2: 'Данил Кузнецов' },
        {name1: 'ХОЧУ 400', name2: 'Данил Кузнецов' },
        {name1: 'ХОЧУ 400', name2: 'Данил Кузнецов' },
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
                    text={'Мои биты'}
                    color={'white'}
                    fontSize={'20px'}
                    fontWeight={500}
                    lineHeight={'30px'}
                    textAlign={'left'}
                />
                </WrapperText>
                {btc.map((item, index) => {
                return <TouchableOpacity key={index} style={{flexDirection: 'row',alignItems: 'center', justifyContent: 'center', marginTop: 10, right: 20 }}>
                    <Image source={require( '../../assets/image/utils/Rectangle_(1).png')} style={{marginRight: 30}} />

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
                    <TouchableOpacity style={{right: 40}}>
                        <ImageIcon3 />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ right: 19}}>
                        <ImageIcon4 />
                    </TouchableOpacity>
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
    width: 90%;
    margin-left: 20px;
`
const WrapperText = styled.View `
     right: 31px; 
`
