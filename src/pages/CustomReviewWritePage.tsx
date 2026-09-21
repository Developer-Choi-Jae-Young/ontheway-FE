import { useState } from 'react'
import CustomTopAppBar from '../components/CustomTopAppBar'
import CustomProfileCard from '../components/CustomProfileCard'
import CustomProfile from '../components/CustomProfile'
import TextArea from '../components/TextArea'
import CustomButton from '../components/CustomButton'
import './CustomReviewWritePage.css'
 
const RATING_LABELS = ['평가를 선택해주세요', '별로예요', '그저 그래요', '괜찮아요', '만족해요', '최고예요']
 
function StarIcon({ filled }: { filled: boolean }) {
    return (
        <svg width="42" height="42" viewBox="0 0 24 24"
            fill={filled ? '#FD5D35' : 'none'}
            stroke={filled ? '#FD5D35' : '#33363D'}
            strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
        </svg>
    )
}
 
function CustomReviewWritePage() {
    const [rating, setRating] = useState(4)
 
    return (
        <div className="review-write">
            <CustomTopAppBar variant="centered" title="배송 후기 작성" />
 
            <div className="review-write__body">
                <CustomProfileCard
                    nickname="하루"
                    date="2026.09.17"
                    rateing={0}
                    review={0}
                    chipElement={null}
                    profileElement={<CustomProfile width={40} height={20} strok="#FD5D35" strokWidth={2} diameter={40} backgroundColor="#FEF1ED" />}
                />
 
                {/* 별점 + 라벨 (피그마대로 직접 구현, 클릭해서 선택) */}
                <div className="review-write__rating">
                    <div className="review-write__stars">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <button
                                key={i}
                                type="button"
                                className="review-write__star"
                                onClick={() => setRating(i)}
                                aria-label={`${i}점`}
                            >
                                <StarIcon filled={i <= rating} />
                            </button>
                        ))}
                    </div>
                    <p className="review-write__rating-label">{RATING_LABELS[rating]}</p>
                </div>
 
                {/* 후기 입력 */}
                <div className="review-write__area">
                    <p className="review-write__area-label">후기를 남겨주세요</p>
                    <TextArea borderColor="lightGray" textcount={0} />
                </div>
            </div>
 
            <div className="review-write__footer">
                <CustomButton name="등록하기" color="#fd5d35" fontColor="#ffffff" size="lg" />
            </div>
        </div>
    )
}
 
export default CustomReviewWritePage