import CustomTopAppBar from '../components/CustomTopAppBar'
import CustomProfile from '../components/CustomProfile'
import TextField from '../components/TextField'
import DateInput from '../components/DateInput'
import CustomButton from '../components/CustomButton'
import './CustomProfileEditPage.css'
import CustomDiv from '../components/CustomDiv';
import { CameraIcon } from '../components/CustomIcon'
 
function CustomProfileEditPage() {
    return (
        <CustomDiv backgroundColor='#FFFFFF'>
            <CustomTopAppBar variant="centered" title="하루님의 프로필" />
 
            <div className="profile__body">
                {/* 프로필 사진 + 카메라 배지 */}
                <div className="profile__avatar">
                    <CustomProfile width={36} height={45} strok="#FD5D35" strokWidth={2} diameter={90} backgroundColor="#FEF1ED" />
                    <button className="profile__camera" aria-label="사진 변경">
                        <CameraIcon />
                    </button>
                </div>
 
                {/* 아이디 (수정 불가) */}
                <TextField label="아이디" height={56} borderColor="none" backgroundColor="gray"
                    leftLocationIcon={false} placeholder="아이디" timer={false} rightButton="none"
                    defaultValue="haru27" disabled />
 
                {/* 생년월일 */}
                <DateInput label="생년월일" borderColor="lightGray" defaultValue="1998.04.17" />
 
                {/* 이메일 + 인증받기 */}
                <div className="profile__row">
                    <TextField label="이메일" height={56} borderColor="lightGray" backgroundColor="white"
                        leftLocationIcon={false} placeholder="이메일을 입력해주세요." timer={false} rightButton="none"
                        defaultValue="haru27@example.com" />
                    <div className="profile-edit__side-btn">인증받기</div>
                </div>
 
                {/* 비밀번호 */}
                <TextField label="현재 비밀번호" height={56} borderColor="lightGray" backgroundColor="white"
                    leftLocationIcon={false} placeholder="현재 비밀번호를 입력해주세요." timer={false} rightButton="eye"
                />
 
                {/* 새 비밀번호 */}
                <TextField label="새 비밀번호" height={56} borderColor="lightGray" backgroundColor="white"
                    leftLocationIcon={false} placeholder="새 비밀번호를 입력해주세요." timer={false} rightButton="eye"
                    helperText="8~15자리이내"/>

                {/* 새 비밀번호 확인*/}
                <TextField label="새 비밀번호 확인" height={56} borderColor="lightGray" backgroundColor="white"
                    leftLocationIcon={false} placeholder="새 비밀번호를 입력해주세요." timer={false} rightButton="eye"
                    helperText="비밀번호 일치"/>
 
                {/* 닉네임 */}
                <TextField label="닉네임" height={56} borderColor="lightGray" backgroundColor="white"
                    leftLocationIcon={false} placeholder="닉네임을 입력해주세요." timer={false} rightButton="none"
                    helperText="7자리 이내" defaultValue="하루" />
            </div>
 
            <div className="profile__footer">
                <CustomButton name="작성완료" color="#fd5d35" fontColor="#ffffff" size="lg" />
            </div>
        </CustomDiv>
    )
}
 
export default CustomProfileEditPage