import { useState } from 'react'
import './CustomTab.css'
 
interface CustomTabProps {
    tabs: string[];
    activeIndex?: number;          // 처음에 활성으로 둘 탭 (기본 0)
    onChange?: (index: number) => void;
}
 
function CustomTab({ tabs, activeIndex = 0, onChange }: CustomTabProps) {
    const [active, setActive] = useState(activeIndex)
 
    const handleClick = (i: number) => {
        setActive(i)
        onChange?.(i)
    }
 
    return (
        <div className="tab" role="tablist">
            {tabs.map((label, i) => (
                <button
                    key={i}
                    role="tab"
                    aria-selected={i === active}
                    className={`tab__item ${i === active ? "tab__item--active" : ""}`}
                    onClick={() => handleClick(i)}
                >
                    {label}
                </button>
            ))}
        </div>
    )
}
 
export default CustomTab