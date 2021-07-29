import React from "react";
import styled from "styled-components/native";
import Container from "../../components/layouts/Container"
import ImageIcon9 from "../../../assets/Svg/ImageIcon9";

export default function ProfileHeader( ) {
    return (
        <Header>
            <Container>
                <ImageIcon9 />
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
`
const IconHeader = styled.Image`
align-items: center;
justify-content: center;
bottom: 20px;
`
