import CustomButton from './components/CustomButton.tsx'
import './App.css'
import CustomProfile from './components/CustomProfile.tsx'
import CustomChips from './components/CustomChips.tsx'
import CustomProfileCard from './components/CustomProfileCard.tsx'
import CustomReviewCard from './components/CustomReviewCard.tsx'
import CustomProductCard from './components/CustomProductCard.tsx'
import CustomDeliveryCard from './components/CustomDeliveryCard.tsx'
import CustomDiv from './components/CustomDiv.tsx'

function App() {

  return (
    <>
      <CustomDiv headerElement={<span>헤더</span>} footerElement={<span>푸터</span>}>
        <CustomButton name={'활성화'} color={'#fd5d35'} fontColor={'#ffffff'} width={'361px'}></CustomButton>
        <br/>
        <CustomButton name={'활성화'} color={'#4576f7'} fontColor={'#1f2937'} width={'178px'}></CustomButton>
        <br/>
        <CustomProfileCard width={349} nickname='최재영' date='2026-09-15' rateing={3.5} review={24}
            chipElement={<CustomChips name={'진행중'} color={'#4576F7'} backgroundColor={'#E3EAFD'} height={28}></CustomChips>}
            profileElement={<CustomProfile width={16} height={20} strok={'#FD5D35'} strokWidth={2} diameter={40} backgroundColor={'#FEF1ED'}></CustomProfile>}>
        </CustomProfileCard>
        <br/>
        <CustomReviewCard width={349} 
            profileElement={<CustomProfile width={16} height={20} strok={'#FD5D35'} strokWidth={2} diameter={40} backgroundColor={'#FEF1ED'}></CustomProfile>}
            nickname={'최재영'} date={'0000.00.00'} rating={2.5} content={'후기 내용'}>
        </CustomReviewCard>
        <br/>
        <CustomProductCard number={'물품번호'} category={'전자기기'} money={'00,000'} width={349}></CustomProductCard>
        <br/>
        <CustomDeliveryCard width={349} startAddr={'서울특별시 강남구'} endAddr={'경기도 성남시'} date={'00월 00일(월)'} startTime={'00:00'} endTime={'00:00'} price={'00,000'}></CustomDeliveryCard>
        <br/>
        <CustomDeliveryCard width={349} startAddr={'서울특별시 강남구'} endAddr={'경기도 성남시'} date={'00월 00일(월)'} startTime={'00:00'} endTime={'00:00'} price={'00,000'}></CustomDeliveryCard>
        <br/>
        <CustomDeliveryCard width={349} startAddr={'서울특별시 강남구'} endAddr={'경기도 성남시'} date={'00월 00일(월)'} startTime={'00:00'} endTime={'00:00'} price={'00,000'}></CustomDeliveryCard>
        <br/>
        <CustomDeliveryCard width={349} startAddr={'서울특별시 강남구'} endAddr={'경기도 성남시'} date={'00월 00일(월)'} startTime={'00:00'} endTime={'00:00'} price={'00,000'}></CustomDeliveryCard>
      </CustomDiv>
    </>
  )
}

export default App
