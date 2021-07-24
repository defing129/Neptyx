import React from "react";
import Svg, {Path,Rect} from 'react-native-svg'



interface  ArrowProps {
    color?: string,
    width?: number,
    height?: number,
}

const ImageIcon2 = ({color = '#414141', width = 50, height = 31} : ArrowProps) => {
    return  (
        <Svg width={23} height={23} viewBox="0 0 23 23" fill="white" >
            <Path d="M2.875 15.3333H4.79167V21.0833C4.79167 21.6126 4.36261 22.0416 3.83333 22.0416C3.30406 22.0416 2.875 21.6126 2.875 21.0833V15.3333Z" fill="white"/>
            <Path d="M10.5417 12.4583H12.4584V21.0833C12.4584 21.6126 12.0293 22.0416 11.5 22.0416C10.9707 22.0416 10.5417 21.6126 10.5417 21.0833V12.4583Z" fill="white"/>
            <Path d="M2.875 1.91665C2.875 1.38737 3.30406 0.958313 3.83333 0.958313C4.36261 0.958313 4.79167 1.38737 4.79167 1.91665V10.5416H2.875V1.91665Z" fill="white"/>
            <Path d="M18.2083 15.3333H20.125V21.0833C20.125 21.6126 19.6959 22.0416 19.1666 22.0416C18.6374 22.0416 18.2083 21.6126 18.2083 21.0833V15.3333Z" fill="white"/>
            <Path d="M18.2083 1.91664C18.2083 1.38737 18.6374 0.958313 19.1666 0.958313C19.6959 0.958313 20.125 1.38737 20.125 1.91665V10.5416H18.2083V1.91664Z" fill="white"/>
            <Path d="M10.5417 1.91665C10.5417 1.38737 10.9707 0.958313 11.5 0.958313C12.0293 0.958313 12.4584 1.38737 12.4584 1.91665V7.66665H10.5417V1.91665Z" fill="white"/>
            <Rect x="15.3333" y="12.4583" width="7.66667" height="4.79167" rx="2" fill="white"/>
            <Rect x="7.66669" y="5.75" width="7.66667" height="4.79167" rx="2" fill="white"/>
            <Rect y="12.4583" width="7.66667" height="4.79167" rx="2" fill="white"/>
        </Svg>
    )
}



export default ImageIcon2;
