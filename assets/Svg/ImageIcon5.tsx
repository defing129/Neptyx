import React from "react";
import Svg, {Path,Rect} from 'react-native-svg'



interface  ArrowProps {
    color?: string,
    width?: number,
    height?: number,
}

const ImageIcon5 = ({color = '#414141', width = 50, height = 31} : ArrowProps) => {
    return  (
        <Svg width={20} height={20} viewBox="0 0 20 20" fill="none" >
            <Path d="M12.5 15.2143H12V15.7143V18.9129L7.8254 15.3347L7.68496 15.2143H7.5H2.5C1.46067 15.2143 0.5 14.2174 0.5 12.8571V2.85714C0.5 1.49688 1.46067 0.5 2.5 0.5H17.5C18.5382 0.5 19.5 1.49705 19.5 2.85714V12.8571C19.5 14.2172 18.5382 15.2143 17.5 15.2143H12.5Z" stroke="rgba(255, 255, 255, 0.34)" stroke-opacity="0.34"/>
        </Svg>



    )
}



export default ImageIcon5;
