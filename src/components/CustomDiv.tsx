import './CustomDiv.css'
import { type ReactNode } from 'react'

interface CustomDiv {
    children: ReactNode;
    headerElement?: ReactNode;
    footerElement?: ReactNode;
}

function CustomDiv({children, headerElement, footerElement}: CustomDiv) {
  return (
    <div className='custom-div'>
        <div>{headerElement}</div>
        <div className='custom-div-body'>
            {children}
        </div>
        <div>{footerElement}</div>
    </div>
  )
}

export default CustomDiv