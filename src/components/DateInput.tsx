import './DateInput.css'

type DateInputProps = {
  borderColor: 'lightGray' | 'gray' | 'orange'
}

function DateInput(props: DateInputProps) {
  return (
    <div className="date-input">
      <div className="date-input-box" style={{ borderColor: props.borderColor }}>
        <input type="text" placeholder="YYYY.MM.DD" />
        <span className="calendar-icon">▣</span>
      </div>
    </div>
  )
}

export default DateInput