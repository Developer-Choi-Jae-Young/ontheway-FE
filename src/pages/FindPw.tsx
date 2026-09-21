import './FindPw.css'

import TextField from '../components/TextField.tsx'
import CustomButton from '../components/CustomButton.tsx'
import CustomTopAppBar from '../components/CustomTopAppBar'
import CustomDiv from '../components/CustomDiv.tsx'

function FindPw(){
    return(
        <>
        <CustomDiv>
            <CustomTopAppBar
                title="비밀번호 찾기"
                variant="large"
                subtitle="가입하신 비밀번호를 확인하실 수 있습니다."
                onBack={() => window.history.back()}
                />
            <div className='find-pw-page-hug'>
                <div className='find-pw-input-section'>
                    <div className="email-input">
                        <TextField label="아이디" height={48} borderColor="lightGray" backgroundColor="white" leftLocationIcon={false} placeholder="Label" timer={false} rightButton="none" />
                    </div>
                    <div className="email-input">
                        <TextField label="이메일" height={48} borderColor="lightGray" backgroundColor="white" leftLocationIcon={false} placeholder="Label" timer={false} rightButton="none" />
                    </div>
                </div>

                <div className="find-pw-button">
                    <CustomButton name="비밀번호 찾기"color="#fd5d35"fontColor="#ffffff"size="lg"/>
                </div>
            </div>

            </CustomDiv>
            </>
    )
}

export default FindPw