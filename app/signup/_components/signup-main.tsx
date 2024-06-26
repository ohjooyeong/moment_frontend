'use client';

import { useRouter } from 'next/navigation';
import { useFunnel } from '@/hooks/use-funnel';
import PageHeader from '@/components/page-header';
import SetupEmail from './setup-email';
import SetupPassword from './setup-password';
import GenericForm from '@/components/genric-form';
import SetupProfile from './setup-profile';
import { BirthDrawer } from './drawers-modal/birth-modal-drawer';

export type FormDataType = {
  email: string;
  code: string;
  isVerifyEmail: boolean;
  isVerifyCode: boolean;
  password: string;
  confirmPassword: string;
  gender: 'male' | 'female';
  userName: string;
  birth: number;
};

// 전체 스텝을 담은 배열
const steps = ['이메일', '비밀번호', '프로필 설정'];

const SignupMain = () => {
  const router = useRouter();
  const { Funnel, Step, setStep } = useFunnel(steps[0]);

  const handleClickPrev = () => {
    router.back();
  };

  const handleClickNext = (steps: string) => {
    setStep(steps);
  };

  const handleSubmitSignup = () => {};

  return (
    <div className="flex-col justify-around w-full">
      <PageHeader title="회원가입" handleRoutePrev={handleClickPrev} />
      <GenericForm<FormDataType>
        formOptions={{
          mode: 'onChange',
          defaultValues: {
            isVerifyEmail: false,
            isVerifyCode: false,
            gender: 'female',
          },
        }}
        onSubmit={handleSubmitSignup}
      >
        <Funnel>
          <Step name="이메일">
            <SetupEmail handleClickNext={() => handleClickNext(steps[1])} />
          </Step>
          <Step name="비밀번호">
            <SetupPassword handleClickNext={() => handleClickNext(steps[2])} />
          </Step>
          <Step name="프로필 설정">
            <SetupProfile handleClickNext={() => handleClickNext(steps[3])} />
          </Step>
        </Funnel>
      </GenericForm>
      <BirthDrawer />
    </div>
  );
};

export default SignupMain;
