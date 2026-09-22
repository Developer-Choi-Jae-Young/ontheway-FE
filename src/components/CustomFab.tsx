import './CustomFab.css'
import { PencilIcon } from './CustomIcon';
 
interface CustomFabProps {
    onClick?: () => void;
}
  
function CustomFab({onClick}: CustomFabProps) {
    return (
        <div className="custom-fab" aria-label="글쓰기" onClick={onClick}>
            <PencilIcon />
        </div>
    )
}
 
export default CustomFab