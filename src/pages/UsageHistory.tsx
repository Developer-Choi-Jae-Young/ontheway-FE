import './UsageHistory.css'
import CustomTopAppBar from '../components/CustomTopAppBar'
import CustomFilterChip from '../components/CustomFilterChip'
import CustomDeliveryCard from '../components/CustomDeliveryCard'
import CustomNavBar from '../components/CustomNavBar'
import CustomDiv from '../components/CustomDiv'

function UsageHistory(){
    return(
        <CustomDiv backgroundColor='#F3F4F6' footerElement={<CustomNavBar initialActive="history"/>}>
            <CustomTopAppBar variant="title" title="이용내역"/>

            <div className="usage-history__body">
                <div className="usage-history__filters">
                    <CustomFilterChip label="매칭내역"/>
                    <CustomFilterChip label="의뢰내역"/>
                    <CustomFilterChip label="취소 및 중단"/>
                </div>

                <div className="usage-history__cards">
                    <CustomDeliveryCard id={1} count={6} startAddr="인천 연수구 송도과학로 32" endAddr="서울 영등포구 국제금융로 10" date="2026.09.16" startTime="18:00" endTime="20:00" price="20,000"/>

                    <CustomDeliveryCard id={2} count={6} startAddr="부천시 길주 300" endAddr="서울 마포구 성미산로 25" date="2026.09.17" startTime="14:00" endTime="17:00" price="6,000" review={true}/>

                    <CustomDeliveryCard id={3} count={6} startAddr="수원시 영통구 광교로 145" endAddr="서울 용산구 한강대로 100" date="2026.09.12" startTime="10:00" endTime="12:00" price="5,000"/>
                </div>
            </div>
        </CustomDiv>
    )
}

export default UsageHistory