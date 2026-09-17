import './TimeInput.css'

type TimeInputProps = {
  borderColor: 'lightGray' | 'none' |'orange'
  backgroundColor: 'white' | 'gray'
}

function TimeInput(props: TimeInputProps) {
  return (
    <div className='time-input'>
        <div className='time-input-block'>
            <select style={{ border: props.borderColor === 'none' ? 'none' : `1px solid ${props.borderColor}`, backgroundColor: props.backgroundColor }}>
                <option>00:00</option>
            </select>

            <p>~</p>

            <select style={{ border: props.borderColor === 'none' ? 'none' : `1px solid ${props.borderColor}`, backgroundColor: props.backgroundColor }}>
                <option>00:00</option>
            </select>

        </div>
    </div>
  )
}

export default TimeInput