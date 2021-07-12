import React from "react";
import {SafeAreaView} from "react-native";
import styled from "styled-components/native";



export default function Container( { children } ) {
    return (
        <ContainerApp>
            <SafeAreaView>
                {children}
            </SafeAreaView>
        </ContainerApp>
    );
}
const ContainerApp = styled.View`
    flex: 1;
    paddingHorizontal: 20px;
    top: 20px;
`
''
