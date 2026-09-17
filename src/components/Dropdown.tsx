import './Dropdown.css'

type DropdownProps = {
  borderColor: 'lightGray' | 'gray' | 'orange'
}

function Dropdown(props: DropdownProps) {
  return (
    <div className="dropdown">
      <select style={{ borderColor: props.borderColor }}>
        <option>선택해주세요</option>
      </select>

      {props.borderColor === 'orange' && <p>항목을 선택해주세요.</p>}
    </div>
  )
}

export default Dropdown