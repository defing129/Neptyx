import React from "react";
import styled from "styled-components/native";


export default function Button({color, width, height, border, background, text, icon, borderColor,navigation}) {

    return (
        <MainButton  width={width}  height={height} border={border} background={background} borderColor={borderColor}>
            <TextButton color={color}  onPress={() => navigation.navigate('EntryScreen')}>{text}</TextButton>
            {icon && <IconButton source={require('../../../../assets/image/utils/vk_icon.png')}/>}
        </MainButton>
    )
}
const MainButton = styled.View `
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    width:  ${props => props.width || '160px'};
    height:  ${props => props.height || '46px'};
    background: ${props => props.background || 'white'};
    border: 0.5px solid ${props => props.borderColor || '#403F47'};;
`
const IconButton = styled.Image`
    margin-top: 3px;
    margin-left: 10px;
    
`
const TextButton = styled.Text `
color:  ${props => props.color || 'black'};
    font-weight: 600;
    font-size: 20px;
    line-height: 27px;
`
