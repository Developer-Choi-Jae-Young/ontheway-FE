import CustomTopAppBar from '../components/CustomTopAppBar'
import CustomProfile from '../components/CustomProfile'
import CustomRouteInfo from '../components/CustomRouteInfo'
import CustomProgressStep, { type Step } from '../components/CustomProgressStep'
import CustomList from '../components/CustomList'
import CustomAccordion from '../components/CustomAccordion'
import CustomButton from '../components/CustomButton'
import './CustomRouteDetailPage_waiting.css'

const STEPS: Step[] = [
    { title: "매칭대기중", description: "의뢰 요청 들어왔어요.", status: "current" },
    { title: "픽업중", description: "아직 진행되지 않았어요.", status: "pending" },
    { title: "배송 대기 중", description: "아직 진행되지 않았어요.", status: "pending" },
    { title: "배송 중", description: "아직 진행되지 않았어요.", status: "pending" },
    { title: "배송 완료 확인 요청", description: "아직 진행되지 않았어요.", status: "pending" },
    { title: "배송완료", description: "아직 진행되지 않았어요.", status: "pending" },
    { title: "배송중단", description: "아직 진행되지 않았어요.", status: "pending" },
]

function ChevronDownIcon(){
    return(
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#33363D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m6 9 6 6 6-6"/>
        </svg>
    )
}

function PackageIcon(){
    return(
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M12 21.9999V11.9999M12 11.9999L3.29 6.9999M12 11.9999L20.71 6.9999M7.5 4.2699L16.5 9.4199M11 21.7299C11.304 21.9054 11.6489 21.9979 12 21.9979C12.3511 21.9979 12.696 21.9054 13 21.7299L20 17.7299C20.3037 17.5545 20.556 17.3024 20.7315 16.9987C20.9071 16.6951 20.9996 16.3506 21 15.9999V7.9999C20.9996 7.64918 20.9071 7.30471 20.7315 7.00106C20.556 6.69742 20.3037 6.44526 20 6.2699L13 2.2699C12.696 2.09437 12.3511 2.00195 12 2.00195C11.6489 2.00195 11.304 2.09437 11 2.2699L4 6.2699C3.69626 6.44526 3.44398 6.69742 3.26846 7.00106C3.09294 7.30471 3.00036 7.64918 3 7.9999V15.9999C3.00036 16.3506 3.09294 16.6951 3.26846 16.9987C3.44398 17.3024 3.69626 17.5545 4 17.7299L11 21.7299Z" stroke="#FD5D35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}

function TruckIcon(){
    return(
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M14 18V6C14 5.46957 13.7893 4.96086 13.4142 4.58579C13.0391 4.21071 12.5304 4 12 4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V17C2 17.2652 2.10536 17.5196 2.29289 17.7071C2.48043 17.8946 2.73478 18 3 18H5M5 18C5 19.1046 5.89543 20 7 20C8.10457 20 9 19.1046 9 18M5 18C5 16.8954 5.89543 16 7 16C8.10457 16 9 16.8954 9 18M15 18H9M15 18C15 19.1046 15.8954 20 17 20C18.1046 20 19 19.1046 19 18M15 18C15 16.8954 15.8954 16 17 16C18.1046 16 19 16.8954 19 18M19 18H21C21.2652 18 21.5196 17.8946 21.7071 17.7071C21.8946 17.5196 22 17.2652 22 17V13.35C21.9996 13.1231 21.922 12.903 21.78 12.726L18.3 8.376C18.2065 8.25888 18.0878 8.16428 17.9528 8.0992C17.8178 8.03412 17.6699 8.00021 17.52 8H14" stroke="#FD5D35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}

function WalletIcon(){
    return(
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M19 7V4C19 3.73478 18.8946 3.48043 18.7071 3.29289C18.5196 3.10536 18.2652 3 18 3H5C4.46957 3 3.96086 3.21071 3.58579 3.58579C3.21071 3.96086 3 4.46957 3 5C3 5.53043 3.21071 6.03914 3.58579 6.41421C3.96086 6.78929 4.46957 7 5 7H20C20.2652 7 20.5196 7.10536 20.7071 7.29289C20.8946 7.48043 21 7.73478 21 8V12M21 12H18C17.4696 12 16.9609 12.2107 16.5858 12.5858C16.2107 12.9609 16 13.4696 16 14C16 14.5304 16.2107 15.0391 16.5858 15.4142C16.9609 15.7893 17.4696 16 18 16H21C21.2652 16 21.5196 15.8946 21.7071 15.7071C21.8946 15.5196 22 15.2652 22 15V13C22 12.7348 21.8946 12.4804 21.7071 12.2929C21.5196 12.1054 21.2652 12 21 12Z" stroke="#FD5D35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M3 5V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H20C20.2652 21 20.5196 20.8946 20.7071 20.7071C20.8946 20.5196 21 20.2652 21 20V16" stroke="#FD5D35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}

function CheckIcon(){
    return(
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M9.99984 18.3332C14.6022 18.3332 18.3332 14.6022 18.3332 9.99984C18.3332 5.39746 14.6022 1.6665 9.99984 1.6665C5.39746 1.6665 1.6665 5.39746 1.6665 9.99984C1.6665 14.6022 5.39746 18.3332 9.99984 18.3332Z" fill="#FEC7B8" stroke="#FEC7B8" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M13.3332 7.5L8.74984 12.0833L6.6665 10" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}

function RequestInfo(){
    return(
        <div className="request-info">
            <section>
                <h4><PackageIcon/>물품정보</h4>
                <div className="request-info__row">
                    <span>물품명</span>
                    <p>노트북 파우치</p>
                </div>
                <div className="request-info__row">
                    <span>물품 전달</span>
                    <p>2026.09.21 18:30</p>
                </div>
                <div className="request-info__row">
                    <span>상세 설명</span>
                    <p>13인치 노트북파우치입니다.</p>
                </div>
            </section>

            <section>
                <h4><TruckIcon/>경로정보</h4>
                <div className="request-info__row">
                    <span>물건수령지</span>
                    <p>인천 연수구 송도과학로 32</p>
                </div>
                <div className="request-info__row">
                    <span>배송목적지</span>
                    <p>서울 영등포구 국제금융로 10</p>
                </div>
                <div className="request-info__row">
                    <span>배송 날짜</span>
                    <p>2026.09.22 09:00 - 10:00</p>
                </div>
            </section>

            <section>
                <h4><WalletIcon/>결제정보</h4>
                <div className="request-info__row">
                    <span>결제시점</span>
                    <p>선결제</p>
                </div>
            </section>

            <div className="request-info__agree">
                <CheckIcon/>
                <p>위 허용금지 물품 기준과 포장 책임 범위를<br/>확인하였으며 동의하였습니다.</p>
            </div>
        </div>
    )
}

function CustomRouteDetailPage_waiting(){
    return(
        <div className="route-request">
            <CustomTopAppBar variant="meta" title="하루님의 가는길" meta="신고"/>

            <div className="route-request__body">
                <div className="route-request__profile">
                    <CustomProfile width={16} height={20} strok="#FD5D35" strokWidth={2} diameter={40} backgroundColor="#FEF1ED"/>
                    <div className="route-request__profile-text">
                        <p>하루</p>
                        <span>2026.09.17</span>
                    </div>
                    <ChevronDownIcon/>
                </div>

                <CustomRouteInfo
                    startAddr="인천 연수구 송도과학로 32"
                    startDetail="송도테크노파크IT센터 앞"
                    endAddr="서울 영등포구 국제금융로 10"
                    endDetail="서울국제금융센터 앞"
                    date="9월22일(화)"
                    time="08:00 - 10:00"
                    price="20,000원"
                />

                <div className="route-request__extra">
                    <CustomList variant="list03" label="추가정보"/>
                    <p>자차 이용합니다! 퇴근하면서 이동하는 경로라 시간 맞으면 바로 전달 가능해요. 작은 물품은 여러 개도 가능합니다.</p>
                </div>

                <CustomProgressStep steps={STEPS}/>

                <div className="route-detail-waiting__requests">
                    <h3>배송 의뢰요청</h3>

                    <CustomAccordion clientName="퇴근길" itemName="2026.08.17" price="15,000">
                        <RequestInfo/>
                    </CustomAccordion>

                    <CustomAccordion clientName="오렌지" itemName="2026.09.19" price="10,000">
                        <RequestInfo/>
                    </CustomAccordion>

                    <CustomAccordion clientName="동네한바퀴" itemName="2026.09.22" price="5,000">
                        <RequestInfo/>
                    </CustomAccordion>
                </div>
            </div>

            <div className="route-request__footer">
                <CustomButton name="거절하기" color="#FEF1ED" fontColor="#FD5D35" size="md"/>
                <CustomButton name="수락하기" color="#FD5D35" fontColor="#FFFFFF" size="md"/>
            </div>
        </div>
    )
}

export default CustomRouteDetailPage_waiting