import { useState } from 'react'
import './CustomFaq.css'
import { TruckIcon, MapPinIcon, MegaphoneIcon } from './CustomIcon'
import chevronDown from '../assets/faq/chevron-down.svg'
import chevronUp from '../assets/faq/chevron-up.svg'
import filePenLine from '../assets/faq/file-pen-line.svg'

interface FaqItem {
    icon: React.ReactNode
    question: string
    answer: string
}

const FAQ_ITEMS: FaqItem[] = [
    {
        icon: <TruckIcon />,
        question: '배송 의뢰는 어떻게 등록하나요?',
        answer: "먼저, '내 게시글'탭에서 '배송 의뢰' 게시글을 먼저 등록합니다. 홈에서 원하는 이동 경로 게시글을 선택한 뒤 '의뢰하기'를 눌러 등록해둔 '배송의뢰' 게시글을 선택합니다.",
    },
    {
        icon: <MapPinIcon />,
        question: '이동 경로는 어떻게 등록하나요?',
        answer: "홈 화면 오른쪽 아래의 '+' 버튼에서 '경로등록'을 선택합니다. 출발지와 도착지를 검색해 고르고, 배송 가능한 날짜와 예정시간, 희망금액을 입력한 뒤 '작성완료'를 누르면 등록됩니다.",
    },
    {
        icon: <img src={filePenLine} alt="" />,
        question: '배송 의뢰 내용을 수정할 수 있나요?',
        answer: "'내 게시글'탭에서 수정할 배송 의뢰를 열고 '수정하기'를 누르면 됩니다. 다만 배송자와 매칭이 끝난 뒤에는 물품과 경로 정보를 바꿀 수 없습니다. 내용을 바꿔야 한다면 의뢰를 취소하고 다시 등록해주세요.",
    },
    {
        icon: <MegaphoneIcon stroke={'#33363D'} />,
        question: '배송을 취소하려면 어떻게 하나요?',
        answer: "매칭 전이라면 '내 게시글'탭에서 해당 의뢰를 바로 취소할 수 있습니다. 매칭 후에는 상대방에게 취소 사유가 전달되며, 배송이 시작된 뒤의 취소는 '이용내역'에서 배송 중단을 신청해주세요.",
    },
]

function CustomFaq() {
    // 열려 있는 항목의 번호 (하나씩만 열린다)
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    return (
        <div className="faq">
            <div className="faq__header">FAQ</div>

            {FAQ_ITEMS.map((item, index) => {
                const isOpen = index === openIndex

                return (
                    <div className="faq__item" key={item.question}>
                        <button
                            type="button"
                            className="faq__question"
                            onClick={() => setOpenIndex(isOpen ? null : index)}
                            aria-expanded={isOpen}
                        >
                            <span className="faq__icon">{item.icon}</span>
                            <span className="faq__question-text">{item.question}</span>
                            <img className="faq__chevron" src={isOpen ? chevronUp : chevronDown} alt="" />
                        </button>

                        {isOpen && <p className="faq__answer">{item.answer}</p>}
                    </div>
                )
            })}
        </div>
    )
}

export default CustomFaq
