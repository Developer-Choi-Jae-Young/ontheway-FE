import { useState } from 'react'
import './CustomCheckbox.css'

interface CustomCheckboxProps {
    label: string;
    defaultChecked?: boolean;
    disabled?: boolean;
    size?: "sm" | "lg";
    checked?: boolean;                        // 넘기면 바깥에서 상태를 관리한다
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

function CustomCheckbox({ label, defaultChecked = false, disabled = false, size = "lg", checked: controlled, onChange }: CustomCheckboxProps) {
    const [internalChecked, setInternalChecked] = useState(defaultChecked);

    // checked를 넘긴 곳은 바깥 값을, 안 넘긴 곳은 지금까지처럼 내부 값을 쓴다
    const checked = controlled ?? internalChecked;

    const handleChange = () => {
        if (controlled === undefined) setInternalChecked(!checked);
        onChange?.(!checked);
    };

    return (
        <label className={`checkbox checkbox--${size} ${disabled ? "checkbox--disabled" : ""}`}>
            <input
                type="checkbox"
                className="checkbox__input"
                checked={checked}
                disabled={disabled}
                onChange={handleChange}
            />
            <span className="checkbox__box">
                <CheckIcon />
            </span>
            <span className="checkbox__label">{label}</span>
        </label>
    )
}

export default CustomCheckbox