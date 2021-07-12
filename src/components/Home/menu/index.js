import React from "react";
import styled from "styled-components/native";



export  default function MenuHeader () {
    return (
        <Background>
            <MeHeader>
                <MenuText>

                </MenuText>
                <MenuText2>
                </MenuText2>
            </MeHeader>

        </Background>

    );
}
const Background = styled.View` 
  background: red;
   flex: 0.08;
   width: 97%;
   border-radius: 10px;
 
`
const MeHeader = styled.View`
 margin: 0;                      
`
const MenuText = styled.Text`
left: 48px;
font-weight: 500;
font-size: 20px;
color: white;
top: 20px;
 
`
const MenuText2 = styled.Text`
    font-weight: 500;
    font-size: 10px;
    line-height: 15px;
    left: 48px;
    color: rgba(255, 255, 255, 0.31);
    width: 208px;
    height: 15px;
    left: 139px; 
 
`
const IcServ = styled.View` 

`
const IconServ = styled.Image`

`
