import { Link } from 'react-router-dom';
import './CustomFab.css'
import { PencilIcon } from './CustomIcon';
 
interface CustomFabProps {
}
  
function CustomFab({}: CustomFabProps) {
    return (
        <Link to='/delivery/write' className="custom-fab" aria-label="글쓰기">
            <PencilIcon />
        </Link>
    )
}
 
export default CustomFab