import './TextArea.css'

//2. props
type TextAreaProps = {
  borderColor: 'lightGray' | 'gray' | 'orange'
  textcount: number
}

// 1. TextField Component : () 안에 prop를 넣어주면 됨. 
function TextArea(props : TextAreaProps){
    return(<div className='text-area' style={{borderColor: props.borderColor}}>
        <textarea placeholder="Text"/>
        <span className='text-count'>
            <span style={{ color: props.textcount === 100 ? 'orange' : 'gray' }}>
                {props.textcount}
            </span>
            <span style={{ color: 'lightgray' }}>/100</span>
        </span>
    </div>)
}

export default TextArea