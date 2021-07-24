import React  from "react";
import styled from "styled-components/native";
import Container from "../components/layouts/Container";
import Button from '../components/common/Button.js';
import LogoWrapper from '../components/layouts/LogoWrapper.js';




export default function Intro(props)  {


    return (
        <Background source = {require('../../assets/image/bd/bg1.png')}>
            <Container>
                <LogoWrapper/>
                <ButtonWrapper>
                    <Button  text={'    Войти    |'} icon='true' navigation={props.navigation} />

                </ButtonWrapper>
            </Container>
        </Background>
    )}

const Background = styled.ImageBackground`
    width: 100%;
    height: 100%;
    
`
const ButtonWrapper = styled.View`
    width: 100%;
    align-items: center;
    justify-content: center;
    margin-top: 130px;
    text-align: center;
    margin-left: 9px;
    font-size: 20px;
    font-weight: 800;
   
`
