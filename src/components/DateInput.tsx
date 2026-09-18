import './DateInput.css'
import { Calendar } from './CustomIcon'

type DateInputProps = {
  borderColor: 'lightGray' | 'gray' | 'orange'
}

function DateInput(props: DateInputProps) {
  return (
    <div className="date-input">
      <div className="date-input-box" style={{ borderColor: props.borderColor }}>
        <input type="text" placeholder="YYYY.MM.DD" />
        <span className="calendar-icon"><Calendar width={20} height={20} stroke="#6B7280" /></span>
      </div>
    </div>
  )
}

export default DateInput