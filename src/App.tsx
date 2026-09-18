import CustomButton from './components/CustomButton.tsx'
import './App.css'
import CustomProfile from './components/CustomProfile.tsx'
import CustomChips from './components/CustomChips.tsx'
import CustomProfileCard from './components/CustomProfileCard.tsx'
 
import TextField from './components/TextField.tsx'
import TextArea from './components/TextArea.tsx'
import { Info1, Info2 } from './components/Info'
import TimeInput from './components/TimeInput.tsx'
import Dropdown from './components/Dropdown.tsx'
import DateInput from './components/DateInput.tsx'
import EmptyState from './components/EmptyState.tsx'
 
import CustomReviewCard from './components/CustomReviewCard.tsx'
import CustomProductCard from './components/CustomProductCard.tsx'
import CustomDeliveryCard from './components/CustomDeliveryCard.tsx'
import CustomDiv from './components/CustomDiv.tsx'
 
// 최인하 컴포넌트
import CustomTopAppBar from './components/CustomTopAppBar.tsx'
import CustomNavBar from './components/CustomNavBar.tsx'
import CustomNavIcon from './components/CustomNavIcon.tsx'
import CustomList from './components/CustomList.tsx'
import CustomFilterChip from './components/CustomFilterChip.tsx'
import CustomCheckbox from './components/CustomCheckbox.tsx'
import CustomTab from './components/CustomTab.tsx'
import CustomFab from './components/CustomFab.tsx'
import CustomAccordion from './components/CustomAccordion.tsx'

import FindId from './pages/FindId'


function App() {
  return (
    <>
      <CustomDiv
        headerElement={<CustomTopAppBar title="Title" />}
        footerElement={<CustomNavBar/>}
      >
        <CustomButton
          name={'Label'}
          color={'#fd5d35'}
          fontColor={'#ffffff'}
          size = 'lg'
        ></CustomButton>

        <br />
        <CustomButton
          name={'Label'}
          color={'#FEF1ED'}
          fontColor={'#fd5d35'}
          size = 'lg'
        ></CustomButton>
        <br />

        <CustomButton
          name={'Label'}
          color={'#BABABA'}
          fontColor={'#6B7280'}
          size = 'lg'
        ></CustomButton>

        <br />
        <CustomButton
          name={'Label'}
          color={'#fd5d35'}
          fontColor={'#ffffff'}
          size = 'md'
        ></CustomButton>

        <br/>

        <CustomButton
          name={'Label'}
          color={'#FEF1ED'}
          fontColor={'#fd5d35'}
          size = 'md'
        ></CustomButton>

        <br/>
        <CustomButton
          name={'Label'}
          color={'#BABABA'}
          fontColor={'#6B7280'}
          size = 'md'
        ></CustomButton>

        <br/>
        <CustomButton
          name={'Label'}
          color={'#fd5d35'}
          fontColor={'#ffffff'}
          size = 'sm'
        ></CustomButton>
      
        <br/>
        <CustomButton
          name={'Label'}
          color={'#FEF1ED'}
          fontColor={'#fd5d35'}
          size = 'sm'
        ></CustomButton>

        <br/>
        <CustomButton
          name={'Label'}
          color={'#BABABA'}
          fontColor={'#6B7280'}
          size = 'sm'
        ></CustomButton>

        <br/>

        <CustomButton
          name={'Label'}
          color={'#fd5d35'}
          fontColor={'#ffffff'}
          size = 'xsm'
        ></CustomButton>

        <br/>
        <CustomButton
          name={'Label'}
          color={'#FEF1ED'}
          fontColor={'#fd5d35'}
          size = 'xsm'
        ></CustomButton>

        <br />
        <CustomButton
          name={'Label'}
          color={'#BABABA'}
          fontColor={'#6B7280'}
          size = 'xsm'
        ></CustomButton>
    
 
        <br />
 
        <CustomProfileCard
          width={349}
          nickname="최재영"
          date="2026-09-15"
          rateing={3.5}
          review={24}
          chipElement={
            <CustomChips
              name={'진행중'}
              color={'#4576F7'}
              backgroundColor={'#E3EAFD'}
              height={28}
            ></CustomChips>
          }
          profileElement={
            <CustomProfile
              width={16}
              height={20}
              strok={'#FD5D35'}
              strokWidth={2}
              diameter={40}
              backgroundColor={'#FEF1ED'}
            ></CustomProfile>
          }
        ></CustomProfileCard>
 
        <br />
 
        {/* 팀원 컴포넌트 */}
 
        <CustomReviewCard
          width={349}
          profileElement={
            <CustomProfile
              width={16}
              height={20}
              strok={'#FD5D35'}
              strokWidth={2}
              diameter={40}
              backgroundColor={'#FEF1ED'}
            ></CustomProfile>
          }
          nickname={'최재영'}
          date={'0000.00.00'}
          rating={2.5}
          content={'후기 내용'}
        ></CustomReviewCard>
 
        <br />
 
        <CustomProductCard
          number={'물품번호'}
          category={'전자기기'}
          money={'00,000'}
          width={349}
        ></CustomProductCard>
 
        <br />
 
        <CustomDeliveryCard
          width={349}
          startAddr={'서울특별시 강남구'}
          endAddr={'경기도 성남시'}
          date={'00월 00일(월)'}
          startTime={'00:00'}
          endTime={'00:00'}
          price={'00,000'}
        ></CustomDeliveryCard>
 
        <br />
 
        <CustomDeliveryCard
          width={349}
          startAddr={'서울특별시 강남구'}
          endAddr={'경기도 성남시'}
          date={'00월 00일(월)'}
          startTime={'00:00'}
          endTime={'00:00'}
          price={'00,000'}
        ></CustomDeliveryCard>
 
        <br />
 
        <CustomDeliveryCard
          width={349}
          startAddr={'서울특별시 강남구'}
          endAddr={'경기도 성남시'}
          date={'00월 00일(월)'}
          startTime={'00:00'}
          endTime={'00:00'}
          price={'00,000'}
        ></CustomDeliveryCard>
 
        <br />
 
        <CustomDeliveryCard
          width={349}
          startAddr={'서울특별시 강남구'}
          endAddr={'경기도 성남시'}
          date={'00월 00일(월)'}
          startTime={'00:00'}
          endTime={'00:00'}
          price={'00,000'}
        ></CustomDeliveryCard>
 
        {/* 예진 컴포넌트 */}
 
        <TextField
          height={56}
          borderColor="lightGray"
          backgroundColor="white"
          leftLocationIcon={false}
          placeholder="내용을 입력해주세요."
          timer={false}
          rightButton="none"
        />
 
        <TextField
          height={56}
          borderColor="orange"
          backgroundColor="white"
          leftLocationIcon={false}
          placeholder="내용을 입력해주세요."
          timer={false}
          rightButton="x"
        />
 
        <TextField
          height={56}
          borderColor="gray"
          backgroundColor="white"
          leftLocationIcon={false}
          placeholder="내용을 입력해주세요."
          timer={false}
          rightButton="none"
        />
 
        <TextField
          height={56}
          borderColor="orange"
          backgroundColor="white"
          leftLocationIcon={false}
          placeholder="내용을 입력해주세요."
          timer={false}
          rightButton="none"
        />
 
        <TextField
          height={48}
          borderColor="lightGray"
          backgroundColor="white"
          leftLocationIcon={false}
          placeholder="Label"
          timer={true}
          rightButton="label"
        />
 
        <TextField
          height={48}
          borderColor="lightGray"
          backgroundColor="white"
          leftLocationIcon={true}
          placeholder="출발지를 입력해주세요."
          timer={false}
          rightButton="none"
        />
 
        <TextField
          height={48}
          borderColor="orange"
          backgroundColor="white"
          leftLocationIcon={true}
          placeholder="출발지를 입력해주세요."
          timer={false}
          rightButton="none"
        />
 
        <TextField
          height={48}
          borderColor="gray"
          backgroundColor="white"
          leftLocationIcon={true}
          placeholder="출발지를 입력해주세요."
          timer={false}
          rightButton="none"
        />
 
        <TextField
          height={48}
          borderColor="lightGray"
          backgroundColor="white"
          leftLocationIcon={false}
          placeholder="내용을 입력해주세요."
          timer={false}
          rightButton="none"
        />
 
        <TextField
          height={48}
          borderColor="orange"
          backgroundColor="white"
          leftLocationIcon={true}
          placeholder="내용을 입력해주세요."
          timer={false}
          rightButton="x"
        />
 
        <TextField
          height={48}
          borderColor="gray"
          backgroundColor="white"
          leftLocationIcon={true}
          placeholder="내용을 입력해주세요."
          timer={false}
          rightButton="none"
        />
 
        <TextField
          height={48}
          borderColor="orange"
          backgroundColor="white"
          leftLocationIcon={true}
          placeholder="내용을 입력해주세요."
          timer={false}
          rightButton="none"
        />
 
        <TextField
          height={48}
          borderColor="none"
          backgroundColor="gray"
          leftLocationIcon={true}
          placeholder="내용을 입력해주세요."
          timer={false}
          rightButton="none"
        />
 
        <TextArea borderColor="lightGray" textcount={0} />
        <TextArea borderColor="orange" textcount={1} />
        <TextArea borderColor="gray" textcount={70} />
        <TextArea borderColor="orange" textcount={100} />
 
        <Info1 />
        <Info2 />
 
        <TimeInput borderColor="lightGray" backgroundColor="white" />
        <TimeInput borderColor="none" backgroundColor="gray" />
        <TimeInput borderColor="orange" backgroundColor="white" />
 
        <Dropdown borderColor="lightGray" />
        <Dropdown borderColor="gray" />
        <Dropdown borderColor="orange" />
 
        <DateInput borderColor="lightGray" />
        <DateInput borderColor="orange" />
        <DateInput borderColor="gray" />
 
        <EmptyState type="route" />
        <EmptyState type="photo" />
 
        {/* 최인하 컴포넌트 */}
 
        <CustomTopAppBar title="Title" />
        <CustomTopAppBar variant="meta" title="Title" meta="Title" />
        <CustomTopAppBar variant="large" title="Title" subtitle="Title" />
 
        <CustomNavBar />
 
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <CustomNavIcon type="home" />
          <CustomNavIcon type="history" />
          <CustomNavIcon type="posts" />
          <CustomNavIcon type="my" />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-around' }}>
          <CustomNavIcon type="home" active />
          <CustomNavIcon type="history" active />
          <CustomNavIcon type="posts" active />
          <CustomNavIcon type="my" active />
        </div>
 
        <CustomList variant="list01" label="Text" />
        <CustomList variant="list02" title="배송날짜" date="0000.00.00" time="AM 12:00" />
 
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          <CustomFilterChip label="Text" variant="full" icon="chevron" />
          <CustomFilterChip label="Text" selected />
          <CustomFilterChip label="Text" variant="line" icon="chevron" />
          <CustomFilterChip label="Text" selected icon="x" />
          <CustomFilterChip label="Text" selected icon="chevron" />
          <CustomFilterChip label="Text" disabled icon="chevron" />
        </div>
 
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <CustomCheckbox label="Checked" size="lg" />
          <CustomCheckbox label="Checked" size="sm" />
          <CustomCheckbox label="Checked" size="lg" defaultChecked disabled />
          <CustomCheckbox label="Checked" size="sm" defaultChecked disabled />
        </div>
 
        <CustomTab tabs={['Label', 'Label']} activeIndex={0} />
        <CustomTab tabs={['Label', 'Label']} activeIndex={1} />
 
        <CustomFab />
        <CustomAccordion width={361} clientName={'최재영'} itemName={'품목명'} price={'00,000'}></CustomAccordion>
      
        <FindId/>
      
      </CustomDiv>

      
    </>
  )
}
 
export default App