import { useState } from 'react'
import CustomTopAppBar from '../components/CustomTopAppBar'
import CustomProfileCard from '../components/CustomProfileCard'
import CustomProfile from '../components/CustomProfile'
import TextArea from '../components/TextArea'
import CustomButton from '../components/CustomButton'
import './CustomReviewWritePage.css'
import CustomDiv from '../components/CustomDiv'
import { StarIcon } from '../components/CustomIcon'
 
const RATING_LABELS = ['평가를 선택해주세요', '별로예요', '그저 그래요', '괜찮아요', '만족해요', '최고예요']
 
function CustomReviewWritePage() {
    const [rating, setRating] = useState(4)
 
    return (
        <CustomDiv>
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
        </CustomDiv>
    )
}
 
export default CustomReviewWritePage