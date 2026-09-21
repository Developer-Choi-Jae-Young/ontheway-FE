import './CustomDiv.css'
import { type ReactNode } from 'react'

interface CustomDiv {
    children: ReactNode;
    backgroundColor?: string;
    headerElement?: ReactNode;
    footerElement?: ReactNode;
}

function CustomDiv({children, backgroundColor='#ffffff', headerElement, footerElement}: CustomDiv) {
  return (
    <div className='custom-div' style={{ '--bg-color': backgroundColor } as React.CSSProperties}>
        <div>{headerElement}</div>
        <div className='custom-div-body'>
            {children}
        </div>
        <div>{footerElement}</div>
    </div>
  )
}

export default CustomDiv