import React, {useState} from "react";
import {StatusBar} from "expo-status-bar";
import styled from "styled-components/native";
import Text from '../components/Text/Text'
import ProfileHeader from "../components/Profile";
import Form from "../components/Form/Form";
import {Image, ScrollView,StyleSheet, TouchableOpacity, View, Modal} from "react-native";
import ImageIcon6 from "../../assets/Svg/ImageIcon6";
import ImageIcon from "../../assets/Svg/ImageIcon";

export default function Profile() {
    const [prf] = useState([
        {name1: 'Владислав Хаткевич', name2: 'Ростов на дону', name3: '+30'},
        {name1: 'Владислав Хаткевич', name2: 'Ростов на дону', name3: '+30'},
        {name1: 'Владислав Хаткевич', name2: 'Ростов на дону', name3: '+30'},
        {name1: 'Владислав Хаткевич', name2: 'Ростов на дону', name3: '+30'},
        {name1: 'Владислав Хаткевич', name2: 'Ростов на дону', name3: '+30'},
        {name1: 'Владислав Хаткевич', name2: 'Ростов на дону', name3: '+30'},
        {name1: 'Владислав Хаткевич', name2: 'Ростов на дону', name3: '+30'},

    ])
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <Background
            source={require('../../assets/image/bd/bg_home.png')}
        >
            <StatusBar style="auto"/>
            <ProfileHeader/>

            <ProfileWrapper onPress={() => setModalVisible(true)}>
                <Text
                    text={'Пригласить друга'}
                    color={'white'}
                    fontSize={'14px'}
                    fontWeight={600}
                    lineHeight={'19px'}

                />
            </ProfileWrapper>
            <ScrollView>
            <BackWrapper>
                <TextWrapper>
                    <Text
                        text={'Мой профиль'}
                        color={'white'}
                        fontSize={'20px'}
                        fontWeight={500}
                        lineHeight={'45px'}
                        textAlign={'left'}
                    />
                </TextWrapper>

                <IconWrapper>

                    <Text
                        text={'💎 300 ' }
                        fontSize={'21px'}
                        fontWeight={600}
                        lineHeight={'29px'}
                        textAlign={'right'}
                    />

                </IconWrapper>

                <Form/>
                <WrapperImage>
                    <Image style={{height:  100, marginTop: 11}} source={require('../../assets/image/utils/image_2.png')} />
                    <Wrapper2Image >
                    <Image source={require('../../assets/image/utils/Vector_(20).png')} />
                    </Wrapper2Image>
                </WrapperImage>

            </BackWrapper>
            <InviteWrapper>

                <Text
                    text={'Приглашённые'}
                    fontSize={'20px'}
                    fontWeight={500}
                    lineHeight={'30px'}
                    textAlign={'left'}
                    left={'20px'}
                    top={'10px'}

                />
                <Image style={{left: 303, bottom: 8}} source={require('../../assets/image/utils/Cristall.png')} />

                {prf.map((item, index) => {
                    return <TouchableOpacity key={index} style={{flexDirection: 'row',alignItems: 'center', justifyContent: 'center', marginTop: 10, left: 20}}>
                        <Image source={require( '../../assets/image/utils/Shape_1.png')} style={{marginRight: 30}} />
                        <View style={{flexDirection: 'column', width: '60%', right: 20}}>

                            <Text
                                text={item.name1}
                                color={'white'}
                                fontSize={'14px'}
                                fontWeight={'500'}
                                lineHeight={'21px'}
                                textAlign={'left'}

                            />
                            <Text
                                text={item.name2}
                                color={'#BCBCBC'}
                                fontSize={'13px'}
                                fontWeight={300}
                                lineHeight={'19px'}
                                textAlign={'left'}


                            />
                        </View>
                        <EndWrapper>
                            <Text
                                text={item.name3}
                                color={'white'}
                                fontSize={'16px'}
                                fontWeight={600}
                                lineHeight={'24px'}
                                textAlign={'left'}


                            />
                        </EndWrapper>
                    </TouchableOpacity>

                })}
            </InviteWrapper>
            </ScrollView>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}

            >
                <View  style={styles.centeredView}>
                    <View style={styles.modalView}>

                        <WrapperModal>
                            <BackMod>
                            </BackMod>
                                <Text
                                    text={'Пригласить друга'}
                                    color={'white'}
                                    fontSize={'16px'}
                                    fontWeight={500}
                                    lineHeight={'24px'}
                                    top={'21px'}
                                />
                            <TouchableIcon  onPress={() => setModalVisible(false)} >
                                <ImageIcon6   />
                            </TouchableIcon>
                                <Text
                                    text={'Чтобы получить алмазы пригласите друга за каждого друга вы получаете 30 алмазов '}
                                    color={'#1DFF92'}
                                    fontSize={'14px'}
                                    fontWeight={600}
                                    lineHeight={'19px'}
                                    top={'12px'}
                                />
                                <InviteHeader>
                                    <Text
                                        text={'Пригласить'}
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
        height: 180,
        width: 350
    },
})
const Background = styled.ImageBackground`
    width: 100%;
    height: 100%;
`
const ProfileWrapper = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    bottom: 16px;
    background-color:  #47935C;
    padding-top: 8px;
    padding-bottom: 8px;
    margin-left: 25px;
    margin-right: 25px;
    border-radius: 5px;

`
const TextWrapper = styled.View`
    padding-left: 13px;

`
const IconWrapper = styled.View`
    bottom: 40px;
    padding-right: 20px;
`

const BackWrapper = styled.ImageBackground`
    background: black;
    padding-top: 10px;
    height: 240px;
    margin-left: 23px;
    margin-right: 23px;
`
const InviteWrapper = styled.View`
   flex: 1;
   background: black;
   margin-left: 23px;
   margin-right: 23px;
   top: 8px;
`
const WrapperImage = styled.View `
   margin-left: 10px;
   bottom: 195px;
   width: 33%;
   height: 101px;
 
`
const Wrapper2Image = styled.TouchableOpacity `
   margin-left: 42px;
   bottom: 70px;
   width: 31%;
`


const EndWrapper = styled.View `
    align-items: center;
    justify-content: center;
    width: 13%;
    height: 45px;
    right: 35px;
`
const WrapperModal = styled.View `
margin-top: 2px;
`

const InviteHeader = styled.TouchableOpacity `
background: #47935C;
align-items: center;
justify-content: center;
margin-top: 30px;
margin-left: 30px;
height: 40px;
width: 90%;
padding-left: 110px;
padding-right: 110px;
border-radius: 5px;
`
const TouchableIcon = styled.TouchableOpacity `
width: 16px;
left: 300px;
`
const BackMod = styled.View`
 background: #47935C;
 flex: 0.3;
 border-radius: 5px;
`

