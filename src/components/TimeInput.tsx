import './TimeInput.css'
import { Arrow } from './CustomIcon'

type TimeInputProps = {
  borderColor: 'lightGray' | 'none' | 'orange'
  backgroundColor: 'white' | 'gray'
}

function TimeInput(props: TimeInputProps) {
  return (
    <div className='time-input'>
      <div className='time-input-block'>

        <div className='time-select-wrapper'>
          <select style={{ border: props.borderColor === 'none' ? 'none' : `1px solid ${props.borderColor}`, backgroundColor: props.backgroundColor }}>
            <option>00:00</option>
          </select>
          <div className='time-dropdown-arrow'>
            <Arrow width={24} height={24} strokeWidth={2}/>
          </div>
        </div>

        <p>~</p>

        <div className='time-select-wrapper'>
          <select style={{ border: props.borderColor === 'none' ? 'none' : `1px solid ${props.borderColor}`, backgroundColor: props.backgroundColor }}>
            <option>00:00</option>
          </select>
          <div className='time-dropdown-arrow'>
            <Arrow width={24} height={24} strokeWidth={2}/>
          </div>
        </div>

      </div>
    </div>
  )
}

export default TimeInput