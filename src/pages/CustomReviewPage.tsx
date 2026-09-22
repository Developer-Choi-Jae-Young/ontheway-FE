import CustomTopAppBar from '../components/CustomTopAppBar'
import CustomTab from '../components/CustomTab'
import CustomReviewCard from '../components/CustomReviewCard'
import CustomProfile from '../components/CustomProfile'
import './CustomReviewPage.css'
import CustomDiv from '../components/CustomDiv'
 
// 화면용 더미 데이터 (나중에 API로 교체)
const REVIEWS = [
    { nickname: '토마토케챱', date: '2026.10.01', rating: 4.0, content: '약속한 시간에 정확히 전달해주셨어요.' },
    { nickname: '동네한바퀴', date: '2026.09.26', rating: 3.5, content: '시간도 잘 지켜주시고, 덕분에 잘 전달했습니다.' },
    { nickname: '오렌지', date: '2026.09.11', rating: 2.0, content: '약속 시간에 연락이 잘 닿지 않아 물품을 전달하는 데 시간이 오래 걸렸어요.' },
    { nickname: '퇴근러', date: '2026.09.01', rating: 2.5, content: '처음 안내받은 내용과 실제 요청 사항이 달라 조금 불편했어요.' },
    { nickname: '퇴근러', date: '2026.09.01', rating: 2.5, content: '처음 안내받은 내용과 실제 요청 사항이 달라 조금 불편했어요.' },
]
 
function CustomReviewPage() {
    return (
        <CustomDiv backgroundColor={'#f3f4f6'}>
            <CustomTopAppBar variant="centered" title="하루님의 후기" />
 
            <div className="review-page__tab">
                <CustomTab tabs={['보낸후기', '받은후기']} />
            </div>
 
            <div className="review-page__list">
                {REVIEWS.map((r, i) => (
                    <CustomReviewCard
                        key={i}
                        profileElement={<CustomProfile width={40} height={20} strok="#FD5D35" strokWidth={2} diameter={40} backgroundColor="#FEF1ED" />}
                        nickname={r.nickname}
                        date={r.date}
                        rating={r.rating}
                        content={r.content}
                    />
                ))}
            </div>
        </CustomDiv>
    )
}
 
export default CustomReviewPage