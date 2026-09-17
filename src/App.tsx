import CustomButton from './components/CustomButton.tsx'
import './App.css'
import CustomProfile from './components/CustomProfile.tsx'
import CustomChips from './components/CustomChips.tsx'
import CustomProfileCard from './components/CustomProfileCard.tsx'
import TextField from "./components/TextField.tsx"
import TextArea from "./components/TextArea.tsx"
import { Info1, Info2 } from './components/Info'
import TimeInput from './components/TimeInput.tsx'
import Dropdown from './components/Dropdown.tsx'
import DateInput from './components/DateInput.tsx'
import EmptyState from './components/EmptyState.tsx'

function App() {

  return (
    <>
      <CustomButton name={'활성화'} color={'#fd5d35'} fontColor={'#ffffff'} width={'361px'}></CustomButton>
      <CustomButton name={'활성화'} color={'#4576f7'} fontColor={'#1f2937'} width={'178px'}></CustomButton>

        <CustomProfileCard width={349} nickname='최재영' date='2026-09-15' rateing={3.5} review={24}
          chipElement={<CustomChips name={'진행중'} color={'#4576F7'} backgroundColor={'#E3EAFD'} height={28}></CustomChips>}
          profileElement={<CustomProfile width={16} height={20} strok={'#FD5D35'} strokWidth={2} diameter={40} backgroundColor={'#FEF1ED'}></CustomProfile>}>
      </CustomProfileCard>

      <TextField height={88} borderColor="lightGray" backgroundColor="white" leftLocationIcon={false} placeholder="내용을 입력해주세요." timer={false} rightButton="none" />
      <TextField height={88} borderColor="orange" backgroundColor="white" leftLocationIcon={false} placeholder="내용을 입력해주세요." timer={false} rightButton="x"/>
      <TextField height={88} borderColor="gray" backgroundColor='white' leftLocationIcon={false} placeholder='내용을 입력해주세요.' timer={false} rightButton="none"/>
      <TextField height={88} borderColor="orange" backgroundColor='white' leftLocationIcon={false} placeholder='내용을 입력해주세요.' timer={false} rightButton="none"/>
      
      <TextField height={80} borderColor="lightGray" backgroundColor="white" leftLocationIcon={false} placeholder="Label" timer={true} rightButton="label" />
      <TextField height={80} borderColor="lightGray" backgroundColor="white" leftLocationIcon={true} placeholder="출발지를 입력해주세요." timer={false} rightButton="none"/>
      <TextField height={80} borderColor="orange" backgroundColor='white' leftLocationIcon={true} placeholder='출발지를 입력해주세요.' timer={false} rightButton="none"/>
      <TextField height={80} borderColor="gray" backgroundColor='white' leftLocationIcon={true} placeholder='출발지를 입력해주세요.' timer={false} rightButton="none"/>
   
      <TextField height={80} borderColor="lightGray" backgroundColor="white" leftLocationIcon={false} placeholder="내용을 입력해주세요." timer={false} rightButton="none" />
      <TextField height={80} borderColor="orange" backgroundColor="white" leftLocationIcon={true} placeholder="내용을 입력해주세요." timer={false} rightButton="x"/>
      <TextField height={80} borderColor="gray" backgroundColor='white' leftLocationIcon={true} placeholder="내용을 입력해주세요." timer={false} rightButton="none"/>
      <TextField height={80} borderColor="orange" backgroundColor='white' leftLocationIcon={true} placeholder="내용을 입력해주세요." timer={false} rightButton="none"/>
      <TextField height={80} borderColor="none" backgroundColor='gray' leftLocationIcon={true} placeholder="내용을 입력해주세요." timer={false} rightButton="none"/>
      
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
      
    </>
  )
}

export default App
