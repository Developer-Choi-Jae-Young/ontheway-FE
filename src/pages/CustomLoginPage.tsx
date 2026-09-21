import CustomLogo from '../components/CustomLogo'
import TextField from '../components/TextField'
import CustomCheckbox from '../components/CustomCheckbox'
import CustomButton from '../components/CustomButton'
import './CustomLoginPage.css'
import { Link } from 'react-router-dom'
 
function CustomLoginPage() {
    return (
        <div className="login-page">
            <CustomLogo className="login-page__logo" />
 
            <div className="login-page__id">
                <TextField
                    label="아이디"
                    height={56}
                    borderColor="lightGray"
                    backgroundColor="white"
                    leftLocationIcon={false}
                    placeholder="아이디를 입력해주세요."
                    timer={false}
                    rightButton="none"
                />
            </div>
 
            <div className="login-page__pw">
                <TextField
                    label="비밀번호"
                    height={56}
                    borderColor="lightGray"
                    backgroundColor="white"
                    leftLocationIcon={false}
                    placeholder="비밀번호를 입력해주세요."
                    timer={false}
                    rightButton="eye"
                />
            </div>
 
            <div className="login-page__auto">
                <CustomCheckbox label="자동로그인" size="sm" />
            </div>
 
            <div className="login-page__button">
                <CustomButton name="로그인" color="#fd5d35" fontColor="#ffffff" size="lg" />
            </div>
 
            <div className="login-page__links">
                <Link to={'/find/id'}>아이디 찾기</Link>
                <span className="login-page__divider"></span>
                <Link to={'/find/pw'}>비밀번호 찾기</Link>
                <span className="login-page__divider"></span>
                <Link to={'/agree'}>회원가입</Link>
            </div>
        </div>
    )
}
 
export default CustomLoginPage