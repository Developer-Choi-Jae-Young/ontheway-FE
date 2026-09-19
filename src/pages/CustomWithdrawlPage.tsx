import CustomTopAppBar from '../components/CustomTopAppBar'
import TextField from '../components/TextField'
import CustomButton from '../components/CustomButton'
import './CustomWithdrawlPage.css'
 
function WarnIcon() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <circle cx="12" cy="12" r="10" fill="#FD5D35" />
            <path d="M12 7.5v5" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
            <circle cx="12" cy="16" r="1.1" fill="#ffffff" />
        </svg>
    )
}
 
function CustomWithdrawalPage() {
    return (
        <div className="withdrawal">
            <CustomTopAppBar variant="centered" title="탈퇴하기" />
 
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
                <TextField
                    label="탈퇴 사유"
                    height={48}
                    borderColor="lightGray"
                    backgroundColor="white"
                    leftLocationIcon={false}
                    placeholder="더 이상 서비스를 이용하지 않아요."
                    timer={false}
                    rightButton="none"
                />
            </div>
 
            <div className="withdrawal__footer">
                <CustomButton name="탈퇴하기" color="#fd5d35" fontColor="#ffffff" size="lg" />
            </div>
        </div>
    )
}
 
export default CustomWithdrawalPage