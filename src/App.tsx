import CustomButton from './components/CustomButton.tsx'
import './App.css'
import CustomProfile from './components/CustomProfile.tsx'
import CustomChips from './components/CustomChips.tsx'
import CustomProfileCard from './components/CustomProfileCard.tsx'

function App() {

  return (
    <>
      <CustomButton name={'활성화'} color={'#fd5d35'} fontColor={'#ffffff'} width={'361px'}></CustomButton>
      <CustomButton name={'활성화'} color={'#4576f7'} fontColor={'#1f2937'} width={'178px'}></CustomButton>

        <CustomProfileCard width={349} nickname='최재영' date='2026-09-15' rateing={3.5} review={24}
          chipElement={<CustomChips name={'진행중'} color={'#4576F7'} backgroundColor={'#E3EAFD'} height={28}></CustomChips>}
          profileElement={<CustomProfile width={16} height={20} strok={'#FD5D35'} strokWidth={2} diameter={40} backgroundColor={'#FEF1ED'}></CustomProfile>}>
      </CustomProfileCard>
    </>
  )
}

export default App
