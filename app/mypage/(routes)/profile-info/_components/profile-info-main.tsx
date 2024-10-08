'use client';

import PageHeader from '@/components/page-header';

import { FormProfileDataType } from '../_type';
import GenericForm from '@/components/genric-form';
import { BirthDrawer } from './drawers-modal/birth-modal-drawer';

import dayjs from 'dayjs';
import ProfileInfo from './profile-info';

const ProfileInfoMain = () => {
  return (
    <div className="flex-col justify-around w-full">
      <GenericForm<FormProfileDataType>
        onSubmit={() => {}}
        formOptions={{
          mode: 'onChange',
          defaultValues: {
            name: '',
            gender: 'FEMALE',
            birth: dayjs('2000-10-22').format('YYYY / MM / DD'),
          },
        }}
      >
        <PageHeader title="회원정보 변경" toLink="/mypage/profile-setting" />
        <ProfileInfo />
        <BirthDrawer />
      </GenericForm>
    </div>
  );
};

export default ProfileInfoMain;
