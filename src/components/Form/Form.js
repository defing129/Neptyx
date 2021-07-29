import React, {useState} from "react";
import styled from "styled-components/native";
import {View, TextInput, Modal, StyleSheet} from 'react-native'
import {Formik} from "formik";
import Text from "../Text/Text";
import ImageIcon6 from "../../../assets/Svg/ImageIcon6";
import FormEmail from "./FormEmail";

export default function Form({}) {

    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View>
            <Formik initialValues={{name: '', anons: '', email: ''}} onSubmit={(values) => {
                console.log(values)
            }}>
                {(props) => (

                    <View>
                        <FormNameWrapper>
                            <TextInput value={props.values.name} color='grey' placeholder='  Имя'
                                       placeholderTextColor='grey' onChangeText={props.handleChange('name')}/>
                        </FormNameWrapper>
                        <FormAnonsWrapper>
                            <TextInput value={props.values.anons} color='grey' placeholder='  Псевдоним'
                                       placeholderTextColor='grey' onChangeText={props.handleChange('anons')}/>
                        </FormAnonsWrapper>
                        <FormEmailWrapper>
                            <TextInput value={props.values.email} color='grey' placeholder='  Email'
                                       placeholderTextColor='grey' onChangeText={props.handleChange('email')}/>
                        </FormEmailWrapper>
                        <ButWrapper>
                            <Text
                                text={'Hatik'}
                                fontSize={'16px'}

                            />
                        </ButWrapper>
                        <SaveWrapper onPress={() => setModalVisible(true)}>
                            <Text
                                text={'Сохранить'}
                                fontSize={'16px'}
                                color={'rgba(255, 255, 255, 0.22)'}
                            />
                        </SaveWrapper>

                    </View>
                )}
            </Formik>
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
                                text={'Подтверждение почты'}
                                color={'white'}
                                fontSize={'16px'}
                                fontWeight={500}
                                lineHeight={'24px'}
                                textAlign={'left'}
                                left={'30px'}
                                top={'15px'}
                            />
                            <TouchableIcon  onPress={() => setModalVisible(false)} >
                                <ImageIcon6   />
                            </TouchableIcon>
                            <Text
                                text={'Введите код'}
                                color={'#1DFF92'}
                                fontSize={'14px'}
                                fontWeight={600}
                                lineHeight={'19px'}
                                textAlign={'left'}
                                left={'30px'}
                            />
                            <FormEmail  />
                            <InviteHeader>
                                <Text
                                    text={'Привязять'}
                                    color={'white'}
                                    fontSize={'12px'}
                                    fontWeight={600}
                                    lineHeight={'19px'}
                                />

                            </InviteHeader>
                        </WrapperModal>

                    </View>
                </View>
            </Modal>
        </View>
    )
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
        height: 195,
        width: 350

    },
})

const FormNameWrapper = styled.View`
   margin-left: 140px;
   margin-right: 15px
   bottom: 14px;
   padding-bottom: 3px;
   padding-top: 3px; 
`
const FormAnonsWrapper = styled.View`
   margin-left: 140px;
   margin-right: 15px;
   padding-bottom: 3px;
   padding-top: 3px;
   bottom: 7px;
`
const FormEmailWrapper = styled.View`
   margin-left: 140px;
   margin-right: 15px;
   padding-bottom: 3px;
   padding-top: 3px;
`
const ButWrapper = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    background: #47935C;
    margin-top: 10px;
    height: 35px;
    width: 30%;
    margin-left: 18px;
    border-radius: 5px;
 
`
const SaveWrapper = styled.TouchableOpacity`
    background: black;
    align-items: center;
    justify-content: center;
    height: 35px;
    width: 56%;
    border: 1px solid rgba(255, 255, 255, 0.22);
    border-radius: 5px;
    margin-left: 138px;
    bottom: 35px;
`
const WrapperModal = styled.View `
    margin-top: 2px;
    margin-right: 30px;
    
`

const InviteHeader = styled.TouchableOpacity `
    background: #47935C;
    align-items: center;
    justify-content: center;
    margin-top: 25px;
    margin-left: 30px;
    height: 42px;
    width: 93%;
    padding-left: 116px;
    padding-right: 116px;
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
     left: 10px;
     
`


