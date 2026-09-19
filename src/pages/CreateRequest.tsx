import './CreateRequest.css'
import CustomTopAppBar from '../components/CustomTopAppBar'
import CustomButton from '../components/CustomButton'
import TextField from '../components/TextField'
import TextArea from '../components/TextArea'
import TimeInput from '../components/TimeInput'
import { Circle, MapPin } from '../components/CustomIcon'
import { Info2 } from '../components/Info'
import CustomCheckbox from '../components/CustomCheckbox'

function PathXButton() {
    return (
        <button className="create-request-x">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18" stroke="#BABABA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6 6L18 18" stroke="#BABABA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </button>
    )
}

function CreateRequest() {
    return (
        <div className="create-request-page">
            <CustomTopAppBar title="배송의뢰"/>

            <div className="create-request-content">
                <section className="request-section">
                    <div className="request-section-title">경로정보</div>

                    <div className="request-route">
                        <div className="request-route-item">
                            <div className="request-route-icon"><Circle width={16} height={16} stroke="#4576F7"/></div>
                            <div className="request-route-content">
                                <div className="request-label">물건수령지</div>
                                <div className="request-address"><span>인천 연수구 송도과학로 32</span><PathXButton/></div>
                                <div className="request-address"><span>송도테크노파크IT센터 앞</span><PathXButton/></div>
                            </div>
                        </div>

                        <div className="request-route-item">
                            <div className="request-route-icon"><MapPin width={16} height={16} stroke="#FD5D35"/></div>
                            <div className="request-route-content">
                                <div className="request-label">배송목적지</div>
                                <div className="request-address"><span>서울 영등포구 국제금융로 10</span><PathXButton/></div>
                                <div className="request-address"><span>서울국제금융센터 앞</span><PathXButton/></div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="request-section">
                    <div className="request-section-title">물품정보</div>
                    <TextField label="물품명" height={48} borderColor="gray" backgroundColor="white" leftLocationIcon={false} placeholder="노트북 파우치" timer={false} rightButton="none"/>
                    <div className="request-textarea">
                        <div className="request-label">추가정보</div>
                        <TextArea borderColor="gray" textcount={63}/>
                    </div>
                </section>

                <section className="request-section">
                    <div className="request-section-title">수령일</div>
                    <TextField label="" height={48} borderColor="gray" backgroundColor="white" leftLocationIcon={false} placeholder="9월21일" timer={false} rightButton="none"/>
                    <div className="request-time">
                        <div className="request-label">수령시간</div>
                        <TimeInput borderColor="gray" backgroundColor="white"/>
                    </div>
                </section>

                <section className="request-section">
                    <div className="request-section-title">배송정보</div>
                    <TextField label="가능날" height={48} borderColor="gray" backgroundColor="white" leftLocationIcon={false} placeholder="9월22일" timer={false} rightButton="none"/>
                    <div className="request-time">
                        <div className="request-label">배송도착시간</div>
                        <TimeInput borderColor="gray" backgroundColor="white"/>
                    </div>
                    <TextField label="배송비" height={48} borderColor="gray" backgroundColor="white" leftLocationIcon={false} placeholder="15,000원" timer={false} rightButton="none"/>
                </section>

                <section className="request-section payment-section">
                    <div className="request-section-title">결제방식</div>
                    <div className="request-label">결제 시점</div>
                    <div className="payment-buttons">
                        <button className="payment-button active">선결제</button>
                        <button className="payment-button">후불결제</button>
                    </div>
                </section>

                <Info2 content={<>· 금지물품 : 위험물, 마약류, 현금, 귀중품, 의약품<br/>· 포장책임 : 물품 포장 및 파손 방지 책임은 의뢰인에게 있습니다.</>}/>

                <CustomCheckbox
                    label="위 고지사항을 확인하고 동의합니다."
                    defaultChecked={true}
                    size="lg"
                />

                <div className="create-request-button">
                    <CustomButton name="작성완료" color="#FD5D35" fontColor="#FFFFFF" size="lg"/>
                </div>
            </div>
        </div>
    )
}

export default CreateRequest