import { useNavigate } from 'react-router-dom';
import CustomTopAppBar from '../components/CustomTopAppBar'
import CustomProductCard from '../components/CustomProductCard'
import CustomButton from '../components/CustomButton'
import './Request.css'
import CustomDiv from '../components/CustomDiv'
import { PlusIcon } from '../components/CustomIcon'

function Request(){
    const navigate = useNavigate();

    return (
        <CustomDiv>
            <CustomTopAppBar title="요청하기"/>
                <div className="request-products">
                    <div className='request-product-list'>
                        <CustomProductCard number={'물품번호'} category={'전자기기'} money={'20,000'}/>
                        <CustomProductCard number={'물품번호'} category={'서류봉투'} money={'5,000'}/>
                        <CustomProductCard number={'물품번호'} category={'전자기기'} money={'23,000'}/>
                        
                        <div className='new-box' onClick={() => navigate('/product/write')}>
                            <PlusIcon/>
                            <div>새글추가</div>
                        </div>
                    </div>

                    <div className='request-button'>
                        <CustomButton name="의뢰등록"color="#fd5d35"fontColor="#ffffff"size="lg"/>
                    </div>
                </div>
        </CustomDiv>
    )
}

export default Request