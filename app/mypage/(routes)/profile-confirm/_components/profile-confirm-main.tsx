'use client';

import PageHeader from '@/components/page-header';
import { useRouter } from 'next/navigation';
import ProfileConfirmPassword from './profile-confirm-password';

const ProfileConfirmMain = () => {
  const router = useRouter();

  return (
    <div className="flex-col justify-around w-full">
      <PageHeader title="비밀번호 확인" handleRoutePrev={() => router.back()} />

      <ProfileConfirmPassword
        handleClickNext={() => router.replace('/mypage/profile-info')}
      />
    </div>
  );
};

export default ProfileConfirmMain;
