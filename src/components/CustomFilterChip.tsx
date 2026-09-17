import './CustomFilterChip.css'
 
interface CustomFilterChipProps {
    label: string;
    variant?: "full" | "line";
    icon?: "chevron" | "x" | "none";
    selected?: boolean;
    disabled?: boolean;
    onClick?: () => void;
}
 
function ChevronDownIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m6 9 6 6 6-6" />
        </svg>
    )
}
 
function XIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
        </svg>
    )
}
 
function CustomFilterChip({ label, variant = "full", icon = "none", selected = false, disabled = false, onClick }: CustomFilterChipProps) {
    let className = "filter-chip filter-chip--" + variant;
 
    if (selected) {
        className += " filter-chip--selected";
    }
    if (disabled) {
        className += " filter-chip--disabled";
    }
 
    return (
        <button className={className} onClick={onClick} disabled={disabled}>
            <span>{label}</span>
            {icon === "chevron" && <ChevronDownIcon />}
            {icon === "x" && <XIcon />}
        </button>
    )
}
 
export default CustomFilterChip