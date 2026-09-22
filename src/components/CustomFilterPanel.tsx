import { useState } from 'react'
import './CustomFilterPanel.css'
import { REGIONS } from '../data/regions'
import {
    PRICE_MIN, PRICE_MAX, PRICE_STEP,
    formatPrice, priceLabel, ratingLabel,
    type RegionValue, type PriceValue,
} from '../utils/filter'
import xIcon from '../assets/filter/x.svg'
import checkIcon from '../assets/filter/check.svg'
import starIcon from '../assets/filter/star.svg'
import rotateCcwIcon from '../assets/filter/rotate-ccw.svg'

interface PanelFrameProps {
    title: string
    width?: number
    onClose: () => void
    onReset: () => void
    onApply: () => void
    children: React.ReactNode
}

// 제목 + 닫기, 내용, 초기화 + 적용하기로 이루어진 공통 틀
function PanelFrame({ title, width, onClose, onReset, onApply, children }: PanelFrameProps) {
    return (
        <div className="filter-panel" style={width ? { width: `${width}px` } : undefined}>
            <div className="filter-panel__header">
                <p className="filter-panel__title">{title}</p>
                <button type="button" className="filter-panel__close" onClick={onClose} aria-label="닫기">
                    <img src={xIcon} alt="" />
                </button>
            </div>

            {children}

            <div className="filter-panel__footer">
                <button type="button" className="filter-panel__reset" onClick={onReset}>
                    <img src={rotateCcwIcon} alt="" />
                    <span>초기화</span>
                </button>
                <button type="button" className="filter-panel__apply" onClick={onApply}>적용하기</button>
            </div>
        </div>
    )
}

interface RegionFilterProps {
    title: string
    value: RegionValue | null
    onClose: () => void
    onApply: (value: RegionValue | null) => void
}

// 출발지/도착지: 왼쪽에서 시·도, 오른쪽에서 시군구를 고른다
export function RegionFilter({ title, value, onClose, onApply }: RegionFilterProps) {
    const [sido, setSido] = useState(value?.sido ?? '')
    const [district, setDistrict] = useState(value?.district ?? '')

    const districts = REGIONS.find(region => region.name === sido)?.districts ?? []

    const reset = () => {
        setSido('')
        setDistrict('')
    }

    return (
        <PanelFrame
            title={title}
            onClose={onClose}
            onReset={reset}
            onApply={() => onApply(sido ? { sido, district: district || undefined } : null)}
        >
            <div className="filter-panel__columns">
                <ul className="filter-panel__column">
                    {REGIONS.map(region => (
                        <li key={region.name}>
                            <button
                                type="button"
                                className={`filter-panel__option ${region.name === sido ? 'filter-panel__option--selected' : ''}`}
                                onClick={() => { setSido(region.name); setDistrict('') }}
                            >
                                <span>{region.name}</span>
                                {region.name === sido && <img src={checkIcon} alt="" />}
                            </button>
                        </li>
                    ))}
                </ul>

                <ul className="filter-panel__column">
                    {districts.map(name => (
                        <li key={name}>
                            <button
                                type="button"
                                className={`filter-panel__option ${name === district ? 'filter-panel__option--selected' : ''}`}
                                onClick={() => setDistrict(name)}
                            >
                                <span>{name}</span>
                                {name === district && <img src={checkIcon} alt="" />}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </PanelFrame>
    )
}

interface PriceFilterProps {
    value: PriceValue | null
    onClose: () => void
    onApply: (value: PriceValue | null) => void
}

// 희망금액: 최소·최대 두 개의 손잡이로 범위를 정한다
export function PriceFilter({ value, onClose, onApply }: PriceFilterProps) {
    const [min, setMin] = useState(value?.min ?? PRICE_MIN)
    const [max, setMax] = useState(value?.max ?? PRICE_MAX)

    // 두 손잡이가 서로를 넘지 않도록 한 칸씩 남긴다
    const changeMin = (next: number) => setMin(Math.min(next, max - PRICE_STEP))
    const changeMax = (next: number) => setMax(Math.max(next, min + PRICE_STEP))

    const reset = () => {
        setMin(PRICE_MIN)
        setMax(PRICE_MAX)
    }

    const left = (min / PRICE_MAX) * 100
    const right = (max / PRICE_MAX) * 100

    return (
        <PanelFrame
            title="희망금액 선택"
            width={290}
            onClose={onClose}
            onReset={reset}
            onApply={() => onApply(min === PRICE_MIN && max === PRICE_MAX ? null : { min, max })}
        >
            <div className="filter-panel__price">
                <p className="filter-panel__price-value">{priceLabel({ min, max })}</p>

                <div className="filter-panel__slider">
                    <div className="filter-panel__track" />
                    <div className="filter-panel__track-selected" style={{ left: `${left}%`, width: `${right - left}%` }} />
                    <input
                        type="range" min={PRICE_MIN} max={PRICE_MAX} step={PRICE_STEP} value={min}
                        onChange={(e) => changeMin(Number(e.target.value))}
                        aria-label="최소 금액"
                    />
                    <input
                        type="range" min={PRICE_MIN} max={PRICE_MAX} step={PRICE_STEP} value={max}
                        onChange={(e) => changeMax(Number(e.target.value))}
                        aria-label="최대 금액"
                    />
                </div>

                <div className="filter-panel__price-range">
                    <span>{formatPrice(PRICE_MIN)}</span>
                    <span>{formatPrice(PRICE_MAX)}</span>
                </div>
            </div>
        </PanelFrame>
    )
}

interface RatingFilterProps {
    value: number | null
    onClose: () => void
    onApply: (value: number | null) => void
}

const RATINGS = [5, 4, 3, 2, 1]

// 후기: 별점 하나를 고른다
export function RatingFilter({ value, onClose, onApply }: RatingFilterProps) {
    const [rating, setRating] = useState<number | null>(value)

    return (
        <PanelFrame
            title="후기 선택"
            width={152}
            onClose={onClose}
            onReset={() => setRating(null)}
            onApply={() => onApply(rating)}
        >
            <ul className="filter-panel__ratings">
                {RATINGS.map(score => (
                    <li key={score}>
                        <button
                            type="button"
                            className={`filter-panel__option ${score === rating ? 'filter-panel__option--selected' : ''}`}
                            onClick={() => setRating(score)}
                        >
                            <img src={starIcon} alt="" />
                            <span>{ratingLabel(score)}</span>
                            {score === rating && <img src={checkIcon} alt="" />}
                        </button>
                    </li>
                ))}
            </ul>
        </PanelFrame>
    )
}
