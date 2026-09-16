import './CustomRequestCount.css'
import { Users } from './CustomIcon'

interface CustomRequestCount {
    count: number;
}

function CustomRequestCount({count}: CustomRequestCount) {
  return (
    <>
        <div className="custom-request-count-chips">
            <Users width={14} height={12} stroke={'#FD5D35'} strokeWidth={1.2}></Users>
            <span className='request-count-chips-content'>요청 {count}건</span>
        </div>
    </>
  )
}

export default CustomRequestCount