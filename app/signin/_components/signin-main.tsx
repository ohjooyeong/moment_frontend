'use client';

import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useForm, SubmitHandler } from 'react-hook-form';
import { setCookie } from 'cookies-next';
import { Button } from '@/components/ui/button';
import PageHeader from '@/components/page-header';
import GenericForm from '@/components/genric-form';

import { EyeIcon, EyeOffIcon, LockKeyholeIcon, MailIcon } from 'lucide-react';

import InputField from './input-field';
import useToggle from '../_hooks/use-toggle';
import useRememberEmail from '../_hooks/use-remember-email';
import SocialLoginButtons from './social-login-buttons';
import CheckboxField from './checkbox-field';
import useSignin from '../_hooks/use-signin';
import { toast } from 'sonner';
import { useEffect, useState } from 'react';

type SigninFormData = {
  email: string;
  password: string;
};

const SigninMain = () => {
  const router = useRouter();
  const [viewPassword, toggleViewPassword] = useToggle(false);
  const { isRememberEmail, setIsRememberEmail, rememberedEmail } =
    useRememberEmail();

  const signinMutation = useSignin();
  const [loginError, setLoginError] = useState<string | null>(null);

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<SigninFormData>({
    defaultValues: {
      email: rememberedEmail,
      password: '',
    },
  });

  // useEffect to update email field when rememberedEmail changes
  useEffect(() => {
    if (rememberedEmail) {
      setValue('email', rememberedEmail);
    }
  }, [rememberedEmail, setValue]);

  const onSubmit: SubmitHandler<SigninFormData> = async (context) => {
    if (isRememberEmail) {
      setCookie('rememberEmail', context.email);
    } else {
      setCookie('rememberEmail', '');
    }

    try {
      const response = await signinMutation.mutateAsync({
        email: context.email,
        password: context.password,
      });
      if (response.code === 10000) {
        setCookie('rememberEmail', response.accessToken);

        // Navigate to home page
        router.push('/');
      } else {
        setLoginError(response.message);
      }
    } catch (error) {
      setLoginError('이메일 또는 비밀번호가 잘못 되었습니다.');
    }
  };

  return (
    <div className="flex-col justify-around w-full">
      <PageHeader title="로그인" handleRoutePrev={() => router.back()} />
      <GenericForm<SigninFormData>
        onSubmit={handleSubmit(onSubmit) as any}
        formOptions={{
          mode: 'onChange',
        }}
      >
        <div className="flex flex-col justify-center gap-5 mb-10">
          <InputField
            label="이메일"
            type="email"
            placeholder="이메일을 입력해 주세요"
            icon={<MailIcon className="w-5 h-5" />}
            register={register('email', {
              pattern: {
                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i,
                message: '이메일 또는 비밀번호가 잘못 되었습니다.',
              },
              required: '이메일을 입력해 주세요.',
            })}
            error={errors.email}
            onClear={() => setValue('email', '')}
          />
          <InputField
            label="비밀번호"
            type={viewPassword ? 'text' : 'password'}
            placeholder="비밀번호를 입력해 주세요"
            icon={<LockKeyholeIcon className="w-5 h-5" />}
            register={register('password', {
              pattern: {
                value: /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/i,
                message: '이메일 또는 비밀번호가 잘못 되었습니다.',
              },
              required: '비밀번호를 입력해 주세요.',
            })}
            error={errors.password}
            rightIcon={
              viewPassword ? (
                <EyeIcon
                  className="w-5 h-5 cursor-pointer"
                  onClick={() => toggleViewPassword()}
                />
              ) : (
                <EyeOffIcon
                  className="w-5 h-5 cursor-pointer"
                  onClick={() => toggleViewPassword()}
                />
              )
            }
          />
          <div className="flex justify-between">
            <CheckboxField
              id="id-save-check"
              label="이메일 저장"
              checked={isRememberEmail}
              onChange={() => setIsRememberEmail((prev) => !prev)}
            />
            <Link
              href="/find-password"
              className="text-customGray-1 hover:text-primary text-sm"
            >
              비밀번호 찾기
            </Link>
          </div>
        </div>
        <div className="w-full text-right mb-2">
          {(errors.email || errors.password || loginError) && (
            <p className="text-sm text-secondary">
              {errors.email?.message || errors.password?.message || loginError}
            </p>
          )}
        </div>
        <Button
          className="w-full rounded-2xl h-[60px] text-lg font-semibold text-white bg-primary mb-12"
          type="submit"
        >
          로그인
        </Button>
      </GenericForm>

      <SocialLoginButtons />
      <SignupPrompt />
    </div>
  );
};

const SignupPrompt = () => (
  <div className="flex absolute bottom-4 left-0 right-0 max-w-xl justify-center">
    <p className="text-customBlack-1 font-medium text-sm">
      아직 회원이 아니신가요?
    </p>
    <Link
      href="/signup"
      className="text-secondary text-sm font-bold ml-[6px] underline cursor-pointer"
    >
      회원가입
    </Link>
  </div>
);

export default SigninMain;
