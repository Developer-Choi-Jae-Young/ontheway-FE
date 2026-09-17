import './CustomNavIcon.css'
 
type NavType = "home" | "history" | "posts" | "my";
 
interface CustomNavIconProps {
    type: NavType;
    active?: boolean;
    onClick?: () => void;
}
 
function HouseIcon() {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
            <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
    )
}
 
function PackageCheckIcon() {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m16 16 2 2 4-4" />
            <path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14" />
            <path d="M3.29 7 12 12l8.71-5" />
            <path d="M12 22V12" />
        </svg>
    )
}
 
function FileTextIcon() {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
            <polyline points="14 2 14 8 20 8" />
            <line x1="16" y1="13" x2="8" y2="13" />
            <line x1="16" y1="17" x2="8" y2="17" />
            <polyline points="10 9 9 9 8 9" />
        </svg>
    )
}
 
function UserIcon() {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
            <circle cx="12" cy="7" r="4" />
        </svg>
    )
}
 
function CustomNavIcon({ type, active = false, onClick }: CustomNavIconProps) {
    let label = "";
    let icon = null;
 
    if (type === "home") {
        label = "홈";
        icon = <HouseIcon />;
    } else if (type === "history") {
        label = "이용내역";
        icon = <PackageCheckIcon />;
    } else if (type === "posts") {
        label = "내 게시글";
        icon = <FileTextIcon />;
    } else if (type === "my") {
        label = "마이";
        icon = <UserIcon />;
    }
 
    let className = "nav-icon";
    if (active) {
        className += " nav-icon--active";
    }
 
    return (
        <button className={className} onClick={onClick}>
            {icon}
            <p className="nav-icon__label">{label}</p>
        </button>
    )
}
 
export default CustomNavIcon
 