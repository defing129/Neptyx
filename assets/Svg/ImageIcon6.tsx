import React from "react";
import Svg, {Path,Rect} from 'react-native-svg'



interface  ArrowProps {
    color?: string,
    width?: number,
    height?: number,
}

const ImageIcon6 = ({color = '#414141', width = 50, height = 31} : ArrowProps) => {
    return  (
        <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" >
            <Path d="M1 1L8 8M15 15L8 8M8 8L15 1M8 8L1 15" stroke="white" stroke-linecap="round" stroke-linejoin="round"/>
        </Svg>



    )
}



export default ImageIcon6;
