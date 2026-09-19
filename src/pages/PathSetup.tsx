import './PathSetup.css'
import CustomTopAppBar from '../components/CustomTopAppBar'
import EmptyState from '../components/EmptyState'
import CustomButton from '../components/CustomButton'
import { Circle, MapPin } from '../components/CustomIcon'
import TextField from '../components/TextField'
import TextArea from '../components/TextArea'
import TimeInput from '../components/TimeInput'

function PathXButton() {
    return (
        <button className="x-button">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18" stroke="#BABABA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6 6L18 18" stroke="#BABABA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </button>
    )
}

function PathSetup() {
    const startAddr = '인천 연수구 송도과학로 32'
    const startDetail = '송도테크노파크IT센터 앞'
    const endAddr = '서울 영등포구 국제금융로 10'
    const endDetail = '서울국제금융센터 앞'

    return (
        <div className="path-setup-page">
            <CustomTopAppBar title="경로등록" />

            <div className="recent-post">
                <div className="recent-post-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M3 12C3 13.78 3.52784 15.5201 4.51677 17.0001C5.50571 18.4802 6.91131 19.6337 8.55585 20.3149C10.2004 20.9961 12.01 21.1743 13.7558 20.8271C15.5016 20.4798 17.1053 19.6226 18.364 18.364C19.6226 17.1053 20.4798 15.5016 20.8271 13.7558C21.1743 12.01 20.9961 10.2004 20.3149 8.55585C19.6337 6.91131 18.4802 5.50571 17.0001 4.51677C15.5201 3.52784 13.78 3 12 3C9.48395 3.00947 7.06897 3.99122 5.26 5.74L3 8" stroke="#FD5D35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M3 3V8H8" stroke="#FD5D35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 7V12L16 14" stroke="#FD5D35" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
                <div className="recent-post-text">
                    <div className="recent-post-title">최근 등록한 게시물 불러오기</div>
                    <div className="recent-post-description">이전에 등록한 경로를 불러와 빠르게 작성해보세요.</div>
                </div>
            </div>

            <div className="path-info">
                <div className="path-info-title">경로정보</div>

                <div className="path-route">
                    <div className="path-setup-item">
                        <div className="path-setup-icon start-icon">
                            <Circle width={16} height={16} stroke="#4576F7" />
                            <div className="path-line"></div>
                        </div>
                        <div className="path-setup-content">
                            <div className="path-setup-label">출발지</div>
                            <div className="path-setup-address-box"><span>{startAddr}</span><PathXButton /></div>
                            <div className="path-setup-address-box"><span>{startDetail}</span><PathXButton /></div>
                        </div>
                    </div>

                    <div className="path-setup-item">
                        <div className="path-setup-icon">
                            <MapPin width={16} height={16} stroke="#FD5D35" />
                        </div>
                        <div className="path-setup-content">
                            <div className="path-setup-label">도착지</div>
                            <div className="path-setup-address-box"><span>{endAddr}</span><PathXButton /></div>
                            <div className="path-setup-address-box"><span>{endDetail}</span><PathXButton /></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="registered-route">
                <EmptyState type="route" />
            </div>

            <div className="delivery-section">
                <div className="delivery-title">배송정보</div>

                <TextField label="배송 가능날" height={48} borderColor="gray" backgroundColor="white" leftLocationIcon={false} placeholder="9월22일" timer={false} rightButton="none" />

                <TextField label="희망금액" height={48} borderColor="gray" backgroundColor="white" leftLocationIcon={false} placeholder="20,000원" timer={false} rightButton="none" />

                <div className="delivery-time">
                    <div className="delivery-time-title">예정시간</div>
                    <TimeInput borderColor="gray" backgroundColor="white" />
                </div>

                <div className="delivery-extra">
                    <div className="delivery-extra-title">추가정보</div>
                    <TextArea borderColor="gray" textcount={63} />
                </div>
            </div>

            <div className="path-setup-button">
                <CustomButton name="작성완료" color="#FD5D35" fontColor="#FFFFFF" size="lg" />
            </div>
        </div>
    )
}

export default PathSetup