import './CustomDeliveryCard.css'
import { Arrow, Calendar, Clock, MapPin } from './CustomIcon';
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
                    <MapPin width={24} height={24}></MapPin>
                    <span className='delivery-location'>{startAddr}</span>    
                </div>
                <div className={'location-arrow rotated'}>
                    <Arrow width={24} height={24} strokeWidth={2}></Arrow>
                </div>
                <div className='delivery-location-info'>
                    <MapPin width={24} height={24} stroke='#FD5D35'></MapPin>
                    <span className='delivery-location'>{endAddr}</span>
                </div>
            </div>
            <div className='delivery-date-section'>
                <div className='delivery-date-info'>
                    <Calendar width={16} height={16}></Calendar>
                    <span className='delivery-date-font'>{date}</span>
                </div>
                
                <div className='delivery-date-info'>
                    <Clock width={16} height={16}></Clock>
                    <span className='delivery-date-font'>{startTime}~{endTime}</span>
                </div>
            </div>
            <div className='delivery-price-section'>
                <span className='delivery-price'>{price}</span>
                <span className='delivery-price-unit'>원</span>
            </div>
        </div>
    </>
  )
}

export default CustomDeliveryCard