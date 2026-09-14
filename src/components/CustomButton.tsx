import './CustonButton.css'

interface CustomButton {
    name: string; color: string; fontColor: string; width: string;
}

function CustomButton({name,color,fontColor,width}: CustomButton) {
  return (
    <>
        <div className="custom-button" 
        style={{ '--btn-color': color, '--font-color':fontColor, '--btn-width':width} as React.CSSProperties}

    >
            {name}
        </div>
    </>
  )
}

export default CustomButton