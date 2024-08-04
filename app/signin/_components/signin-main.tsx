'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import ImageKakaoMainLogo from '@/public/assets/image-kakao-main-logo.svg';
import ImageGoogleLogo from '@/public/assets/image-google-logo.svg';
import { EyeIcon, EyeOffIcon, LockKeyholeIcon, MailIcon } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import Link from 'next/link';
import PageHeader from '@/components/page-header';
import { useRouter } from 'next/navigation';
import axios from 'axios';
import GenericForm from '@/components/genric-form';
import { useForm } from 'react-hook-form';
import { CircleXIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';
import { setCookie, getCookie } from 'cookies-next';

export type SigninFormDataType = {
  email: string;
  password: string;
};

const SigninMain = () => {
  const {
    register,
    watch,
    setValue,
    trigger,
    formState: { errors },
  } = useForm<SigninFormDataType>();

  const [focusedEmail, setFocusedEmail] = useState(false);
  const [viewPassword, setViewPassword] = useState(false);
  const [focusedPassword, setFocusedPassword] = useState(false);
  const [isRememberEmail, setIsRememberEmail] = useState(false);

  const router = useRouter();

  const email = watch('email');

  const handleDeleteEmail = () => {
    setValue('email', '');
  };

  const toggleViewPassword = (status: 'VIEW' | 'HIDE') => {
    if (status === 'VIEW') {
      setViewPassword(true);
    }
    if (status === 'HIDE') {
      setViewPassword(false);
    }
  };

  const toggleFocusedEmail = (status: 'FOCUS' | 'BLUR') => {
    if (status === 'FOCUS') {
      setFocusedEmail(true);
    }
    if (status === 'BLUR') {
      setFocusedEmail(false);
    }
  };

  const toggleFocusedPassword = (status: 'FOCUS' | 'BLUR') => {
    if (status === 'FOCUS') {
      setFocusedPassword(true);
    }
    if (status === 'BLUR') {
      setFocusedPassword(false);
    }
  };

  const handleRoutePrev = () => {
    router.back();
  };

  const handleSubmitSignup = async () => {
    const emailOutput = await trigger('email');
    if (!emailOutput) return;

    const passwordOutput = await trigger('password');
    if (!passwordOutput) return;
    if (isRememberEmail) {
      setCookie('rememberEmail', email);
    } else {
      setCookie('rememberEmail', '');
    }
  };

  useEffect(() => {
    const getRememberEmail = getCookie('rememberEmail');
    if (getRememberEmail) {
      setIsRememberEmail(true);
      setValue('email', getRememberEmail.toString());
    }
  }, []);

  return (
    <div className="flex-col justify-around w-full">
      <PageHeader title="로그인" handleRoutePrev={handleRoutePrev} />
      <GenericForm<SigninFormDataType>
        formOptions={{
          mode: 'onChange',
          defaultValues: {
            email: '',
            password: '',
          },
        }}
        onSubmit={handleSubmitSignup}
      >
        <div className="flex flex-col justify-center gap-5 mb-[40px]">
          <div className="flex flex-col w-full">
            <span className="ml-2 mb-2 text-[16px]/[24px] font-medium text-black">
              이메일
            </span>
            <div className="flex relative w-full">
              <Input
                className={cn(
                  `pl-[50px] relative w-full rounded-2xl h-[60px] font-medium text-[16px]/[24px]
                  text-customBlack-1 border-customGray-3 focus-visible:ring-transparent
                  focus-visible:border-primary placeholder:text-customGray-3`,
                )}
                placeholder="이메일을 입력해 주세요"
                inputMode="email"
                type={'text'}
                {...register('email', {
                  pattern: {
                    value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i,
                    message: '이메일 또는 비밀번호가 잘못 되었습니다.',
                  },
                  required: '이메일을 입력해 주세요.',
                })}
                onFocus={() => toggleFocusedEmail('FOCUS')}
                onBlur={() => toggleFocusedEmail('BLUR')}
                maxLength={50}
              />
              <MailIcon
                width={20}
                height={20}
                className={cn(
                  'absolute left-5 top-[20px] text-customGray-2',
                  focusedEmail && 'text-primary',
                )}
              />
              {email && (
                <CircleXIcon
                  className={cn(
                    'absolute right-5 top-5 cursor-pointer text-customGray-3 w-5 h-5',
                  )}
                  onClick={handleDeleteEmail}
                />
              )}
            </div>
          </div>
          <div className="flex flex-col w-full">
            <span className="ml-2 mb-2 text-[16px]/[24px] font-medium text-black">
              비밀번호
            </span>
            <div className="flex relative w-full">
              <Input
                className={cn(
                  `pl-[50px] relative w-full rounded-2xl h-[60px] font-medium text-[16px]/[24px]
                  text-customBlack-1 border-customGray-3 focus-visible:ring-transparent
                  focus-visible:border-primary placeholder:text-customGray-3`,
                )}
                placeholder="비밀번호를 입력해 주세요"
                type={viewPassword ? 'text' : 'password'}
                {...register('password', {
                  pattern: {
                    value:
                      /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,15}$/i,
                    message: '이메일 또는 비밀번호가 잘못 되었습니다.',
                  },
                  required: '비밀번호를 입력해 주세요.',
                })}
                onFocus={() => toggleFocusedPassword('FOCUS')}
                onBlur={() => toggleFocusedPassword('BLUR')}
                maxLength={30}
              />
              <LockKeyholeIcon
                width={20}
                height={20}
                className={cn(
                  'absolute left-5 top-[20px] text-customGray-2',
                  focusedPassword && 'text-primary',
                )}
              />
              {viewPassword ? (
                <EyeIcon
                  className={cn(
                    'absolute right-5 top-5 cursor-pointer text-customGray-3 w-5 h-5',
                    focusedPassword && 'text-primary',
                  )}
                  onClick={() => toggleViewPassword('HIDE')}
                />
              ) : (
                <EyeOffIcon
                  className={cn(
                    'absolute right-5 top-5 cursor-pointer text-customGray-3 w-5 h-5',
                    focusedPassword && 'text-primary',
                  )}
                  onClick={() => toggleViewPassword('VIEW')}
                />
              )}
            </div>
          </div>
          <div className="flex justify-between">
            <div className="flex items-center space-x-2 ml-2">
              <Checkbox
                id="id-save-check"
                className="data-[state=checked]:text-white data-[state=checked]:border-primary w-[22px]
                  h-[22px] border-customGray-3"
                onClick={() => {
                  setIsRememberEmail((prev) => !prev);
                }}
                checked={isRememberEmail}
              />
              <label
                htmlFor="id-save-check"
                className="text-customGray-1 select-none cursor-pointer leading-none
                  peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-[16px]/[24px]"
              >
                이메일 저장
              </label>
            </div>
            <div className="text-customGray-1 cursor-pointer text-[16px]/[24px] hover:text-primary">
              비밀번호 찾기
            </div>
          </div>
        </div>
        <div className="w-full h-5 text-right mb-1 font-medium">
          {errors?.email && (
            <p className="text-[16px]/[24px] text-secondary">
              {errors?.email.message}
            </p>
          )}
          {errors?.password && (
            <p className="text-[16px]/[24px] text-secondary">
              {errors?.password.message}
            </p>
          )}
        </div>
        <Button
          className="relative bg-primary w-full rounded-2xl h-[60px] font-semibold text-[20px]/[30px]
            text-white mb-[47px]"
          asChild
        >
          <Link href={'#'}>로그인</Link>
        </Button>
      </GenericForm>

      <div className="flex items-center justify-between gap-[22px]">
        {/* 카카오 로그인 */}
        <Button
          variant={'outline'}
          className="flex items-center justify-center bg-white w-full rounded-2xl h-[60px]
            font-semibold text-[20px]/[30px] text-white mb-[47px] border-customGray-2"
          asChild
        >
          <Link
            href={
              'http://ec2-43-203-84-215.ap-northeast-2.compute.amazonaws.com:8080/oauth2/authorization/kakao'
            }
          >
            로그인
            <Image
              width={34}
              height={34}
              alt="kakao-logo"
              src={ImageKakaoMainLogo}
            />
          </Link>
        </Button>
        {/* 구글 로그인 */}
        <Button
          variant={'outline'}
          className="relative bg-white w-full rounded-2xl h-[60px] font-semibold text-[20px]/[30px]
            text-white mb-[47px] border-customGray-2"
          asChild
        >
          <Link
            href={
              'http://ec2-43-203-84-215.ap-northeast-2.compute.amazonaws.com:8080/oauth2/authorization/google'
            }
          >
            <Image
              width={28}
              height={28}
              alt="kakao-logo"
              src={ImageGoogleLogo}
            />
          </Link>
        </Button>
      </div>
      <div className="flex absolute bottom-4 left-0 right-0 max-w-xl justify-center">
        <p className="text-customBlack-1 font-medium text-[16px]/[24px]">
          아직 회원이 아니신가요?
        </p>
        <Link
          href={'/signup'}
          className="text-secondary text-[16px]/[24px] font-semibold ml-[6px] underline
            cursor-pointer"
        >
          회원가입
        </Link>
      </div>
    </div>
  );
};

export default SigninMain;
