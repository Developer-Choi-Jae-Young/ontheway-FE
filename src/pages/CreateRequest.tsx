import DaumPostcode, { type Address } from 'react-daum-postcode'
import './CreateRequest.css'
import './postcode.css'
import CustomTopAppBar from '../components/CustomTopAppBar'
import CustomButton from '../components/CustomButton'
import TextField from '../components/TextField'
import TextArea from '../components/TextArea'
import TimeInput from '../components/TimeInput'
import { Circle, MapPin, PathXButton } from '../components/CustomIcon'
import { Info2 } from '../components/Info'
import CustomCheckbox from '../components/CustomCheckbox'
import { useState } from 'react'
import CustomDiv from '../components/CustomDiv'

function RequestXButton({ onClick }: { onClick?: () => void }) {
    return (
        <button
            type="button"
            className='create-request-x'
            onClick={(e) => {
                e.stopPropagation()   // 바깥 주소 칸의 onClick(검색창 열기)으로 전달되지 않게
                onClick?.()
            }}
        >
            <PathXButton/>
        </button>
    )
}

function CreateRequest() {
    const [payment, setPayment] = useState<'pre' | 'post'>('pre')

    // 주소는 사용자가 검색해서 채우므로 상태로 관리
    const [pickupAddr, setPickupAddr] = useState('')
    const [pickupDetail, setPickupDetail] = useState('')
    const [destAddr, setDestAddr] = useState('')
    const [destDetail, setDestDetail] = useState('')

    // 지금 검색 중인 칸: 'pickup' | 'dest' | null(닫힘)
    const [searchTarget, setSearchTarget] = useState<'pickup' | 'dest' | null>(null)

    // 주소 선택 시 → 검색 중이던 칸에 넣고 창 닫기
    const handleComplete = (data: Address) => {
        if (searchTarget === 'pickup') setPickupAddr(data.address)
        if (searchTarget === 'dest') setDestAddr(data.address)
        setSearchTarget(null)
    }

    return (
        <CustomDiv>
        
            <CustomTopAppBar title="배송의뢰"/>

            <div className="create-request-content">
                <section className="request-section">
                    <div className="request-section-title">경로정보</div>

                    <div className="request-route">
                        <div className="request-route-item">
                            <div className="request-route-icon start-icon">
                                <Circle width={16} height={16} stroke="#4576F7"/>
                                <div className="request-line"></div>
                            </div>

                            <div className="request-route-content">
                                <div className="request-label">물건수령지</div>

                                {/* 칸을 누르면 주소 검색이 열림, X는 비우기 */}
                                <div className="request-address" onClick={() => setSearchTarget('pickup')}>
                                    <span className={pickupAddr ? '' : 'placeholder'}>{pickupAddr || '물건수령지를 검색해주세요'}</span>
                                    <RequestXButton onClick={() => setPickupAddr('')}/>
                                </div>

                                {/* 상세 주소는 직접 입력 */}
                                <div className="request-address">
                                    <input value={pickupDetail} onChange={(e) => setPickupDetail(e.target.value)} placeholder="상세 주소 (예: 건물 앞)"/>
                                    <RequestXButton onClick={() => setPickupDetail('')}/>
                                </div>
                            </div>
                        </div>

                        <div className="request-route-item">
                            <div className="request-route-icon">
                                <MapPin width={16} height={16} stroke="#FD5D35"/>
                            </div>

                            <div className="request-route-content">
                                <div className="request-label">배송목적지</div>

                                <div className="request-address" onClick={() => setSearchTarget('dest')}>
                                    <span className={destAddr ? '' : 'placeholder'}>{destAddr || '배송목적지를 검색해주세요'}</span>
                                    <RequestXButton onClick={() => setDestAddr('')}/>
                                </div>

                                <div className="request-address">
                                    <input value={destDetail} onChange={(e) => setDestDetail(e.target.value)} placeholder="상세 주소 (예: 건물 앞)"/>
                                    <RequestXButton onClick={() => setDestDetail('')}/>
                                </div>
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
                    <TextField label="가는날" height={48} borderColor="gray" backgroundColor="white" leftLocationIcon={false} placeholder="9월22일" timer={false} rightButton="none"/>

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
                        <button className={`payment-button ${payment === 'pre' ? 'active' : ''}`} onClick={() => setPayment('pre')}>선결제</button>
                        <button className={`payment-button ${payment === 'post' ? 'active' : ''}`} onClick={() => setPayment('post')}>후불결제</button>
                    </div>
                </section>

                <Info2 content={
                    <>
                        <div className="info-line"><span>ㆍ</span><p>금지물품 : 위험물, 마약류, 현금, 귀중품, 의약품</p></div>
                        <div className="info-line"><span>ㆍ</span><p>포장책임 : 물품 포장 및 파손 방지 책임은 의뢰인에게 있습니다.</p></div>
                    </>
                }/>

                <CustomCheckbox label="위 고지사항을 확인하고 동의합니다." defaultChecked={true} size="sm"/>

                <div className="create-request-button">
                    <CustomButton name="작성완료" color="#FD5D35" fontColor="#FFFFFF" size="lg"/>
                </div>
            </div>

            {/* 주소 검색 오버레이 — searchTarget이 있을 때만 */}
            {searchTarget && (
                <div className="postcode-overlay" onClick={() => setSearchTarget(null)}>
                    <div className="postcode-panel" onClick={(e) => e.stopPropagation()}>
                        <div className="postcode-header">
                            <span>{searchTarget === 'pickup' ? '물건수령지' : '배송목적지'} 검색</span>
                            <RequestXButton onClick={() => setSearchTarget(null)}/>
                        </div>
                        <DaumPostcode onComplete={handleComplete} style={{ flex: 1 }}/>
                    </div>
                </div>
            )}
        </CustomDiv>
    )
}

export default CreateRequest