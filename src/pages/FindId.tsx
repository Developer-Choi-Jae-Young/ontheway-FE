import './FindId.css'

import TextField from '../components/TextField.tsx'
import CustomButton from '../components/CustomButton.tsx'
import CustomTopAppBar from '../components/CustomTopAppBar'
import CustomDiv from '../components/CustomDiv.tsx'
function FindId(){
    return(
        <>
        <CustomDiv>
            <CustomTopAppBar
                variant="large"
                title="아이디 찾기"
                subtitle="가입하신 아이디를 확인하실 수 있습니다."
                />
                
            <div className='find-id-page-hug'>
                <div className="email-input email-send-row">
                    <div className="email-send-field">
                        <div className='w-70'>
                            <TextField height={56} borderColor="lightGray" backgroundColor="white" leftLocationIcon={false} placeholder="이메일을 입력해주세요." timer={false} rightButton="none" />
                        </div>
                        <div className='w-20'>
                            <CustomButton name="인증받기"color="#F2F2F2"fontColor="#000000"size="xsm"/>
                        </div>
                    </div>
                </div>
                <div className="email-input">
                    <TextField label="이메일 인증" height={56} borderColor="lightGray" backgroundColor="white" leftLocationIcon={false} placeholder="1435" timer={true} rightButton="label" />
                </div>
                <div className="find-id-button">
                    <CustomButton name="아이디 찾기"color="#fd5d35"fontColor="#ffffff"size="lg"/>
                </div>
            </div>
        </CustomDiv>
        </>
    )
}

export default FindId