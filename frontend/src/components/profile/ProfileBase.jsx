import React, { useState, useEffect } from 'react'
import './ProfileComponentAll.scss'
import { useAuth } from '@/store/auth.store'
import Input from '../../components/ui/Input'
import Button from '../../components/ui/Button'
import { getMe,updateMe } from '@/api/auth.api'
import { getPosts } from '@/api/post.api'
import { PROFILE_ICONS } from '../../constants/profileIcon'
import { MEMBER_STATUS_LABEL } from '@/constants/memberStatus'
const ProfileBase = () => {
  return (
    <div className='profile-card'>
      <div className="profile-info">
        <label htmlFor='profile-name'>
          <img src={PROFILE_ICONS.user} alt="icon" />
          이름
        </label>
        <Input
          className='profile-input'
          id="profile-name"
        />
      </div>
      <div className="profile-info-field">
        <label htmlFor='profile-phone'>
          <img src={PROFILE_ICONS.phone} alt="icon" />
          전화번호
        </label>
        <Input
          className='profile-input'
          id="profile-phone"
        />
        <p className='hint'>본인 인증에 사용됩니다.</p>
      </div>
      <div className="profile-info-field">
        <label htmlFor='profile-email'>
          <img src={PROFILE_ICONS.mail} alt="icon" />
          이메일
        </label>
        <Input
          className='profile-input'
          id="profile-email"
          readOnly
          disabled
        />
        <p className='hint'>로그인 및 알림 수신에 사용됩니다.</p>
      </div>
      <div className="profile-info-field">
        <label htmlFor='profile-status'>
          <img src={PROFILE_ICONS.badge} alt="icon" />
          회원 상태
        </label>
        <Input
          className='profile-input'
          id="profile-status"
          readOnly
          disabled
        />
        <p className='hint'>서비스 이용 가능 여부를 나타냅니다.</p>
      </div>
      <div className="btn-wrap">
        <Button text="내 정보 수정하기" className="edit"/>
      </div>


    </div>
  )
}

export default ProfileBase