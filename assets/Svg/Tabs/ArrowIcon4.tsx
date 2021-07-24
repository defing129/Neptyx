import React from "react";
import Svg, {Path} from 'react-native-svg'


interface  ArrowProps {
    color?: string,
    width?: number,
    height?: number,
}

const ArrowIcon4 = ({color = '#414141', width = 50, height = 31 } : ArrowProps) => {
    return  (
        <Svg width={width} height={height} viewBox="0 0 20 22" fill="none">
            <Path
                fill={color}
                fill-rule="evenodd" clip-rule="evenodd" d="M9.7747 17.8524C9.18353 18.476 8.19016 18.476 7.59898 17.8524L0.225303 10.0738C-0.075101 9.7569 -0.075101 9.2431 0.225303 8.9262L7.59899 1.1476C8.19016 0.523961 9.18353 0.523961 9.7747 1.1476L2.62632 8.68853L20 8.68853L20 10.3115L2.62632 10.3115L9.7747 17.8524Z"/>
        </Svg>

    )
}



export default ArrowIcon4;
