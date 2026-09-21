import { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import CustomNavIcon from './CustomNavIcon'
import './CustomNavBar.css'
 
type NavType = "home" | "history" | "posts" | "my";
 
const ITEMS: NavType[] = ["home", "history", "posts", "my"];
 
const PATH_MAP: Record<NavType, string> = {
    home: "/",
    history: "/history",
    posts: "/my/post",
    my: "/my/page",
};

interface CustomNavBarProps {
    initialActive?: NavType;
}
 
function CustomNavBar({ initialActive = "home" }: CustomNavBarProps) {
    const navigate = useNavigate();
    const location = useLocation();

    const getCurrentActive = (): NavType => {
        const currentPath = location.pathname;
        const found = Object.entries(PATH_MAP).find(([_, path]) => path === currentPath);
        return (found ? found[0] : initialActive) as NavType;
    };

    const [active, setActive] = useState<NavType>(getCurrentActive());
    
    const handleNavClick = (type: NavType) => {
        setActive(type);
        navigate(PATH_MAP[type]);
    };
    
    return (
        <nav className="nav-bar">
            <div className="nav-bar__items">
                {ITEMS.map((type) => (
                    <CustomNavIcon
                        key={type}
                        type={type}
                        active={active === type}
                        onClick={() => handleNavClick(type)}
                    />
                ))}
            </div>
        </nav>
    )
}
 
export default CustomNavBar