import { useState } from 'react'
import './CustomReasonSelect.css'
import CustomCheckbox from './CustomCheckbox'
import chevronDown from '../assets/withdrawal/chevron-down.svg'
import chevronUp from '../assets/withdrawal/chevron-up.svg'

interface CustomReasonSelectProps {
    options: string[]
    placeholder: string
    value?: string | null
    onChange?: (value: string | null) => void
}

// 눌러서 펼친 뒤 목록에서 하나를 고르는 선택칸 (탈퇴 사유 등)
function CustomReasonSelect({ options, placeholder, value, onChange }: CustomReasonSelectProps) {
    const [open, setOpen] = useState(false)
    const [internalValue, setInternalValue] = useState<string | null>(null)

    // value를 넘긴 곳은 바깥 값을, 안 넘긴 곳은 내부 값을 쓴다
    const selected = value !== undefined ? value : internalValue

    const select = (option: string) => {
        const next = option === selected ? null : option   // 같은 항목을 다시 누르면 선택 해제
        if (value === undefined) setInternalValue(next)
        onChange?.(next)
        setOpen(false)
    }

    return (
        <div className={`reason-select ${open ? 'reason-select--open' : ''}`}>
            <button type="button" className="reason-select__box" onClick={() => setOpen(prev => !prev)} aria-expanded={open}>
                <span className={selected ? 'reason-select__value' : 'reason-select__placeholder'}>
                    {selected ?? placeholder}
                </span>
                <img src={open ? chevronUp : chevronDown} alt="" />
            </button>

            {open && (
                <div className="reason-select__options">
                    {options.map(option => (
                        <div className="reason-select__option" key={option}>
                            <CustomCheckbox
                                label={option}
                                size="sm"
                                checked={option === selected}
                                onChange={() => select(option)}
                            />
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default CustomReasonSelect
