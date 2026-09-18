import { useState } from 'react'
import './TextField.css'
import { MapPinOutline, XButton, Eye, EyeOff } from './CustomIcon'
 
type TextFieldProps = {
  label: string
 
  height: 56 | 48
  borderColor: 'lightGray' | 'gray' | 'orange' | 'none'
  backgroundColor: 'white' | 'gray'
  leftLocationIcon: boolean
  placeholder: string
  timer: boolean
  rightButton: 'x' | 'label' | 'eye' | 'none'
}
 
function TextField(props: TextFieldProps) {
  const [showPassword, setShowPassword] = useState(false)
 
  const isPassword = props.rightButton === 'eye'
  const inputType = isPassword && !showPassword ? 'password' : 'text'
 
  return (
    <div className="text-field-container">
      <p>{props.label}</p>
      <div className="text-field" style={{ height: `${props.height}px`, borderColor: props.borderColor, backgroundColor: props.backgroundColor }}>
        {props.leftLocationIcon && <span><MapPinOutline width={20} height={24} stroke="#4B5663" strokeWidth={2} /></span>}
        <input type={inputType} placeholder={props.placeholder} />
        {props.timer && <span>2:59</span>}
        {props.rightButton === 'x' && <XButton />}
        {props.rightButton === 'label' && <div className='label-button'><button>Label</button></div>}
        {props.rightButton === 'eye' && (
          <button className="eye-button" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <Eye width={24} height={24} stroke="#6A6A67" strokeWidth={2} /> : <EyeOff width={24} height={24} stroke="#6A6A67" strokeWidth={2} />}
          </button>
        )}
      </div>
    </div>
  )
}
 
export default TextField