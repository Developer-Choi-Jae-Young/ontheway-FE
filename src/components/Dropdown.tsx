import './Dropdown.css'
import { Arrow } from './CustomIcon'

const colors = {
  lightGray: '#F2F2F2',
  gray: '#D7DAE0',
  orange: '#FD5D35',
  none: 'transparent',
  white: '#FFFFFF',
}

type DropdownProps = {
  borderColor: 'lightGray' | 'gray' | 'orange'
}

function Dropdown(props: DropdownProps) {
  return (
    <div className="dropdown">
      <div className='select-wrapper'>
        <select style={{ borderColor: colors[props.borderColor] }}>
            <option>선택해주세요</option>
        </select>
        <div className="dropdown-arrow">
          <Arrow width={24} height={24} strokeWidth={2}></Arrow>
        </div>
    </div>
      {props.borderColor === 'orange' && <p style={{color:colors.orange}}>항목을 선택해주세요.</p>}
    </div>
  )
}

export default Dropdown