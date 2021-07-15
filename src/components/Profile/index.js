import React from "react";
import styled from "styled-components/native";
import Container from "../../components/layouts/Container"

export default function ProfileHeader( ) {
    return (
        <Header>
            <Container>
                <IconHeader
                    source = {require('../../../assets/image/utils/logo_header.png')}/>
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
