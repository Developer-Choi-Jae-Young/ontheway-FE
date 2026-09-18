import './FindId.css'


import TextField from '../components/TextField.tsx'
import CustomButton from '../components/CustomButton.tsx'

function FindId(){
    return(
        <div className="find-id-page">
            <div className='find-id-page-hug'>
                <h1>뒤로가기버튼</h1>
                <div className="findid">
                    <h1 id="findid-text">아이디찾기</h1>
                    <p>가입하신 아이디를 확인하실 수 있습니다.</p>
                </div>
            

                <div className="email-input">
                    <p>이메일</p>
                    <TextField height={48}borderColor="lightGray"backgroundColor="white"leftLocationIcon={false}placeholder="Label"timer={false}rightButton="label"/>
                </div>
                <div className="email-input">
                    <p>이메일 인증</p>
                    <TextField height={48}borderColor="lightGray"backgroundColor="white"leftLocationIcon={false}placeholder="Label"timer={true}rightButton="label"/>
                </div>
                <div className="find-id-button">
                    <CustomButton name="아이디 찾기"color="#fd5d35"fontColor="#ffffff"size="lg"/>
                </div>
            </div>

            </div>
    )
}

export default FindId