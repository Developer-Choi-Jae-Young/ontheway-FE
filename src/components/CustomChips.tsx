import './CustomChips.css'

interface CustomChips {
    name: string;
    color: string;
    backgroundColor: string;
    height: number;
}

function CustomChips({name, color, backgroundColor, height}: CustomChips) {
  return (
    <>
        <div className="custom-chips" style={{'--chips-color':color, '--bg-color':backgroundColor, '--chips-height':height} as React.CSSProperties}>
            {name}
        </div>
    </>
  )
}

export default CustomChips