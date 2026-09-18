import { useState } from 'react'
import CustomNavIcon from './CustomNavIcon'
import './CustomNavBar.css'
 
type NavType = "home" | "history" | "posts" | "my";
 
const ITEMS: NavType[] = ["home", "history", "posts", "my"];
 
function CustomNavBar() {
    const [active, setActive] = useState<NavType>("home");
 
    return (
        <nav className="nav-bar">
            <div className="nav-bar__items">
                {ITEMS.map((type) => (
                    <CustomNavIcon
                        key={type}
                        type={type}
                        active={active === type}
                        onClick={() => setActive(type)}
                    />
                ))}
            </div>
        </nav>
    )
}
 
export default CustomNavBar