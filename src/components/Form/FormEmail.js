import React from "react";
import styled from "styled-components/native";
import {View,TextInput} from 'react-native'
import {Formik} from "formik";


export default function FormEmail({}) {
    return (
        <View>
            <Formik initialValues={{name: ''}} onSubmit={(values) => {
                console.log(values)
            }}>
                {(props) => (

                    <View>
                        <FormNameWrapper>
                            <TextInput value={props.values.name} color='white'  onChangeText={props.handleChange('name')}/>
                        </FormNameWrapper>
                    </View>
                )}
            </Formik>

        </View>
    )
}
const FormNameWrapper = styled.View`
   background: black;
   margin-left: 30px;
   top: 8px;
   padding-bottom: 5px;
   padding-top: 5px; 
   border-radius: 5px;
`
