import React, {useState} from "react";
import {StatusBar} from "expo-status-bar";
import styled from "styled-components/native";
import CustomHeader from "../components/complex/header/index";
import Text from "../components/Text/Text";
import {Image, TouchableOpacity, View, ScrollView, Modal, StyleSheet} from "react-native";
import ImageIcon from "../../assets/Svg/ImageIcon";
import ImageIcon8 from "../../assets/Svg/ImageIcon8";
import ImageIcon6 from "../../assets/Svg/ImageIcon6";


export default function Home({navigation}) {
    const [data] = useState([
        {author: 'author**.@gmail.com', informatika: '', photo_url: '../../assets/image/utils/Shape_1.png'},
        {author: 'author**.@gmail.com', informatika: '', photo_url: '../../assets/image/utils/Shape_1.png'},
        {author: 'author**.@gmail.com', informatika: '', photo_url: '../../assets/image/utils/Shape_1.png'},
        {author: 'author**.@gmail.com', informatika: '', photo_url: '../../assets/image/utils/Shape_1.png'},

    ])
    const [modalVisible, setModalVisible] = useState(false);
    const [active, setActive] = useState(null);

    return (
        <Background
            source={require('../../assets/image/bd/bg_home.png')}
        >
            <StatusBar style="auto"/>
            <CustomHeader/>
            <ScrollView>
                <HomeWrapper>

                    <WrapperText>
                        <Text
                            text={'Новости'}
                            fontSize={'20px'}
                            fontWeight={500}
                            lineHeight={'30px'}
                            top={'10px'}
                        />
                        <Text
                            text={'ХОЧУ 400 ХОЧУ 4--'}
                            fontSize={'12px'}
                            fontWeight={500}
                            lineHeight={'18px'}
                            top={'21px'}
                        />
                    </WrapperText>
                    <ImageWrapper>
                        <Image style={{top: 47, left: 37}} source={require('../../assets/image/utils/Vector_(1).png')}/>
                    </ImageWrapper>


                </HomeWrapper>
                <ServicesWrapper>
                    <ServicesText>
                        <Text
                            text={'Услуги     '}
                            color={'white'}
                            fontSize={'20px'}
                            fontWeight={500}
                            lineHeight={'30px'}
                            textAlign={'left'}
                            top={'18px'}
                        />
                        <Text
                            text={'Услуги которые предоставляют учасники'}
                            color={'rgba(255, 255, 255, 0.31)'}
                            fontSize={'10px'}
                            fontWeight={500}
                            lineHeight={'15px'}
                            left={'26px'}
                        />
                    </ServicesText>

                    <MailingWrapper onPress={() => navigation.navigate('SubjectBottomTabs')}>
                        <Image source={require('../../assets/image/utils/Vector_00.png')}/>
                    </MailingWrapper>
                    <MailingText onPress={() => navigation.navigate('SubjectBottomTabs')}>
                        <Text
                            text={'Массовая рассылка'}
                            color={'rgba(255, 255, 255, 0.31)'}
                            fontSize={'9px'}
                            fontWeight={500}
                            lineHeight={'13px'}
                        />
                    </MailingText>
                    <PromotionWrapper>
                        <Image source={require('../../assets/image/utils/Vector_01.png')}/>
                    </PromotionWrapper>
                    <PromotionText>
                        <Text
                            text={'Продвижение'}
                            color={'rgba(255, 255, 255, 0.31)'}
                            fontSize={'9px'}
                            fontWeight={500}
                            lineHeight={'13px'}

                        />
                    </PromotionText>
                    <BitsWrapper onPress={() => navigation.navigate('BitsBottomTabs')}>
                        <Image source={require('../../assets/image/utils/Vector_02.png')}/>
                    </BitsWrapper>
                    <BitsText onPress={() => navigation.navigate('BitsBottomTabs')}>
                        <Text
                            text={'Биты'}
                            color={'rgba(255, 255, 255, 0.31)'}
                            fontSize={'9px'}
                            fontWeight={500}
                            lineHeight={'13px'}
                        />
                    </BitsText>
                    <RegistrationWrapper>
                        <Image source={require('../../assets/image/utils/Vector_03.png')}/>
                    </RegistrationWrapper>
                    <RegistrationText>
                        <Text
                            text={'Оформление'}
                            color={'rgba(255, 255, 255, 0.31)'}
                            fontSize={'9px'}
                            fontWeight={500}
                            lineHeight={'13px'}
                        />
                    </RegistrationText>
                    <StatWrapper>
                        <Image source={require('../../assets/image/utils/Vector_04.png')}/>
                    </StatWrapper>
                    <StatText>
                        <Text
                            text={'Статистика'}
                            color={'rgba(255, 255, 255, 0.31)'}
                            fontSize={'9px'}
                            fontWeight={500}
                            lineHeight={'13px'}
                        />
                    </StatText>
                    <AdvertisingWrapper>
                        <Image source={require('../../assets/image/utils/AD.png')}/>
                    </AdvertisingWrapper>
                    <AdvertisingText>
                        <Text
                            text={'Реклама'}
                            color={'rgba(255, 255, 255, 0.31)'}
                            fontSize={'9px'}
                            fontWeight={500}
                            lineHeight={'13px'}
                        />
                    </AdvertisingText>
                </ServicesWrapper>
                <LettersWrapper>
                    <Text
                        text={'Рассылки'}
                        fontSize={'20px'}
                        fontWeight={500}
                        lineHeight={'30px'}
                        textAlign={'left'}
                        left={'22px'}
                        top={'5px'}
                    />
                    {data.map((item, index) => {
                        return <TouchableOpacity onPress={() => setModalVisible(true)} key={index} style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            marginTop: 10,
                            left: 20
                        }}>
                            <Image source={require('../../assets/image/utils/Shape_1.png')} style={{marginRight: 30}}/>

                            <View style={{flexDirection: 'column', width: '60%'}}>


                                <Text
                                    text={'Autor '}
                                    color={'#2C2C2C'}
                                    fontSize={'14px'}
                                    fontWeight={400}
                                    lineHeight={'21px'}
                                    textAlign={'left'}
                                />
                                <Text
                                    text={item.author}
                                    color={'#2C2C2C'}
                                    fontSize={'14px'}
                                    fontWeight={400}
                                    lineHeight={'21px'}
                                    textAlign={'left'}

                                />
                                <TouchableOpacity >
                                    <Text
                                        text={'Донат'}
                                        color={'#949494'}
                                        fontSize={'14px'}
                                        fontWeight={400}
                                        lineHeight={'21px'}
                                        textAlign={'left'}

                                    />
                                </TouchableOpacity>

                            </View>
                            <TouchableOpacity onPress={() => {
                            }} style={{right: 25}}>
                                <ImageIcon8/>
                            </TouchableOpacity>
                        </TouchableOpacity>
                    })}
                </LettersWrapper>

            </ScrollView>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}

            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>

                        <WrapperModal>
                            <BackMod>
                            </BackMod>
                            <Text
                                text={'Топовый донат'}
                                color={'white'}
                                fontSize={'16px'}
                                fontWeight={500}
                                lineHeight={'24px'}
                                top={'10px'}
                            />
                            <TouchableIcon onPress={() => setModalVisible(false)}>
                                <ImageIcon6/>
                            </TouchableIcon>
                            <Text
                                text={'Выберите сумму доната'}
                                color={'#1DFF92'}
                                fontSize={'14px'}
                                fontWeight={600}
                                lineHeight={'19px'}
                                textAlign={'left'}
                                left={'33px'}
                            />

                            <TouchableOpacity
                                onPress={() => setActive(0) }

                                style={{
                                backgroundColor: active == 0 ? '#292929' : '#47935C',
                                alignItems: "center",
                                justifyContent: "center",
                                top: 15,
                                width: 82,
                                borderRadius: 5,
                                marginLeft: 32,
                                height: 32,
                            }}>
                                <Text
                                    text={'500'}
                                    color={'white'}
                                    fontSize={'16px'}
                                    fontWeight={500}
                                    lineHeight={'22px'}
                                />
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={() => setActive(1) }
                                style={{
                                backgroundColor: active == 1 ? '#292929' : '#47935C',
                                alignItems: "center",
                                justifyContent: "center",
                                width: 82,
                                borderRadius: 5,
                                marginLeft: 32,
                                height: 32,
                                left: 104,
                                bottom: 17
                            }}>
                                <Text
                                    text={'1000'}
                                    color={'white'}
                                    fontSize={'16px'}
                                    fontWeight={500}
                                    lineHeight={'22px'}
                                />
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => setActive(2) }
                                style={{
                                backgroundColor: active == 2 ? '#292929' : '#47935C',
                                alignItems: "center",
                                justifyContent: "center",
                                width: 82,
                                borderRadius: 5,
                                marginLeft: 32,
                                height: 32,
                                left: 208
                                ,
                                bottom: 49
                            }}>
                                <Text
                                    text={'100'}
                                    color={'white'}
                                    fontSize={'16px'}
                                    fontWeight={500}
                                    lineHeight={'22px'}
                                />
                            </TouchableOpacity>
                            <View style={{bottom: 40, width: 130}}>
                                <Text
                                    text={'Мой бит'}
                                    color={'white'}
                                    fontSize={'16px'}
                                    fontWeight={500}
                                    lineHeight={'24px'}
                                />
                            </View>
                            <InviteHeader>
                                <Text
                                    text={'Отправить'}
                                    color={'white'}
                                    fontSize={'13px'}
                                    fontWeight={600}
                                    lineHeight={'19px'}
                                />
                            </InviteHeader>
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
        height: 260,
        width: 350
    },
})

const Background = styled.ImageBackground`
    width: 100%;
    height: 100%;
`
const HomeWrapper = styled.View` 
    margin-top: 30px;
    height: 110px;
    width: 90%;
    margin-left: 22px;
    border-radius: 5px;
`
const WrapperText = styled.View` 
    align-items: flex-start;
    padding-left: 20px;
`
const ImageWrapper = styled.TouchableOpacity`
    background: black;
    width: 30%;
    height: 111px;
    bottom: 49px;
    left: 248px;
    border-radius: 5px;
`
const ServicesWrapper = styled.View`
    background: black;
    height: 270px;
    width: 90%;
    margin-left: 22px;
    bottom: 40px;
    margin-top: 20px;
`
const ServicesText = styled.View`
    background: black;
    padding-left: 22px;
`


const MailingWrapper = styled.TouchableOpacity`
     align-items: center;
     justify-content: center;
     background: #31CB94;
     width: 23%;
     height: 75px;
     border-radius: 5px;
     margin-top: 15px;
     margin-left: 20px;
`
const MailingText = styled.TouchableOpacity`
     width: 25%;
     margin-left: 17px;
     margin-top: 6px;
`
const PromotionWrapper = styled.TouchableOpacity`
     align-items: center;
     justify-content: center;
     background: black;
     width: 23%;
     height: 75px;
     border-radius: 5px;
     margin-left: 137px;
     bottom: 94px;
`
const PromotionText = styled.TouchableOpacity`
     width: 25%;
     margin-left: 135px;
     bottom: 89px;
`
const BitsWrapper = styled.TouchableOpacity`
     align-items: center;
     justify-content: center;
     background-color: black;
     width: 23%;
     height: 75px;
     border-radius: 5px;
     margin-left: 253px;
     bottom: 182px;
`
const BitsText = styled.TouchableOpacity`
     width: 20%;
     margin-left: 259px;
     bottom: 177px;

`
const RegistrationWrapper = styled.TouchableOpacity`
     align-items: center;
     justify-content: center;
     background-color: black;
     width: 23%;
     height: 75px;
     border-radius: 5px;
     margin-left: 20px;
     bottom: 166px;
     
`

const RegistrationText = styled.TouchableOpacity`
     width: 22%;
     margin-left: 20px;
     bottom: 164px;
`
const StatWrapper = styled.TouchableOpacity`
     align-items: center;
     justify-content: center;
     background-color: black;
     width: 23%;
     height: 75px;
     border-radius: 5px;
     bottom: 254px;
     margin-left: 137px;
`
const StatText = styled.TouchableOpacity`
    
     width: 23%;
     bottom: 252px;
     margin-left: 137px;
`
const AdvertisingWrapper = styled.TouchableOpacity`
     align-items: center;
     justify-content: center;
     background-color: black;
     width: 23%;
     height: 75px;
     border-radius: 5px;
     bottom: 342px;
     margin-left: 254px;
`
const AdvertisingText = styled.TouchableOpacity`
     width: 23%;
     bottom: 340px;
     margin-left: 254px;
`
const LettersWrapper = styled.View`
     background: black;
     bottom: 34px;
     width: 90%;
     margin-left: 22px;
     flex: 1;
`
const WrapperModal = styled.View`
     right: 12px;
`

const InviteHeader = styled.TouchableOpacity`
     background: #47935C;
     align-items: center;
     justify-content: center;
     margin-top: 20px;
     margin-left: 30px;
     height: 40px;
     width: 90%;
     padding-left: 120px;
     padding-right: 110px;
     border-radius: 5px;
`
const TouchableIcon = styled.TouchableOpacity`
     width: 16px;
     left: 300px;
     bottom: 10px;
`
const BackMod = styled.View`
     background: #47935C;
     flex: 0.4;
     border-radius: 5px;
     left: 13px;
`
