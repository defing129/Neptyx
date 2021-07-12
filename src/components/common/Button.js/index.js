import React from "react";
import styled from "styled-components/native";


export default function Button({color, width, height, border, background, text, icon, borderColor,navigation}) {

    return (
        <MainButton onPress={() => navigation.navigate('EntryScreen')} width={width} height={height} border={border} background={background} borderColor={borderColor}>
            <TextButton color={color}>{text}</TextButton>
            {icon && <IconButton source={require('../../../../assets/image/utils/vk_icon.png')}/>}
        </MainButton>
    )
}

Button.defaultProps = {
    text: 'Untitled'
}

const MainButton = styled.TouchableOpacity`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    border-radius: ${props => props.border || '5px'}; 
    width:  ${props => props.width || '160px'};
    height:  ${props => props.height || '46px'};
    background: ${props => props.background || 'white'};
    border: 0.5px solid ${props => props.borderColor || '#403F47'};;
`

const TextButton = styled.Text`
        color:  ${props => props.color || 'black'};
        font-weight: 700;
        font-size: 18px;
        line-height: 27px;
        display: flex;
        align-items: center;
        text-align: center;
        margin-left: 16px;
`
const IconButton = styled.Image`
    margin-top: 3px;
    margin-left: 10px;
    
`
