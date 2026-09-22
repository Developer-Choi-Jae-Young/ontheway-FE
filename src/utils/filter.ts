// 필터에서 쓰는 값의 형태와 라벨 만들기
// (컴포넌트 파일과 분리해야 Fast Refresh가 정상 동작한다)

// 지역 필터 값: 시·도만 고르고 끝낼 수도 있어서 district는 없을 수 있다
export interface RegionValue {
    sido: string
    district?: string
}

export interface PriceValue {
    min: number
    max: number
}

// 네 가지 필터를 한 묶음으로 다룬다
export interface FilterValues {
    start: RegionValue | null
    end: RegionValue | null
    rating: number | null
    price: PriceValue | null
}

export const EMPTY_FILTERS: FilterValues = { start: null, end: null, rating: null, price: null }

export const PRICE_MIN = 0
export const PRICE_MAX = 100000
export const PRICE_STEP = 1000

// 금액을 "20,000원" 형태로
export function formatPrice(value: number) {
    return value.toLocaleString('ko-KR') + '원'
}

// 칩에 보여줄 짧은 라벨
export function regionLabel(value: RegionValue) {
    return value.district ? value.sido + ' ' + value.district : value.sido
}

export function priceLabel(value: PriceValue) {
    return formatPrice(value.min) + '~' + formatPrice(value.max)
}

export function ratingLabel(value: number) {
    return value === 5 ? '5.0' : value.toFixed(1) + ' 이상'
}
