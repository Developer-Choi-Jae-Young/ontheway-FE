import CustomNavIcon from './CustomNavIcon'
import './CustomNavBar.css'
 
type NavType = "home" | "history" | "posts" | "my";
 
interface CustomNavBarProps {
    active: NavType;
    onChange?: (type: NavType) => void;
}
 
const ITEMS: NavType[] = ["home", "history", "posts", "my"];
 
function CustomNavBar({ active, onChange }: CustomNavBarProps) {
    return (
        <nav className="nav-bar">
            <div className="nav-bar__items">
                {ITEMS.map((type) => (
                    <CustomNavIcon
                        key={type}
                        type={type}
                        active={active === type}
                        onClick={() => onChange?.(type)}
                    />
                ))}
            </div>
        </nav>
    )
}
 
export default CustomNavBar
 