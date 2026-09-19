import './TextArea.css'

const colors = {
  lightGray: '#F2F2F2',
  gray: '#D7DAE0',
  orange: '#FD5D35',
  none: 'transparent',
  white: '#FFFFFF',
}
//2. props
type TextAreaProps = {
  borderColor: 'lightGray' | 'gray' | 'orange'
  textcount: number
}

// 1. TextField Component : () 안에 prop를 넣어주면 됨. 
function TextArea(props : TextAreaProps){
    return(<div className='text-area' style={{borderColor: colors[props.borderColor]}}>
        <textarea placeholder="Text"/>
        <span className='text-count'>
            <span style={{ color: props.textcount === 100 ? colors.orange : colors.gray }}>
                {props.textcount}
            </span>
            <span style={{ color: colors.gray }}>/100</span>
        </span>
    </div>)
}

export default TextArea