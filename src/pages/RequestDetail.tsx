import './RequestDetail.css'
import CustomTopAppBar from '../components/CustomTopAppBar'
import CustomProfile from '../components/CustomProfile'
import CustomRouteInfo from '../components/CustomRouteInfo'
import CustomButton from '../components/CustomButton'
import { CheckIcon, ChevronDownIcon, ClockIcon, WalletIcon } from '../components/CustomIcon'

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