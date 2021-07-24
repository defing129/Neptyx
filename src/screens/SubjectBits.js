import React, {useState} from "react";
import {StatusBar} from "expo-status-bar";
import styled from "styled-components/native";
import CustomHeader from "../components/complex/header/index";
import Text from "../components/Text/Text";
import {Modal, StyleSheet, View} from "react-native";
import ImageIcon7 from "../../assets/Svg/ImageIcon7";

export default function SubjectBits() {

    const [modalVisible, setModalVisible] = useState(false);
    const toggleModal = ({navigation}) => {
        setModalVisible(true);
        setTimeout( () => {
            setModalVisible(false);
        }, 2000);
    };

    const [color,setColor]=useState(null);
    const [active, setActive]= useState(null);

    return (
        <Background>
            <StatusBar style="auto"/>
            <CustomHeader/>
            <LetterWrapper>
                <Text
                    text={'Массовая рассылка'}
                    color={'white'}
                    fontSize={'20px'}
                    fontWeight={500}
                    lineHeight={'30px'}
                    textAlign={'left'}
                />
            </LetterWrapper>
            <SubjectWrapper>
                <Text
                    text={'Выберите критерии'}
                    color={'#8F8F8F'}
                    fontSize={'16px'}
                    fontWeight={500}
                    lineHeight={'24px'}
                    textAlign={'left'}
                />
            </SubjectWrapper>
            <Wrapper>
                <RusWrapper onPress={() => setColor(0)}>
                          <Text
                        text={'Российские'}
                        color={ color == 0 ? '#fff' : 'rgba(255, 255, 255, 0.22)'}
                        fontSize={'16px'}
                        fontWeight={400}
                        lineHeight={'24px'}
                    />
                </RusWrapper>
                <ForeignWrapper onPress={() => setColor(1)} >
                    <Text
                        text={'Зарубежные'}
                        color={ color == 1 ? '#fff' : 'rgba(255, 255, 255, 0.22)'}
                        fontSize={'16px'}
                        fontWeight={400}
                        lineHeight={'24px'}/>
                </ForeignWrapper>
                <IndWrapper  onPress={() => setColor(2)}>
                    <Text
                        text={'Индия'}
                        color={ color == 2 ? '#fff' : 'rgba(255, 255, 255, 0.22)'}
                        fontSize={'16px'}
                        fontWeight={400}
                        lineHeight={'24px'}
                    />

                </IndWrapper>
            </Wrapper>
            <SubjectHeader>
                <Text
                    text={'Выберите тематику'}
                    color={'#8F8F8F'}
                    fontSize={'16px'}
                    fontWeight={500}
                    lineHeight={'24px'}
                    textAlign={'left'}
                />
            </SubjectHeader>

            <ObjectWrapper>
                <PopWrapper onPress={() => setActive(0)}>
                    <Text
                        text={'POP'}
                        color={ active == 0 ? '#fff' : 'rgba(255, 255, 255, 0.22)'}
                        fontSize={'16px'}
                        fontWeight={400}
                        lineHeight={'24px'}
                    />
                </PopWrapper>
                <Pop2Wrapper onPress={() => setActive(1)}>
                    <Text
                        text={'POP'}
                        color={ active == 1 ? '#fff' : 'rgba(255, 255, 255, 0.22)'}
                        fontSize={'16px'}
                        fontWeight={400}
                        lineHeight={'24px'}
                    />
                </Pop2Wrapper>
                <KickWrapper onPress={() => setActive(2)}>
                    <Text
                        text={'KICK START'}
                        color={ active == 2 ? '#fff' : 'rgba(255, 255, 255, 0.22)'}
                        fontSize={'16px'}
                        fontWeight={400}
                        lineHeight={'24px'}
                    />
                </KickWrapper>
                <Kick2Wrapper onPress={() => setActive(3)}>
                    <Text
                        text={'KICK START'}
                        color={ active == 3 ? '#fff' : 'rgba(255, 255, 255, 0.22)'}
                        fontSize={'16px'}
                        fontWeight={400}
                        lineHeight={'24px'}
                    />
                </Kick2Wrapper>
                <RapWrapper onPress={() => setActive(4)}>
                    <Text
                        text={'RAP'}
                        color={ active == 4 ? '#fff' : 'rgba(255, 255, 255, 0.22)'}
                        fontSize={'16px'}
                        fontWeight={400}
                        lineHeight={'24px'}
                    />
                </RapWrapper>
                <EndWrapper onPress={() => setActive(5)}>
                    <Text
                        text={'ХОЧУ 400'}
                        color={ active == 5 ? '#fff' : 'rgba(255, 255, 255, 0.22)'}
                        fontSize={'16px'}
                        fontWeight={400}
                        lineHeight={'24px'}
                    />
                </EndWrapper>
            </ObjectWrapper>
            <LastWrapper>
            <MailingWrapper>
                <Text
                    text={'Выбрано из базы                                                Стоимость'}
                    color={'white'}
                    fontSize={'12px'}
                    fontWeight={500}
                    lineHeight={'16px'}

                />
                <Text
                text={'1 249 285 чел               💎300'}
                fontSize={'23px'}
                fontWeight={'bold'}
                lineHeight={'23px'}
                top={'10px'}
                textAlign={'left'}
                left={'46px'}
                />
            </MailingWrapper>
            <ButWrapper onPress={() => toggleModal(true)}>
                <Text

                    text={'Начать рассылку         '}
                    icon={'true'}
                    color={'white'}
                    fontSize={'18px'}
                    fontWeight={700}
                    lineHeight={'27px'}

                />
            </ButWrapper>
            </LastWrapper>

            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}

            >
                <View  style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <WrapperModal>
                            <View style={{paddingLeft: 150, paddingTop: 60}}>
                            <ImageIcon7 />
                            </View>
                            <Text
                                text={'Рассылка отправлена'}
                                color={'#47935C'}
                                fontSize={'16px'}
                                fontWeight={800}
                                lineHeight={'24px'}
                                left={'13px'}
                                top={'21px'}
                            />

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
    background-color: black;
`
const LetterWrapper = styled.View`
    margin-top: 35px;
    padding-left: 38px;
`
const SubjectWrapper = styled.View`
    padding-left: 38px;
    margin-top: 7px;
`
const Wrapper = styled.View`
    height: 60px;
`
const RusWrapper = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    height: 38px;
    top: 10px;
    width: 28%;
    border: 1px solid rgba(255, 255, 255, 0.22);
    border-radius: 5px;    
    margin-left: 35px;

`
const ForeignWrapper = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    height: 38px;
    bottom: 28px;
    width: 28%;
    border: 1px solid rgba(255, 255, 255, 0.22);
    border-radius: 5px; 
    margin-left: 150px;   
`
const IndWrapper = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    height: 38px;
    width: 28%;
    border: 1px solid rgba(255, 255, 255, 0.22);
    border-radius: 5px;    
    left: 265px;
    bottom: 66px;
`

const SubjectHeader = styled.View`
    bottom: 58px;
    padding-left: 38px;
    margin-top:60px;

   
`
const ObjectWrapper = styled.View`
    padding-top: 52px;
    bottom: 52px;
    height: 110px;
 `
const PopWrapper = styled.TouchableOpacity`
    width: 28%;
    border: 1px solid rgba(255, 255, 255, 0.22);
    border-radius: 5px;    
    height: 38px;
    align-items: center;
    justify-content: center;
    bottom: 50px;
    margin-left: 36px;
`
const Pop2Wrapper = styled.TouchableOpacity`
    width: 28%;
    border: 1px solid rgba(255, 255, 255, 0.22);
    border-radius: 5px;    
    height: 38px;
    align-items: center;
    justify-content: center;
    margin-left: 36px;
    bottom: 40px;
`
const KickWrapper = styled.TouchableOpacity`
    width: 28%;
    border: 1px solid rgba(255, 255, 255, 0.22);
    border-radius: 5px;    
    height: 38px;
    align-items: center;
    justify-content: center;
    margin-left: 151px;
    bottom: 126px;
`
const Kick2Wrapper = styled.TouchableOpacity`
    width: 28%;
    border: 1px solid rgba(255, 255, 255, 0.22);
    border-radius: 5px;    
    height: 38px;
    align-items: center;
    justify-content: center;
    margin-left: 151px;
    bottom: 116px;
`

const RapWrapper = styled.TouchableOpacity`
    width: 17%;
    border: 1px solid rgba(255, 255, 255, 0.22);
    border-radius: 5px;    
    height: 38px;
    align-items: center;
    justify-content: center;
    margin-left: 267px;
    bottom: 202px;
`
const EndWrapper = styled.TouchableOpacity`
    width: 28%;
    border: 1px solid rgba(255, 255, 255, 0.22);
    border-radius: 5px;    
    height: 38px;
    align-items: center;
    justify-content: center;
    margin-left: 267px;
    bottom: 192px;
`
const MailingWrapper = styled.View`
    right: 8px;
`
const ButWrapper = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    width: 89%;
    height: 48px;
    border-radius: 5px;
    background-color: #47935C;
    margin-left: 35px;
    top: 23px;
    
`
const LastWrapper = styled.View `
    height: 140px;
    bottom: 52px;
`
const WrapperModal = styled.View `
    background: #47935C;
    flex: 0.02;
    width: 100%;
    border-radius: 5px;
`

