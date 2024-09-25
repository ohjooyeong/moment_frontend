import PageHeader from '@/components/page-header';
import { useRouter } from 'next/navigation';

const ProfileInfoMain = () => {
  const router = useRouter();

  return (
    <div className="flex-col justify-around w-full">
      <PageHeader title="회원정보 변경" handleRoutePrev={() => router.back()} />
    </div>
  );
};

export default ProfileInfoMain;
