import CustomTopAppBar from '../components/CustomTopAppBar'
import CustomProfile from '../components/CustomProfile'
import CustomList from '../components/CustomList'
import CustomNavBar from '../components/CustomNavBar'
import './CustomMyPage.css'
import CustomProfileCard from '../components/CustomProfileCard'
 
/* 이 페이지에서만 쓰는 아이콘들 — CustomIcon에 추가하지 않고 여기서 인라인 SVG로 사용 */
const ICON = { w: 24, h: 24, stroke: "#33363D", sw: 2 }
 
function ThumbsUpIcon() {
    return (
        <svg width={ICON.w} height={ICON.h} viewBox="0 0 24 24" fill="none"
            stroke={ICON.stroke} strokeWidth={ICON.sw} strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 10v12" />
            <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2a3.13 3.13 0 0 1 3 3.88Z" />
        </svg>
    )
}
 
function TruckIcon() {
    return (
        <svg width={ICON.w} height={ICON.h} viewBox="0 0 24 24" fill="none"
            stroke={ICON.stroke} strokeWidth={ICON.sw} strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
            <path d="M15 18H9" />
            <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
            <circle cx="17" cy="18" r="2" />
            <circle cx="7" cy="18" r="2" />
        </svg>
    )
}
 
function MapPinIcon() {
    return (
        <svg width={ICON.w} height={ICON.h} viewBox="0 0 24 24" fill="none"
            stroke={ICON.stroke} strokeWidth={ICON.sw} strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
            <circle cx="12" cy="10" r="3" />
        </svg>
    )
}
 
function EditIcon() {
    return (
        <svg width={ICON.w} height={ICON.h} viewBox="0 0 24 24" fill="none"
            stroke={ICON.stroke} strokeWidth={ICON.sw} strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
            <path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z" />
        </svg>
    )
}
 
function MegaphoneIcon() {
    return (
        <svg width={ICON.w} height={ICON.h} viewBox="0 0 24 24" fill="none"
            stroke={ICON.stroke} strokeWidth={ICON.sw} strokeLinecap="round" strokeLinejoin="round">
            <path d="m3 11 18-5v12L3 14v-3z" />
            <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
        </svg>
    )
}
 
function ChevronDownIcon() {
    return (
        <svg width={ICON.w} height={ICON.h} viewBox="0 0 24 24" fill="none"
            stroke={ICON.stroke} strokeWidth={ICON.sw} strokeLinecap="round" strokeLinejoin="round">
            <path d="m6 9 6 6 6-6" />
        </svg>
    )
}
 
function ChevronRightIcon() {
    return (
        <svg width={ICON.w} height={ICON.h} viewBox="0 0 24 24" fill="none"
            stroke={ICON.stroke} strokeWidth={ICON.sw} strokeLinecap="round" strokeLinejoin="round">
            <path d="m9 18 6-6-6-6" />
        </svg>
    )
}
 
function LogoutIcon() {
    return (
        <svg width={ICON.w} height={ICON.h} viewBox="0 0 24 24" fill="none"
            stroke={ICON.stroke} strokeWidth={ICON.sw} strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
            <path d="m16 17 5-5-5-5" />
            <path d="M21 12H9" />
        </svg>
    )
}
 
function CustomMyPage() {
    return (
        <div className="mypage">
            <CustomTopAppBar variant="title" title="마이" />
 
            <div className="mypage__body">
                {/* 프로필 카드 — 펼침이 아니라 이동(오른쪽 화살표)이라 이 페이지에서 직접 구성 */}
                <CustomProfileCard
                    nickname="하루"
                    date="2026.09.17"
                    rateing={0}
                    review={0}
                    chipElement={null}
                    profileElement={<CustomProfile width={40} height={20} strok="#FD5D35" strokWidth={2} diameter={40} backgroundColor="#FEF1ED" />}
                />
 
                {/* 후기 */}
                <div className="mypage__section">
                    <CustomList variant="list03" label="후기" />
                    <CustomList variant="list01" label="후기 관리" icon={<ThumbsUpIcon />} />
                </div>
 
                {/* FAQ */}
                <div className="mypage__section">
                    <CustomList variant="list03" label="FAQ" />
                    <CustomList variant="list01" label="배송의뢰" icon={<TruckIcon />} trailing={<ChevronDownIcon />} />
                    <CustomList variant="list01" label="이동경로" icon={<MapPinIcon />} trailing={<ChevronDownIcon />} />
                    <CustomList variant="list01" label="의뢰 수정" icon={<EditIcon />} trailing={<ChevronDownIcon />} />
                    <CustomList variant="list01" label="배송 중단" icon={<MegaphoneIcon />} trailing={<ChevronDownIcon />} />
                </div>
 
                {/* 계정관리 */}
                <div className="mypage__section">
                    <CustomList variant="list03" label="계정관리" />
                    <CustomList variant="list01" label="로그아웃" trailing={<LogoutIcon />} />
                    <CustomList variant="list01" label="회원탈퇴" />
                </div>
            </div>
 
            <CustomNavBar initialActive="my" />
        </div>
    )
}
 
export default CustomMyPage