import { Box } from './CustomIcon';
import './CustomProductCard.css'

interface CustomProductCard {
    number: string;
    category: string;
    money: string;
    width: number;
}

function CustomProductCard({number, category, money, width}: CustomProductCard) {
  return (
    <>
        <div className="custom-product" style={{'--product-width':width} as React.CSSProperties}>
            <div className='product-section'>
                <div className='product-box-section'>
                    <Box width={22} height={22} strokeWidth={2}></Box>
                </div>
                <div className='product-info-section'>
                    <div className='product-number'>{number}</div>
                    <div className='product-category'>{category}</div>
                </div>
            </div>
            <div>
                <span className='product-money'>{money}</span>
                <span className='product-money-unit'>원</span>
            </div>
        </div>
    </>
  )
}

export default CustomProductCard