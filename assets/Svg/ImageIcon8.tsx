import React from "react";
import Svg, {Path} from 'react-native-svg'



interface  ArrowProps {
    color?: string,
    width?: number,
    height?: number,
}

const ImageIcon8 = ({color = '#414141', width = 50, height = 31} : ArrowProps) => {
    return  (
        <Svg width={20} height={19} viewBox="0 0 20 19" fill="none" >
            <Path fill-rule="evenodd" clip-rule="evenodd" d="M10.2253 1.1476C10.8165 0.523961 11.8098 0.523961 12.401 1.1476L19.7747 8.9262C20.0751 9.2431 20.0751 9.7569 19.7747 10.0738L12.401 17.8524C11.8098 18.476 10.8165 18.476 10.2253 17.8524L17.3737 10.3115H0V8.68853H17.3737L10.2253 1.1476Z" fill="white"/>
        </Svg>

    )
}



export default ImageIcon8;
