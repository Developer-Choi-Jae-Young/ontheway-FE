import { useRef, useState } from 'react'
import './CustomFilterBar.css'
import CustomFilterChip from './CustomFilterChip'
import { RegionFilter, PriceFilter, RatingFilter } from './CustomFilterPanel'
import { EMPTY_FILTERS, regionLabel, priceLabel, ratingLabel, type FilterValues } from '../utils/filter'

type OpenPanel = 'start' | 'end' | 'rating' | 'price'

// 칩 오른쪽으로 패널이 삐져나가는지 판단할 때 쓰는 패널 폭
const PANEL_WIDTH: Record<OpenPanel, number> = { start: 252, end: 252, rating: 152, price: 290 }

interface CustomFilterBarProps {
    className?: string
    onChange?: (values: FilterValues) => void
}

function CustomFilterBar({ className, onChange }: CustomFilterBarProps) {
    const [values, setValues] = useState<FilterValues>(EMPTY_FILTERS)
    const [open, setOpen] = useState<OpenPanel | null>(null)
    const [alignRight, setAlignRight] = useState(false)

    const barRef = useRef<HTMLDivElement>(null)
    const chipRefs = useRef<Partial<Record<OpenPanel, HTMLDivElement | null>>>({})

    // 패널에서 적용하기를 누르면 값을 반영하고 닫는다
    const apply = (next: Partial<FilterValues>) => {
        const merged = { ...values, ...next }
        setValues(merged)
        setOpen(null)
        onChange?.(merged)
    }

    // 같은 칩을 다시 누르면 닫히고, 열 때는 칩 아래에 놓을 방향을 정한다
    const toggle = (panel: OpenPanel) => {
        if (open === panel) {
            setOpen(null)
            return
        }

        const chip = chipRefs.current[panel]
        const bar = barRef.current
        if (chip && bar) {
            // 칩 왼쪽에 맞추면 오른쪽으로 넘칠 때는 칩 오른쪽에 맞춘다
            setAlignRight(chip.offsetLeft + PANEL_WIDTH[panel] > bar.clientWidth)
        }
        setOpen(panel)
    }

    const close = () => setOpen(null)

    const chipLabels: Record<OpenPanel, string> = {
        start: values.start ? regionLabel(values.start) : '출발지',
        end: values.end ? regionLabel(values.end) : '도착지',
        rating: values.rating ? ratingLabel(values.rating) : '후기',
        price: values.price ? priceLabel(values.price) : '희망금액',
    }

    // 각 칩과, 그 칩 바로 아래에 붙는 패널
    const renderChip = (panel: OpenPanel, content: React.ReactNode) => (
        <div
            className="filter-bar__item"
            ref={(el) => { chipRefs.current[panel] = el }}
        >
            <CustomFilterChip
                label={chipLabels[panel]}
                variant="full"
                icon="chevron"
                selected={panel === 'rating' ? !!values.rating : !!values[panel]}
                onClick={() => toggle(panel)}
            />
            {open === panel && (
                <div className={`filter-bar__panel ${alignRight ? 'filter-bar__panel--right' : ''}`}>
                    {content}
                </div>
            )}
        </div>
    )

    return (
        <div className={`filter-bar ${className ?? ''}`} ref={barRef}>
            {/* 패널 바깥을 누르면 닫힘 */}
            {open && <div className="filter-bar__backdrop" onClick={close} />}

            {renderChip('start', (
                <RegionFilter title="출발지 선택" value={values.start} onClose={close} onApply={(start) => apply({ start })} />
            ))}
            {renderChip('end', (
                <RegionFilter title="도착지 선택" value={values.end} onClose={close} onApply={(end) => apply({ end })} />
            ))}
            {renderChip('rating', (
                <RatingFilter value={values.rating} onClose={close} onApply={(rating) => apply({ rating })} />
            ))}
            {renderChip('price', (
                <PriceFilter value={values.price} onClose={close} onApply={(price) => apply({ price })} />
            ))}
        </div>
    )
}

export default CustomFilterBar
