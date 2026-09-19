import './DateInput.css'
import { Calendar } from './CustomIcon'
 
const colors = {
  lightGray: '#F2F2F2',
  gray: '#D7DAE0',
  orange: '#FD5D35',
  none: 'transparent',
  white: '#FFFFFF',
}
 
 
type DateInputProps = {
  label?: string
  borderColor: 'lightGray' | 'gray' | 'orange'
}
 
function DateInput(props: DateInputProps) {
  return (
    <div className="date-input">
      {props.label && <p className="date-input__label">{props.label}</p>}
      <div className="date-input-box" style={{ borderColor: colors[props.borderColor] }}>
        <input type="text" placeholder="YYYY.MM.DD" />
        <span className="calendar-icon"><Calendar width={20} height={20} stroke="#6B7280" /></span>
      </div>
    </div>
  )
}
 
export default DateInput