import CustomTopAppBar from '../components/CustomTopAppBar'
import CustomProfileCard from '../components/CustomProfileCard'
import CustomProfile from '../components/CustomProfile'
import CustomList from '../components/CustomList'
import CustomCheckbox from '../components/CustomCheckbox'
import TextArea from '../components/TextArea'
import CustomButton from '../components/CustomButton'
import './CustomReportUserPage.css'
 
const REASONS = [
    '약속한 픽업 또는 전달 시간을 지키지 않았습니다.',
    '배송 과정에서 응답하지 않았습니다.',
    '배송비 또는 금전 거래와 관련해 부당한 요구를 했습니다.',
    '물품을 분실·파손하거나 훼손했습니다.',
    '욕설·협박 또는 부적절한 언행을 했습니다.',
    '허위 신원 또는 거래 정보를 제공했습니다.',
    '안전을 위협하거나 불안감을 주는 행동을 했습니다.',
]
 
function CustomReportUser() {
    return (
        <div className="report-user">
            <CustomTopAppBar variant="centered" title="유저 신고" />
 
            <div className="report-user__body">
                {/* 신고 대상 프로필 카드 */}
                <CustomProfileCard
                    width={361}
                    nickname="하늘고양이"
                    date="2026.09.08"
                    rateing={0}
                    review={0}
                    chipElement={null}
                    profileElement={<CustomProfile width={16} height={20} strok="#FD5D35" strokWidth={2} diameter={40} backgroundColor="#FEF1ED" />}
                />
 
                {/* 신고 사유 선택 */}
                <div className="report-user__section">
                    <CustomList variant="list03" label="신고 사유를 선택해주세요." />
                    <p className="report-user__hint">최대 3개까지 선택가능</p>
                </div>
 
                {/* 체크박스 목록 (체크박스 컴포넌트 + 라벨) */}
                <div className="report-user__checks">
                    {REASONS.map((reason, i) => (
                        <CustomCheckbox key={i} label={reason} size="sm" defaultChecked={i === 0} />
                    ))}
                </div>
 
                {/* 신고 사유 입력 */}
                <div className="report-user__area">
                    <p className="report-user__area-label">신고 사유</p>
                    <TextArea borderColor="lightGray" textcount={0} />
                </div>
            </div>
 
            <div className="report-user__footer">
                <CustomButton name="신고하기" color="#fd5d35" fontColor="#ffffff" size="lg" />
            </div>
        </div>
    )
}
 
export default CustomReportUser