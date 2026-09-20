import './RequestDetail.css'
import CustomTopAppBar from '../components/CustomTopAppBar'
import CustomProfile from '../components/CustomProfile'
import CustomRouteInfo from '../components/CustomRouteInfo'
import CustomButton from '../components/CustomButton'

function ChevronDownIcon(){
    return(
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M5 7.5L10 12.5L15 7.5" stroke="#4B5663" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}

function ClockIcon(){
    return(
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10.0003 4.99984V9.99984H13.3337M18.3337 9.99984C18.3337 14.6022 14.6027 18.3332 10.0003 18.3332C5.39795 18.3332 1.66699 14.6022 1.66699 9.99984C1.66699 5.39746 5.39795 1.6665 10.0003 1.6665C14.6027 1.6665 18.3337 5.39746 18.3337 9.99984Z" stroke="#6A6A67" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}

function WalletIcon(){
    return(
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M15.8333 5.83333V3.33333C15.8333 3.11232 15.7455 2.90036 15.5893 2.74408C15.433 2.5878 15.221 2.5 15 2.5H4.16667C3.72464 2.5 3.30072 2.67559 2.98816 2.98816C2.67559 3.30072 2.5 3.72464 2.5 4.16667C2.5 4.60869 2.67559 5.03262 2.98816 5.34518C3.30072 5.65774 3.72464 5.83333 4.16667 5.83333H16.6667C16.8877 5.83333 17.0996 5.92113 17.2559 6.07741C17.4122 6.23369 17.5 6.44565 17.5 6.66667V10M17.5 10H15C14.558 10 14.134 10.1756 13.8215 10.4882C13.5089 10.8007 13.3333 11.2246 13.3333 11.6667C13.3333 12.1087 13.5089 12.5326 13.8215 12.8452C14.134 13.1577 14.558 13.3333 15 13.3333H17.5C17.721 13.3333 17.933 13.2455 18.0893 13.0893C18.2455 12.933 18.3333 12.721 18.3333 12.5V10.8333C18.3333 10.6123 18.2455 10.4004 18.0893 10.2441C17.933 10.0878 17.721 10 17.5 10Z" stroke="#6A6A67" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M2.5 4.16675V15.8334C2.5 16.2754 2.67559 16.6994 2.98816 17.0119C3.30072 17.3245 3.72464 17.5001 4.16667 17.5001H16.6667C16.8877 17.5001 17.0996 17.4123 17.2559 17.256C17.4122 17.0997 17.5 16.8878 17.5 16.6667V13.3334" stroke="#6A6A67" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}

function CheckIcon(){
    return(
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M10.0003 18.3332C14.6027 18.3332 18.3337 14.6022 18.3337 9.99984C18.3337 5.39746 14.6027 1.6665 10.0003 1.6665C5.39795 1.6665 1.66699 5.39746 1.66699 9.99984C1.66699 14.6022 5.39795 18.3332 10.0003 18.3332Z" fill="#FEC7B8" stroke="#FEC7B8" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M13.3337 7.5L8.75033 12.0833L6.66699 10" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}

function RequestDetail(){
    return(
        <div className="request-detail">
            <CustomTopAppBar title="배송의뢰"/>

            <div className="request-detail__body">
                <div className="request-detail__profile">
                    <CustomProfile width={16} height={20} strok="#FD5D35" strokWidth={2} diameter={40} backgroundColor="#FEF1ED"/>
                    <div className="request-detail__profile-text">
                        <div className="request-detail__name">하루</div>
                        <div className="request-detail__date">2026.09.08</div>
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
                    price="15,000원"
                />

                <section className="request-detail__card">
                    <div className="request-detail__title">물품정보</div>

                    <div className="request-detail__product-info">
                        <div className="request-detail__product-item">
                            <ClockIcon/>
                            <div className="request-detail__product-content">
                                <div className="request-detail__product-label">물품명</div>
                                <div className="request-detail__product-value">노트북 파우치</div>
                            </div>
                        </div>

                        <div className="request-detail__product-item">
                            <ClockIcon/>
                            <div className="request-detail__product-content">
                                <div className="request-detail__product-label">추가정보</div>
                                <div className="request-detail__product-value">13인치 노트북파우치입니다.</div>
                            </div>
                        </div>

                        <div className="request-detail__product-item">
                            <ClockIcon/>
                            <div className="request-detail__product-content">
                                <div className="request-detail__product-label">희망 수령 시간</div>
                                <div className="request-detail__product-value">2026.09.21 AM 18:30</div>
                            </div>
                        </div>

                        <div className="request-detail__product-item">
                            <WalletIcon/>
                            <div className="request-detail__product-content">
                                <div className="request-detail__product-label">결제 방식</div>
                                <div className="request-detail__product-value">선불</div>
                            </div>
                        </div>
                    </div>

                    <div className="request-detail__notice">
                        <CheckIcon/>
                        <p>위 허용금지 물품 기준과 포장 책임 범위를<br/>확인하였으며 동의하였습니다.</p>
                    </div>
                </section>
            </div>

            <div className="request-detail__footer">
                <div className="request-detail__buttons">
                    <CustomButton name="삭제하기" color="#FEF1ED" fontColor="#FD5D35" size="md"/>
                    <CustomButton name="수정하기" color="#FD5D35" fontColor="#FFFFFF" size="md"/>
                </div>
            </div>
        </div>
    )
}

export default RequestDetail