import './CustomCheckbox.css'
 
interface CustomCheckboxProps {
    label: string;
    checked?: boolean;
    disabled?: boolean;
    size?: "sm" | "lg";
    onChange?: (checked: boolean) => void;
}
 
function CheckIcon() {
    return (
        <svg viewBox="0 0 24 24" fill="none"
            stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6 9 17l-4-4" />
        </svg>
    )
}
 
function CustomCheckbox({ label, checked = false, disabled = false, size = "lg", onChange }: CustomCheckboxProps) {
    return (
        <label className={`checkbox checkbox--${size} ${disabled ? "checkbox--disabled" : ""}`}>
            <input
                type="checkbox"
                className="checkbox__input"
                checked={checked}
                disabled={disabled}
                onChange={(e) => onChange?.(e.target.checked)}
            />
            <span className="checkbox__box">
                {checked && <CheckIcon />}
            </span>
            <span className="checkbox__label">{label}</span>
        </label>
    )
}
 
export default CustomCheckbox