import React, {useState} from "react";
import {StatusBar} from "expo-status-bar";
import {Modal, ScrollView, StyleSheet, TouchableOpacity, View} from 'react-native'
import styled from "styled-components/native";
import CustomHeader from "../components/complex/header/index";
import Text from '../components/Text/Text'
import {Image} from "react-native";
import ImageIcon from "../../assets/Svg/ImageIcon";
import ImageIcon2 from "../../assets/Svg/ImageIcon2";
import ImageIcon6 from "../../assets/Svg/ImageIcon6";




export default function History( ) {
    const [data] = useState( [
        {author: 'author**.@gmail.com', informatika: '' , photo_url: '../../assets/image/utils/Shape_1.png'},
        {author: 'author**.@gmail.com', informatika: '' , photo_url: '../../assets/image/utils/Shape_1.png'},
        {author: 'author**.@gmail.com', informatika: '' , photo_url: '../../assets/image/utils/Shape_1.png'},
        {author: 'author**.@gmail.com', informatika: '' , photo_url: '../../assets/image/utils/Shape_1.png'},
        {author: 'author**.@gmail.com', informatika: '' , photo_url: '../../assets/image/utils/Shape_1.png'},
        {author: 'author**.@gmail.com', informatika: '' , photo_url: '../../assets/image/utils/Shape_1.png'},
        {author: 'author**.@gmail.com', informatika: '' , photo_url: '../../assets/image/utils/Shape_1.png'},
        {author: 'author**.@gmail.com', informatika: '' , photo_url: '../../assets/image/utils/Shape_1.png'},
        {author: 'author**.@gmail.com', informatika: '' , photo_url: '../../assets/image/utils/Shape_1.png'},
    ])
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <Background
            source = {require('../../assets/image/bd/bg_home.png')}
        >
            <StatusBar style="auto" />
            <CustomHeader />
            <ImageWrapper>
               <ImageIcon2 />
            </ImageWrapper>
            <ScrollView>
            <HistoryWrapper>
                <WrapperText>
            <Text
                text={'История'}
                color={'white'}
                fontSize={'20px'}
                fontWeight={500}
                lineHeight={'45px'}
                textAlign={'left'}
            />
                </WrapperText>
                {data.map((item, index) => {
                    return <TouchableOpacity onPress={() => setModalVisible(true)} key={index} style={{flexDirection: 'row',alignItems: 'center' , marginTop: 10, right: 20 }}>
                        <Image source={require( '../../assets/image/utils/Shape_1.png')} style={{marginRight: 30}} />

                        <View style={{flexDirection: 'column', width: '60%'}}>


                        <Text
                            text={'Autor '}
                            color={'#2C2C2C'}
                            fontSize={'14px'}
                            fontWeight={400}
                            lineHeight={'21px'}
                            textAlign={'left'}
                            left={'0px'}
                        />
                        <Text
                            text={item.author}
                            color={'#2C2C2C'}
                            fontSize={'14px'}
                            fontWeight={400}
                            lineHeight={'21px'}
                            textAlign={'left'}

                        />
                        <Text
                            text={'Informatika'}
                            color={'#949494'}
                            fontSize={'14px'}
                            fontWeight={400}
                            lineHeight={'21px'}
                            textAlign={'left'}

                        />

                        </View>
                        <TouchableOpacity>
                        <ImageIcon />
                        </TouchableOpacity>
                    </TouchableOpacity>
                })}
            </HistoryWrapper>
            </ScrollView>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}

            >
                <View  style={styles.centeredView}>
                    <View style={styles.modalView}>

                        <WrapperModal>
                            <Text
                                text={'Отслеживание письма'}
                                color={'white'}
                                fontSize={'16px'}
                                fontWeight={500}
                                lineHeight={'24px'}
                                textAlign={'left'}
                                top={'15px'}

                            />

                            <TouchableIcon  onPress={() => setModalVisible(false)} >
                                <ImageIcon6   />
                            </TouchableIcon>
                            <Image source={require( '../../assets/image/utils/Shape_1.png')} style={{marginTop: 30}} />

                                <View style={{flexDirection: 'column', width: 220, alignItems: "flex-start", left: 70, bottom: 62 }}>
                                    <Text
                                        text={'Autor '}
                                        color={'#2C2C2C'}
                                        fontSize={'14px'}
                                        fontWeight={400}
                                        lineHeight={'21px'}
                                    />
                                    <Text
                                        text={'author**.@gmail.com'}
                                        color={'#2C2C2C'}
                                        fontSize={'14px'}
                                        fontWeight={400}
                                        lineHeight={'21px'}
                                    />
                                    <Text
                                        text={'Informatika'}
                                        color={'#949494'}
                                        fontSize={'14px'}
                                        fontWeight={400}
                                        lineHeight={'21px'}
                                    />

                                </View>
                        </WrapperModal>
                    </View>
                </View>
            </Modal>
        </Background>

    );
}
const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: 'rgba(0,0,0, .4)'
    },
    modalView: {
        margin: 120,
        backgroundColor: "black",
        alignItems: "center",
        height: 220,
        width: 350

    },
})

const Background = styled.ImageBackground`
    width: 100%;
    height: 100%;
`

const HistoryWrapper = styled.View `
    background: black;
    flex: 1;
    padding-left: 48px;
    padding-top: 5px;
    width: 90%;
    margin-left: 20px;
`
const ImageWrapper = styled.TouchableOpacity `
    width: 6%;
    margin-left: 335px;
    bottom: 40px
`
const WrapperText = styled.View `
    right: 20px;
`
const WrapperModal = styled.View `
    margin-right: 90px;
    margin-top: 2px;
`
const TouchableIcon = styled.TouchableOpacity `
    width: 16px;
    bottom: 4px;
    left: 240px;
`
