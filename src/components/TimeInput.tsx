import './TimeInput.css'
import { Arrow } from './CustomIcon'

type TimeInputProps = {
  borderColor: 'gray' | 'none' | 'orange'
  backgroundColor: 'white' | 'gray'
}

const colors = {
  lightGray: '#F2F2F2',
  gray: '#D7DAE0',
  orange: '#FD5D35',
  none: 'transparent',
  white: '#FFFFFF',
}

function TimeInput(props: TimeInputProps) {
  return (
    <div className='time-input'>
      <div className='time-input-block'>

        <div className='time-select-wrapper'>
          <select style={{ border: props.borderColor === 'none' ? 'none' : `1px solid ${colors[props.borderColor]}`, backgroundColor: colors[props.backgroundColor] }}>
            <option>00:00</option>
          </select>
          <div className='time-dropdown-arrow'>
            <Arrow width={24} height={24} strokeWidth={2}/>
          </div>
        </div>

        <p>~</p>

        <div className='time-select-wrapper'>
          <select style={{ border: props.borderColor === 'none' ? 'none' : `1px solid ${colors[props.borderColor]}`, backgroundColor: colors[props.backgroundColor] }}>
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