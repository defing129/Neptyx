import React from "react";
import styled from "styled-components/native";
import Container from "../../layouts/Container"


export default function CustomHeader( ) {
    return (
        <Header>
            <Container>
                <IconHeader
                    source = {require('../../../../assets/image/utils/logo.png')}/>

            </Container>
        </Header>
    );
}

const Header = styled.View`
   align-items: center;
   justify-content: center;
    height: 100px;
    padding-top: 40;
    margin-bottom: 17px;
`
const IconHeader = styled.Image`
    width: 70px;  
    height: 90px;
   
`
const CountHeader = styled.Text`
    color: white;
     text-align: center;
`
