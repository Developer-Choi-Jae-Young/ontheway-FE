import { useParams } from 'react-router-dom';
import CustomTopAppBar from '../components/CustomTopAppBar'
import CustomProfile from '../components/CustomProfile'
import CustomRouteInfo from '../components/CustomRouteInfo'
import CustomProgressStep, { type Step } from '../components/CustomProgressStep'
import CustomList from '../components/CustomList'
import CustomButton from '../components/CustomButton'
import './CustomRouteDetailPage.css'
import { ChevronDownIcon } from '../components/CustomIcon';
 
// 아직 의뢰 전(매칭대기중) 상태 — 첫 단계에만 택배 아이콘, 나머지는 대기
const STEPS: Step[] = [
    { title: "매칭대기중", description: "의뢰 요청 들어왔어요.", status: "current" },
    { title: "픽업중", description: "아직 진행되지 않았어요.", status: "pending" },
    { title: "배송 대기 중", description: "아직 진행되지 않았어요.", status: "pending" },
    { title: "배송 중", description: "아직 진행되지 않았어요.", status: "pending" },
    { title: "배송 완료 확인 요청", description: "아직 진행되지 않았어요.", status: "pending" },
    { title: "배송완료", description: "아직 진행되지 않았어요.", status: "pending" },
    { title: "배송중단", description: "아직 진행되지 않았어요.", status: "pending" },
]
 
// 게시자가 글을 등록할 때 추가정보란에 입력한 내용 (백엔드에서 받아옴) 근데 이거는 확실치 않습니다. 제가 임의대로 생각해서 해놓은 겁니다.
const extraInfo = "부피가 큰 물품입니다. 픽업 시 연락 부탁드려요."
 
function CustomRouteDetailPage() {
    const { id } = useParams();

    return (
        <div className="route-detail">
            <CustomTopAppBar variant="meta" title="하루님의 가는길" meta="신고" />
 
            <div className="route-detail__body">
                <div className="route-detail__profile">
                    <CustomProfile width={16} height={20} strok="#FD5D35" strokWidth={2} diameter={40} backgroundColor="#FEF1ED" />
                    <div className="route-detail__profile-text">
                        <p className="route-detail__profile-name">하루</p>
                        <p className="route-detail__profile-date">2026.09.17</p>
                    </div>
                    <ChevronDownIcon />
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
 
                <div className="route-detail__extra">
                    <CustomList variant="list03" label="추가정보" />
                    <p className="route-detail__extra-text">{extraInfo}</p>
                </div>
 
                <CustomProgressStep steps={STEPS} />
            </div>
 
            <div className="route-detail__footer">
                <CustomButton name="의뢰하기" color="#fd5d35" fontColor="#ffffff" size="lg" />
            </div>
        </div>
    )
}
 
export default CustomRouteDetailPage