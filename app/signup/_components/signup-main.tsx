'use client';

import { useRouter } from 'next/navigation';
import { useFunnel } from '@/hooks/use-funnel';
import PageHeader from '@/components/page-header';
import GenericForm from '@/components/genric-form';
import SetupEmail from './setup-email';
import SetupPassword from './setup-password';
import SetupProfile from './setup-profile';
import SetupComplteSignup from './setup-complete-signup';
import { BirthDrawer } from './drawers-modal/birth-modal-drawer';
import dayjs from 'dayjs';

export type FormDataType = {
  email: string;
  code: string;
  isVerifyEmail: boolean;
  isVerifyCode: boolean;
  password: string;
  confirmPassword: string;
  gender: 'male' | 'female';
  userName: string;
  birth: string;
};

// 전체 스텝을 담은 배열
const steps = ['이메일', '비밀번호', '프로필 설정', '회원가입 완료'];

const SignupMain = () => {
  const router = useRouter();
  const { Funnel, Step, setStep, currentStep } = useFunnel(steps[0]);

  const handleClickPrev = () => {
    const index = steps.indexOf(currentStep);

    if (index === 0) return router.back();

    return setStep(steps[index - 1]);
  };

  const handleClickNext = (steps: string) => {
    setStep(steps);
  };

  const handleSubmitSignup = () => {};

  return (
    <div className="flex-col justify-around w-full">
      {currentStep !== '회원가입 완료' && (
        <PageHeader title="회원가입" handleRoutePrev={handleClickPrev} />
      )}
      <GenericForm<FormDataType>
        formOptions={{
          mode: 'onChange',
          defaultValues: {
            isVerifyEmail: false,
            isVerifyCode: false,
            gender: 'female',
            birth: dayjs('2000-10-22').format('YYYY / MM / DD'),
            userName: '',
            email: '',
            code: '',
            password: '',
            confirmPassword: '',
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
          <Step name="회원가입 완료">
            <SetupComplteSignup />
          </Step>
        </Funnel>
        <BirthDrawer />
      </GenericForm>
    </div>
  );
};

export default SignupMain;
