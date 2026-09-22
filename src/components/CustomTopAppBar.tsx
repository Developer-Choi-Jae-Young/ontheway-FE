import { useNavigate, useLocation } from 'react-router-dom';
import { BackArrowIcon } from './CustomIcon';
import './CustomTopAppBar.css'
 
interface CustomTopAppBarProps {
    title: string;
    subtitle?: string;
    meta?: string;
    variant?: "centered" | "meta" | "large" | "title";
    onBack?: () => void;
    onClick?: () => void;
}
 
function CustomTopAppBar({ title, subtitle, meta, variant = "centered", onBack, onClick }: CustomTopAppBarProps) {
    const navigate = useNavigate()
    const location = useLocation()

    // 이 화면이 앱에서 처음 연 화면이면(링크로 바로 들어온 경우) 돌아갈 곳이 없으므로 홈으로
    const goBack = () => {
        if (location.key === 'default') navigate('/')
        else navigate(-1)
    }

    const back = (
        <button className="top-app-bar__back" onClick={onBack ?? goBack} aria-label="뒤로가기">
            <BackArrowIcon />
        </button>
    )
 
    // 뒤로가기 없이 왼쪽 제목만 (예: 마이 탭)
    if (variant === "title") {
        return (
            <header className="top-app-bar top-app-bar--title">
                <p className="top-app-bar__page-title">{title}</p>
            </header>
        )
    }
 
    if (variant === "large") {
        return (
            <header className="top-app-bar top-app-bar--large">
                {back}
                <div className="top-app-bar__headline">
                    <p className="top-app-bar__title-large">{title}</p>
                    {subtitle && <p className="top-app-bar__subtitle">{subtitle}</p>}
                </div>
            </header>
        )
    }
 
    return (
        <header className={`top-app-bar top-app-bar--${variant}`}>
            {back}
            <p className="top-app-bar__title">{title}</p>
            <div className="top-app-bar__trailing" onClick={onClick}>
                {variant === "meta" && meta && <p className="top-app-bar__meta">{meta}</p>}
            </div>
        </header>
    )
}
 
export default CustomTopAppBar