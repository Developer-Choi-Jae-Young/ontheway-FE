import CustomLogo from '../components/CustomLogo'
import CustomFilterBar from '../components/CustomFilterBar'
import CustomDeliveryCard from '../components/CustomDeliveryCard'
import CustomFab from '../components/CustomFab'
import CustomNavBar from '../components/CustomNavBar'
import './CustomHomePage.css'
import CustomDiv from '../components/CustomDiv'
import { useNavigate } from 'react-router-dom'
 
function CustomHomePage() {
    const navigate = useNavigate();

    return (
        <CustomDiv backgroundColor={'#f3f4f6'} headerElement={<div className="home-page__header">
                <CustomLogo className="home-page__logo" />
            </div>} footerElement={<CustomNavBar />}>
            <CustomFilterBar className="home-page__filters" />
            <div className="home-page__body">
                <div className="home-page__cards">
                    <CustomDeliveryCard
                        id={1}
                        count={6}
                        startAddr="서울 마포구 성미산로 25"
                        endAddr="서울 강남구 테헤란로 123"
                        date="2026.09.17"
                        startTime="08:00"
                        endTime="09:00"
                        price="8,000"
                    />
                    <CustomDeliveryCard
                        id={2}
                        count={26}
                        startAddr="인천 연수구 송도과학로 32"
                        endAddr="서울 영등포구 국제금융로 10"
                        date="2026.09.22"
                        startTime="08:00"
                        endTime="10:00"
                        price="20,000"
                    />
                    <CustomDeliveryCard
                        id={3}
                        count={13}
                        startAddr="경기 성남시 분당구 정자일로 120"
                        endAddr="서울 마포구 월드컵로123"
                        date="2026.09.12"
                        startTime="14:00"
                        endTime="16:00"
                        price="12,000"
                    />
                    <CustomDeliveryCard
                        id={4}
                        count={8}
                        startAddr="서울 송파구 올림픽로 300"
                        endAddr="경기 하남시 미사강변대로 100"
                        date="2026.09.25"
                        startTime="10:00"
                        endTime="12:00"
                        price="15,000"
                    />
                    <CustomDeliveryCard
                        id={5}
                        count={4}
                        startAddr="서울 용산구 한강대로 92"
                        endAddr="서울 종로구 세종대로 175"
                        date="2026.09.28"
                        startTime="13:00"
                        endTime="14:00"
                        price="6,000"
                    />
                    <CustomDeliveryCard
                        id={6}
                        count={19}
                        startAddr="경기 수원시 영통구 광교로 145"
                        endAddr="서울 강서구 마곡중앙로 161"
                        date="2026.09.30"
                        startTime="09:00"
                        endTime="11:00"
                        price="18,000"
                    />
                </div>
            </div>
 
            <div className="home-page__fab">
                <CustomFab onClick={() => navigate('/delivery/write')}/>
            </div>
        </CustomDiv>
    )
}
 
export default CustomHomePage