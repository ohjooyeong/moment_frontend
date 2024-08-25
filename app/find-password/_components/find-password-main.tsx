'use client';

import { useRouter } from 'next/navigation';
import PageHeader from '@/components/page-header';
import { useFunnel } from '@/hooks/use-funnel';
import FindPasswordEmail from './find-password-email';
import FindPasswordComplete from './find-password-complete';

// 전체 스텝을 담은 배열
const steps = ['비밀번호 찾기', '발급 완료'];

const FindPasswordMain = () => {
  const router = useRouter();
  const { Funnel, Step, setStep, currentStep } = useFunnel(steps[0]);

  const handleClickNext = (steps: string) => {
    setStep(steps);
  };

  return (
    <div className="flex-col justify-around w-full">
      <PageHeader title="비밀번호 찾기" handleRoutePrev={() => router.back()} />
      <Funnel>
        <Step name="비밀번호 찾기">
          <FindPasswordEmail
            handleClickNext={() => handleClickNext(steps[1])}
          />
        </Step>
        <Step name="발급 완료">
          <FindPasswordComplete />
        </Step>
      </Funnel>
    </div>
  );
};

export default FindPasswordMain;
