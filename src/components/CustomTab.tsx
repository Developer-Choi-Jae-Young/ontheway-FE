import './CustomTab.css'
 
interface CustomTabProps {
    tabs: string[];
    activeIndex?: number;
    onChange?: (index: number) => void;
}
 
function CustomTab({ tabs, activeIndex = 0, onChange }: CustomTabProps) {
    return (
        <div className="tab" role="tablist">
            {tabs.map((label, i) => (
                <button
                    key={i}
                    role="tab"
                    aria-selected={i === activeIndex}
                    className={`tab__item ${i === activeIndex ? "tab__item--active" : ""}`}
                    onClick={() => onChange?.(i)}
                >
                    {label}
                </button>
            ))}
        </div>
    )
}
 
export default CustomTab