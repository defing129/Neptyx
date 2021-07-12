import React from "react";
import styled from "styled-components/native";



export  default function NewsHeader () {
    return (
        <Background>
            <WrapperHeader>
                <NewsText>
                 Новости
                </NewsText>
                <SecText>
                 ХОЧУ 400 ХОЧУ 4--
                </SecText>
            </WrapperHeader>
                <IcHeader>
                <IconHeader>

                </IconHeader>
                </IcHeader>

        </Background>

    );
}
const Background = styled.View` 
  
   flex: 0.18;
   width: 97%;
   border-radius: 10px;
 
`
const WrapperHeader = styled.View`
 top: 15px;


`
const NewsText = styled.Text`
left: 48px;
font-weight: 500;
font-size: 20px;
color: white;
top: 20px;
 
`
const SecText = styled.Text`
    font-weight: 500;
    font-size: 12px;
    line-height: 18px;
    left: 48px;
    color: white;
    top: 30px;
 
`
const IcHeader = styled.View` 

`
const IconHeader = styled.Image`

`
