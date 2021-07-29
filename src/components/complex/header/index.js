import React from "react";
import styled from "styled-components/native";
import Container from "../../layouts/Container"
import Text from '../../Text/Text'
import ImageIcon9 from "../../../../assets/Svg/ImageIcon9";

export default function CustomHeader() {
    return (
        <Header>
            <Container>
                <IconHeader>
                    <ImageIcon9/>
                </IconHeader>
                <CountHeader>
                    <Text
                        text={'💎 300'}
                    />

                </CountHeader>

            </Container>
        </Header>
    );
}

const Header = styled.View` 
    align-items: center;
    justify-content: center;
    height: 100px;
    padding-top: 40px;
    margin-bottom: 17px;
    margin-left: 10px;
`
const IconHeader = styled.View`
    width: 100px;
    height: 19px;
    right: 120px;
    top: 2px;
`
const CountHeader = styled.Text`
    top: 15px;
    color: white;
    right: 120px;
    text-align: left;
    font-weight: 600;
    font-size: 21px;
`


