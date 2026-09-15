import React, { useState, type ReactNode } from 'react';
import './CustomProfileCard.css'
import { Arrow } from './CustomIcon';

interface CustomProfileCard {
    width: number;
    nickname: string;
    date: string;
    rateing: number;
    review: number;
    chipElement: ReactNode;
    profileElement: ReactNode;
}

function CustomProfileCard({width, nickname, date, rateing, review, chipElement, profileElement}: CustomProfileCard) {
  const [isRotated, setIsRotated] = useState(false);

  const handleClickArrow = () => {
    setIsRotated(prev => !prev);
  };

  return (
    <>
        <div className="custom-profile-card" style={{'--card-width':width} as React.CSSProperties}>
            <div className='custom-profile-card-title'>
                {chipElement}
            </div>
            <div className='custom-profile-card-content'>
                <div className='content-profile'>
                    <div>
                        {profileElement}
                    </div>
                    <div className='profile-info'>
                        <div className='nickname'>{nickname}</div>
                        <div className='date'>{date}</div>
                        <div className={`profile-details ${isRotated ? '' : 'rotated'}`}>
                            <div className='profile-sub-info'>
                                <span className='rating'>평균 {rateing}</span>
                                <span className='review'>후기 {review}건</span>
                            </div>
                            <div>
                                <span className='report'>신고</span>
                            </div>
                        </div>
                    </div>
                    <div className={`content-arrow ${isRotated ? 'rotated' : ''}`} onClick={handleClickArrow}>
                        <Arrow width={48} height={48} strokeWidth={2}></Arrow>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default CustomProfileCard