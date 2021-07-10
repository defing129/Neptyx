import React from "react";
import styled from "styled-components/native";



export default function LogoWrapper ( {width, height, mt} ) {

    return (
        <Wrapper mt={mt}>
            <Logo width={width} height={height} source={require('../../../assets/image/utils/logo.png')}/>
        </Wrapper>
    );
}

const Wrapper = styled.View`
    align-items: center;
    margin-bottom: 30px;
    margin-top: ${props => props.mt || '55px'};
`
const Logo = styled.Image`
    width: ${props => props.width || '76px'};
    height: ${props => props.height || '90px'};
`
