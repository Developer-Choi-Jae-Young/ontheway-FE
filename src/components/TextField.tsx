import './TextField.css'

//2. props
type TextFieldProps = {
  height: 80 | 88
  borderColor: 'lightGray' | 'gray' | 'orange' | 'none'
  backgroundColor: 'white' | 'gray'
  leftLocationIcon: boolean
  placeholder: string
  timer: boolean
  rightButton: 'x' | 'label' | 'none'
}

// 1. TextField Component : () 안에 prop를 넣어주면 됨. 
function TextField(props : TextFieldProps) {
    return(
        <div className="text-field" style={{ height: `${props.height}px`, borderColor: props.borderColor, backgroundColor: props.backgroundColor }}>
            {props.leftLocationIcon && <span>📍</span>}
            <input placeholder={props.placeholder}/>
            {props.timer && <span>2:59</span>}
            {props.rightButton === 'x' && <button>ⓧ</button>}
            {props.rightButton === 'label' && <button>Label</button>}
        </div>
    )
}

// 3. 다른 파일에서 사용할 수 있도록 export 해야함.
export default TextField