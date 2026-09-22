import './MyPosts.css'
import { useState } from 'react'
import CustomTopAppBar from '../components/CustomTopAppBar'
import CustomTab from '../components/CustomTab'
import CustomFilterBar from '../components/CustomFilterBar'
import CustomDeliveryCard from '../components/CustomDeliveryCard'
import CustomProductCard from '../components/CustomProductCard'
import CustomFab from '../components/CustomFab'
import CustomNavBar from '../components/CustomNavBar'
import CustomDiv from '../components/CustomDiv'
import { SearchIcon } from '../components/CustomIcon'
import { useNavigate } from 'react-router-dom'

function MyPosts(){
    const [tab,setTab]=useState(0)
    const navigate = useNavigate();

    return(
        <CustomDiv backgroundColor={'#F3F4F6'} footerElement={<CustomNavBar initialActive="posts"/>}>
            <CustomTopAppBar variant="title" title="내 게시글"/>

            <div className="my-posts__body">
                <div onClick={()=>setTab(tab===0?1:0)}>
                    <CustomTab tabs={['가는길','배송의뢰']} activeIndex={tab}/>
                </div>

                {tab===0 ? (
                    <>
                        <CustomFilterBar className="my-posts__filters"/>

                        <div className="my-posts__cards">
                            <CustomDeliveryCard id={1} count={6} startAddr="서울 마포구 성미산로 25" endAddr="서울 강남구 테헤란로 123" date="2026.09.17" startTime="08:00" endTime="09:00" price="8,000"/>
                            <CustomDeliveryCard id={2} count={26} startAddr="인천 연수구 송도과학로 32" endAddr="서울 영등포구 국제금융로 10" date="2026.09.22" startTime="08:00" endTime="10:00" price="20,000"/>
                            <CustomDeliveryCard id={3} count={13} startAddr="경기 성남시 분당구 정자일로 120" endAddr="서울 마포구 월드컵로 123" date="2026.09.12" startTime="14:00" endTime="16:00" price="12,000"/>
                        </div>
                    </>
                            ) : (
                    <>
                        <div className="my-posts__search">
                            <SearchIcon />
                            <input placeholder="물품명으로 검색해보세요."/>
                        </div>

                        <div className="my-posts__products">
                            <CustomProductCard number="302384-334592" category="노트북 파우치" money="15,000" onClick={() => navigate('/product/detail/1')}/>
                            <CustomProductCard number="581247-903164" category="전자기기" money="20,000" onClick={() => navigate('/product/detail/2')}/>
                            <CustomProductCard number="746291-128537" category="화장품 선물세트" money="10,000" onClick={() => navigate('/product/detail/3')}/>
                            <CustomProductCard number="193805-672418" category="교재 3권" money="12,000" onClick={() => navigate('/product/detail/4')}/>
                            <CustomProductCard number="824630-451927" category="화분" money="7,000" onClick={() => navigate('/product/detail/5')}/>
                        </div>
                    </>
                )}
            </div>

            {tab===1 && (
                <div className="my-posts__fab">
                    <CustomFab onClick={() => navigate('/product/write')}/>
                </div>
            )}
        </CustomDiv>
    )
}

export default MyPosts