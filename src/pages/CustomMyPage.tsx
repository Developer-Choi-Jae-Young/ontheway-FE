import CustomTopAppBar from '../components/CustomTopAppBar'
import CustomProfile from '../components/CustomProfile'
import CustomList from '../components/CustomList'
import CustomNavBar from '../components/CustomNavBar'
import './CustomMyPage.css'
import { ChevronDownIcon, ChevronRightIcon, EditIcon, LogoutIcon, MapPinIcon, MegaphoneIcon, ThumbsUpIcon, TruckIcon } from '../components/CustomIcon'
import CustomDiv from '../components/CustomDiv'
import { useNavigate } from 'react-router-dom'
 
function CustomMyPage() {
    const navigate = useNavigate();

    return (
        <CustomDiv backgroundColor={'#F3F4F6'} footerElement={<CustomNavBar initialActive="my" />}>
            <CustomTopAppBar variant="title" title="마이" />
 
            <div className="mypage__body">
                {/* 프로필 카드 — 펼침이 아니라 이동(오른쪽 화살표)이라 이 페이지에서 직접 구성 */}
                <button className="mypage__profile" onClick={() => navigate('/my/profile')}>
                    <div>
                        <CustomProfile width={40} height={20} strok="#FD5D35" strokWidth={2} diameter={40} backgroundColor="#FEF1ED" />
                    </div>
                    <div className="mypage__profile-text">
                        <p className="mypage__profile-name">하루</p>
                        <p className="mypage__profile-date">2026.09.08</p>
                    </div>
                    <ChevronRightIcon />
                </button>
 
                {/* 후기 */}
                <div className="mypage__section">
                    <CustomList variant="list03" label="후기" />
                    <CustomList variant="list01" label="후기 관리" icon={<ThumbsUpIcon />} onClick={() => navigate('/my/review')}/>
                </div>
 
                {/* FAQ */}
                <div className="mypage__section">
                    <CustomList variant="list03" label="FAQ" />
                    <CustomList variant="list01" label="배송의뢰" icon={<TruckIcon />} trailing={<ChevronDownIcon />} />
                    <CustomList variant="list01" label="이동경로" icon={<MapPinIcon />} trailing={<ChevronDownIcon />} />
                    <CustomList variant="list01" label="의뢰 수정" icon={<EditIcon />} trailing={<ChevronDownIcon />} />
                    <CustomList variant="list01" label="배송 중단" icon={<MegaphoneIcon stroke={'#33363D'} />} trailing={<ChevronDownIcon />} />
                </div>
 
                {/* 계정관리 */}
                <div className="mypage__section">
                    <CustomList variant="list03" label="계정관리" />
                    <CustomList variant="list01" label="로그아웃" trailing={<LogoutIcon />} onClick={() => confirm('정말 로그아웃 하시겠습니까?')}/>
                    <CustomList variant="list01" label="회원탈퇴" onClick={() => navigate('/with-draw')}/>
                </div>
            </div>
        </CustomDiv>
    )
}
 
export default CustomMyPage