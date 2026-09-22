import CustomTopAppBar from '../components/CustomTopAppBar'
import CustomReasonSelect from '../components/CustomReasonSelect'
import CustomButton from '../components/CustomButton'
import './CustomWithdrawlPage.css'
import CustomDiv from '../components/CustomDiv'
import { WarnIcon } from '../components/CustomIcon'

const WITHDRAWAL_REASONS = [
    '서비스 이용 빈도가 낮아요.',
    '다른 서비스를 이용할 예정이에요.',
    '원하는 배송 경로가 부족해요.',
    '서비스가 기대와 달라요.',
    '개인정보 및 안전이 걱정돼요.',
    '기타',
]

function CustomWithdrawalPage() {
    return (
        <CustomDiv>
            <CustomTopAppBar variant="centered" title="탈퇴하기" />
            <div className='withdrawal_content'>
                <div className="withdrawal__body">
                    {/* 탈퇴 전 확인 경고 (이 페이지 전용) */}
                    <div className="withdrawal__warning">
                        <div className="withdrawal__warning-title">
                            <WarnIcon />
                            <strong>탈퇴 전 꼭 확인해주세요.</strong>
                        </div>
                        <ul className="withdrawal__warning-list">
                            <li>회원을 탈퇴하면 모든 계정 정보가 삭제되며, 복구할 수 없습니다.</li>
                            <li>작성한 이동경로, 배송 의뢰, 후기 등 모든 데이터가 삭제됩니다.</li>
                        </ul>
                    </div>
    
                    {/* 탈퇴 사유 */}
                    <div className="withdrawal__reason">
                        <p className="withdrawal__reason-label">탈퇴 사유</p>
                        <CustomReasonSelect options={WITHDRAWAL_REASONS} placeholder="탈퇴 사유를 선택해주세요." />
                    </div>
                </div>
    
                <div className="withdrawal__footer">
                    <CustomButton name="탈퇴하기" color="#fd5d35" fontColor="#ffffff" size="lg" />
                </div>
            </div>
        </CustomDiv>
    )
}
 
export default CustomWithdrawalPage