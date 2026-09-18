import './CustomDeliveryCard.css'
import { Circle, MapPin, Calendar, FileText } from './CustomIcon'
import CustomRequestCount from './CustomRequestCount'
 
interface CustomDeliveryCard {
    width: number;
    count: number;
    startAddr: string;
    endAddr: string;
    date: string;
    startTime: string;
    endTime: string;
    price: string;
}
 
function CustomDeliveryCard({ width, count, startAddr, endAddr, date, startTime, endTime, price }: CustomDeliveryCard) {
    return (
        <div className="custom-delivery" style={{ '--delivery-width': width } as React.CSSProperties}>
            <CustomRequestCount count={count} />
 
            <div className="delivery-content">
                <div className="delivery-route">
                    <div className="delivery-route-row">
                        <Circle width={20} height={20} stroke="#4576F7" />
                        <span className="delivery-address">{startAddr}</span>
                    </div>
                    <div className="delivery-route-line">
                        <span></span>
                    </div>
                    <div className="delivery-route-row">
                        <MapPin width={20} height={20} stroke="#FD5D35" />
                        <span className="delivery-address">{endAddr}</span>
                    </div>
                </div>
 
                <div className="delivery-info">
                    <div className="delivery-info-row">
                        <div className="delivery-info-label">
                            <Calendar width={14} height={14} />
                            <span>일정</span>
                        </div>
                        <span className="delivery-info-value">{date} {startTime}~{endTime}</span>
                    </div>
                    <div className="delivery-info-row">
                        <div className="delivery-info-label">
                            <FileText width={14} height={14} />
                            <span>희망금액</span>
                        </div>
                        <span className="delivery-info-value">{price}원</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
 
export default CustomDeliveryCard