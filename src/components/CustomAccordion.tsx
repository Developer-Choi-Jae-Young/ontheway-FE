import { useState } from 'react';
import './CustomAccordion.css'

interface CustomAccordion {
    width: number;
    clientName: string;
    itemName: string;
    price: string;
    children?: React.ReactNode;
}

function CustomAccordion({width, clientName, itemName, price, children}: CustomAccordion) {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleAccordion = () => {
        setIsOpen(prev => !prev);
    };

    return (
        <>
            <div className={`custom-accordion ${isOpen ? 'is-open' : ''}`} style={{'--accordion-width': width} as React.CSSProperties}>
                <div className="accordion-card-header">
                    <div className="accordion-card-indicator" />

                    <div className="accordion-card-info">
                        <h3 className="accordion-card-title">{clientName}님의 의뢰</h3>
                        <p className="accordion-card-item-name">{itemName}</p>
                    </div>

                    <div className="accordion-card-action">
                        <span className="accordion-card-price">{price}원</span>
                        <button 
                        className="accordion-card-add-button" 
                        onClick={toggleAccordion}
                        aria-label={isOpen ? "접기" : "추가"}
                        >
                        {isOpen ? '−' : '+'}
                        </button>
                    </div>
                </div>

               <div className="accordion-card-content">
                    {children || (<div className="accordion-default-box" />)}
               </div>
            </div>
        </>
    )
}

export default CustomAccordion