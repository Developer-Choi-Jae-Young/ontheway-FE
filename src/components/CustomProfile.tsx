import { Profile } from './CustomIcon';
import './CustomProfile.css'

interface CustomProfile {
    width: number;
    height: number;
    strok: string; 
    strokWidth: number; 
    backgroundColor: string;
    diameter: number;
}

function CustomProfile({width, height, strok, strokWidth, diameter, backgroundColor}: CustomProfile) {
  return (
    <>
        <div className="custom-profile" style={{'--profile-diameter':diameter, '--bg-color':backgroundColor} as React.CSSProperties}>
            <Profile width={width} height={height} stroke={strok} strokeWidth={strokWidth}></Profile>
        </div>
    </>
  )
}

export default CustomProfile