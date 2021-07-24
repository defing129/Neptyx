import React from "react";
import styled from "styled-components/native";
import Button from "../common/Button.js";


export default function Text({color, text, fontSize ,fontWeight,lineHeight,textAlign,left,top,icon, navigation}) {

    return (
            <TitleText color={color}  icon={icon} fontSize={fontSize} fontWeight={fontWeight} left={left} top={top} lineHeight={lineHeight} textAlign={textAlign}>
                {text}
                {icon && <IconButton source={require('../../../assets/image/utils/Vector_(Stroke).png')}/>}

            </TitleText>

    )
}


Button.defaultProps = {
    text: 'Untitled'
}

const TitleText = styled.Text`
     font-weight: ${props => props.fontWeight || '500'};
    font-size: ${props => props.fontSize || '19px'} ;
    color: ${props => props.color || '#fff'};
    line-height:  ${props => props.lineHeight || '19px'} ;
    left:  ${props => props.left || '0'} ;
    top:  ${props => props.top || '0'} ;
    text-align: ${props => props.textAlign || 'center' };
`
const IconButton = styled.Image`
`
