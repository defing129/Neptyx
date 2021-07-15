import React from "react";
import styled from "styled-components/native";



export  default function ServHeader () {
    return (
        <Background>
            <SeHeader>
                <ServText>

                </ServText>
                <ServText2>
                   Услуги которые предоставляют учасники
                </ServText2>
            </SeHeader>
            <IcServ>
                <IconServ>

                </IconServ>
            </IcServ>

        </Background>

    );
}
const Background = styled.View` 
   flex: 0.08;
   width: 97%;
   border-radius: 10px;
 
`
const SeHeader = styled.View`
 margin: 0;                      
`
const ServText = styled.Text`
left: 48px;
font-weight: 500;
font-size: 20px;
color: white;
top: 20px;
 
`
const ServText2 = styled.Text`
    font-weight: 500;
    font-size: 10px;
    line-height: 15px;
    left: 48px;
    color: rgba(255, 255, 255, 0.31);
    width: 208px;
    height: 15px;
    left: 139px; 
    top: 1px;
 
`
const IcServ = styled.View` 

`
const IconServ = styled.Image`

`
