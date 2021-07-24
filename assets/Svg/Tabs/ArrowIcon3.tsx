import React from "react";
import Svg, {Path} from 'react-native-svg'


interface  ArrowProps {
    color?: string,
    width?: number,
    height?: number,
}

const ArrowIcon3 = ({color = '#414141', width = 50, height = 31} : ArrowProps) => {
    return  (
        <Svg
            width={width} height={height} viewBox="0 0 20 22" fill="none">
            <Path
                fill={color}
                d="M10.9639 12.2824C14.2151 12.2824 16.8522 9.64531 16.8522 6.3941C16.8522 3.14289 14.2151 0.523804 10.9639 0.523804C7.71267 0.523804 5.07555 3.16093 5.07555 6.3941C5.07555 9.62727 7.71263 12.2824 10.9639 12.2824ZM10.9639 2.05911C13.3481 2.05911 15.2989 4.00984 15.2989 6.3941C15.2989 8.77836 13.3481 10.729 10.9639 10.729C8.57966 10.729 6.6289 8.77832 6.6289 6.39406C6.6289 4.0098 8.57962 2.05911 10.9639 2.05911Z" />
            <Path
                fill={color}
                d="M0.776675 21.4762H21.2233C21.6568 21.4762 22 21.133 22 20.6995C22 16.6355 18.6946 13.312 14.6125 13.312H7.38753C3.32349 13.312 0 16.6174 0 20.6995C0 21.133 0.34318 21.4762 0.776675 21.4762ZM7.38753 14.8654H14.6125C17.5747 14.8654 20.0131 17.069 20.3925 19.9228H1.60755C1.98684 17.0871 4.4253 14.8654 7.38753 14.8654Z"/>
        </Svg>
    )
}



export default ArrowIcon3;
