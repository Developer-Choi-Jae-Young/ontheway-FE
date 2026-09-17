import './CustomDeliveryCard.css'
import { Calendar, Dot, MapPin, Recipe } from './CustomIcon';
import CustomRequestCount from './CustomRequestCount'

interface CustomDeliveryCard {
    width: number;
    startAddr: string;
    endAddr: string;
    date: string;
    startTime: string;
    endTime: string;
    price: string;
}

function CustomDeliveryCard({width, startAddr, endAddr, date, startTime, endTime, price}: CustomDeliveryCard) {
  return (
    <>
        <div className="custom-delivery" style={{'--delivery-width':width} as React.CSSProperties}>
            <div><CustomRequestCount count={6}></CustomRequestCount></div>
            <div className='delivery-location-section'>
                <div className='delivery-location-info'>
                    <div className='delivery-row'>
                        <div className='icon-wrapper'>
                            <div style={{padding:'1px'}}>
                                <Dot width={20} height={20}></Dot>
                            </div>
                        </div>
                        <span className='delivery-location'>{startAddr}</span>
                    </div>
                    <div className='delivery-row'>
                        <div className='icon-wrapper'>
                            <MapPin width={22} height={22} stroke='#FD5D35'></MapPin>
                        </div>
                        <span className='delivery-location'>{endAddr}</span>
                    </div>
                </div>
            </div>
            <div className='delivery-date-section'>
                <div className='delivery-date-info'>
                    <div style={{display: 'flex', alignItems:'center', gap:'4px'}}>
                        <Calendar width={16} height={16}></Calendar>
                        <span className='delivery-date-font'>일정</span>
                    </div>
                    <div>
                        <span className='delivery-date-font'>{date} {startTime}~{endTime}</span>
                    </div>
                </div>
                
                <div className='delivery-date-info'>
                    <div style={{display: 'flex', alignItems:'center', gap:'4px'}}>
                        <Recipe width={16} height={16}></Recipe>
                        <span className='delivery-date-font'>희망금액</span>
                    </div>
                    <div>
                        <span className='delivery-date-font'>{price}원</span>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default CustomDeliveryCard