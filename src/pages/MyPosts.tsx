import './MyPosts.css'
import { useState } from 'react'
import CustomTopAppBar from '../components/CustomTopAppBar'
import CustomTab from '../components/CustomTab'
import CustomFilterChip from '../components/CustomFilterChip'
import CustomDeliveryCard from '../components/CustomDeliveryCard'
import CustomProductCard from '../components/CustomProductCard'
import CustomFab from '../components/CustomFab'
import CustomNavBar from '../components/CustomNavBar'

function SearchIcon(){
    return(
        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M17.5 17.5L13.8833 13.8833M15.8333 9.16667C15.8333 12.8486 12.8486 15.8333 9.16667 15.8333C5.48477 15.8333 2.5 12.8486 2.5 9.16667C2.5 5.48477 5.48477 2.5 9.16667 2.5C12.8486 2.5 15.8333 5.48477 15.8333 9.16667Z" stroke="#4B5663" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}

function MyPosts(){
    const [tab,setTab]=useState(0)

    return(
        <div className="my-posts">
            <CustomTopAppBar variant="title" title="내 게시글"/>

            <div className="my-posts__body">
                <div onClick={()=>setTab(tab===0?1:0)}>
                    <CustomTab tabs={['가는길','배송의뢰']} activeIndex={tab}/>
                </div>

                {tab===0 ? (
                    <>
                        <div className="my-posts__filters">
                            <CustomFilterChip label="출발지" variant="full" icon="chevron"/>
                            <CustomFilterChip label="도착지" variant="full" icon="chevron"/>
                            <CustomFilterChip label="후기" variant="full" icon="chevron"/>
                            <CustomFilterChip label="희망금액" variant="full" icon="chevron"/>
                        </div>

                        <div className="my-posts__cards">
                            <CustomDeliveryCard width={361} count={6} startAddr="서울 마포구 성미산로 25" endAddr="서울 강남구 테헤란로 123" date="2026.09.17" startTime="08:00" endTime="09:00" price="8,000"/>
                            <CustomDeliveryCard width={361} count={26} startAddr="인천 연수구 송도과학로 32" endAddr="서울 영등포구 국제금융로 10" date="2026.09.22" startTime="08:00" endTime="10:00" price="20,000"/>
                            <CustomDeliveryCard width={361} count={13} startAddr="경기 성남시 분당구 정자일로 120" endAddr="서울 마포구 월드컵로 123" date="2026.09.12" startTime="14:00" endTime="16:00" price="12,000"/>
                        </div>
                    </>
                            ) : (
                    <>
                        <div className="my-posts__search">
                            <SearchIcon/>
                            <input placeholder="물품명으로 검색해보세요."/>
                        </div>

                        <div className="my-posts__products">
                            <CustomProductCard number="302384-334592" category="노트북 파우치" money="15,000" width={361}/>
                            <CustomProductCard number="581247-903164" category="전자기기" money="20,000" width={361}/>
                            <CustomProductCard number="746291-128537" category="화장품 선물세트" money="10,000" width={361}/>
                            <CustomProductCard number="193805-672418" category="교재 3권" money="12,000" width={361}/>
                            <CustomProductCard number="824630-451927" category="화분" money="7,000" width={361}/>
                        </div>
                    </>
                )}
            </div>

            {tab===1 && (
                <div className="my-posts__fab">
                    <CustomFab/>
                </div>
            )}

            <CustomNavBar initialActive="posts"/>
        </div>
    )
}

export default MyPosts