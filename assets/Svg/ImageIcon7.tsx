import React from "react";
import Svg, {Path,Defs,LinearGradient,Stop} from 'react-native-svg'



interface  ArrowProps {
    color?: string,
    width?: number,
    height?: number,
}

const ImageIcon7 = ({color = '#414141', width = 50, height = 31} : ArrowProps) => {
    return  (
        <Svg width={76} height={52} viewBox="0 0 76 52" fill="none">
            <Path fillRule="evenodd" clipRule="evenodd" d="M74.682 1.31802C76.4393 3.07538 76.4393 5.92462 74.682 7.68198L32.182 50.182C30.4246 51.9393 27.5754 51.9393 25.818 50.182L1.31802 25.682C-0.43934 23.9246 -0.43934 21.0754 1.31802 19.318C3.07538 17.5607 5.92462 17.5607 7.68198 19.318L25.4645 37.1005C27.4171 39.0531 30.5829 39.0531 32.5355 37.1005L68.318 1.31802C70.0754 -0.43934 72.9246 -0.43934 74.682 1.31802Z" fill="url(#paint0_linear)"/>
            <Defs>
                <LinearGradient id="paint0_linear" x1="0" y1="51.5" x2="76" y2="51.5" gradientUnits="userSpaceOnUse">
                    <Stop stopColor="#49A382"/>
                    <Stop offset="1" stopColor="#47935C"/>
                </LinearGradient>
            </Defs>
        </Svg>



    )
}



export default ImageIcon7;
