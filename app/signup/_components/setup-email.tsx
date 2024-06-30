'use client';

import { motion } from 'framer-motion';
import { CircleXIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import { useForm } from 'react-hook-form';
import { FormDataType } from './signup-main';
import useDeviceType from '@/hooks/use-device-type';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

type Props = {
  handleClickNext: (step: string) => void;
};

const SetupEmail = ({ handleClickNext }: Props) => {
  const deviceType = useDeviceType();
  const {
    register,
    watch,
    setValue,
    trigger,
    formState: { errors },
  } = useForm<FormDataType>();

  const [emailVerify, setEmailVerify] = useState(false);
  const [verify, setVerify] = useState(false);
  const [timeLeft, setTimeLeft] = useState(180); // 3분 = 180초

  const email = watch('email');
  const verifyEmail = watch('verifyEmail');

  const handleDeleteEmail = () => {
    setValue('email', '');
    setEmailVerify(false);
  };

  const handleEmailConfirm = async () => {
    const output = await trigger('email', { shouldFocus: true });

    if (!output) return;

    setEmailVerify(output);
  };

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes < 10 ? '0' : ''}${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      initial={{ y: 0, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.75 }}
    >
      <h1 className="text-black text-[24px]/[32px] font-semibold mt-[14px]">
        함께 시작할래요?
      </h1>
      <div className="flex flex-col mt-7">
        <span className="mb-3 text-[14px]/[22px] font-normal text-customGray-1">
          {`이메일을 입력해 주세요 :)`}
        </span>
        <div className="flex flex-col w-full">
          <div className="flex w-full relative h-[54px]">
            <Input
              className={cn(
                `pl-2 relative w-full h-[32px] font-medium text-[16px]/[24px] text-customBlack-1
                rounded-none border-0 border-b-2 border-black ring-offset-transparent bg-white
                focus-visible:ring-transparent placeholder:text-customGray-3
                placeholder:font-medium pr-10`,
                emailVerify && 'text-primary',
              )}
              placeholder="test1234@naver.com"
              type={deviceType === 'mobile' ? 'email' : 'text'}
              {...register('email', {
                pattern: {
                  value:
                    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
                  message: '알맞은 이메일이 아닙니다!',
                },
              })}
              readOnly={emailVerify}
            />
            {email && (
              <CircleXIcon
                className={cn(
                  'absolute right-2 top-[6px] cursor-pointer text-customGray-3 w-5 h-5',
                  emailVerify && 'text-primary',
                )}
                onClick={handleDeleteEmail}
              />
            )}
            {errors?.email && (
              <p className="absolute left-2 bottom-0 text-[12px]/[18px] text-secondary">
                {errors.email.message}
              </p>
            )}
          </div>
        </div>
      </div>
      {emailVerify && (
        <motion.div
          initial={{ y: 0, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.75 }}
          className="flex flex-col mt-[14px]"
        >
          <span className="mb-3 text-[14px]/[22px] font-normal text-customGray-1">
            {`이메일에 전송된 인증번호를 입력해 주세요 :)`}
          </span>
          <div className="flex flex-col w-full">
            <div className="flex w-full relative h-[54px]">
              <Input
                className="pl-2 relative w-full h-[32px] font-medium text-[16px]/[24px] text-customBlack-1
                  rounded-none border-0 border-b-2 border-black focus-visible:ring-transparent
                  placeholder:text-customGray-3 placeholder:font-medium pr-10"
                placeholder="123456"
                type="email"
              />
              {email && (
                <p
                  className={cn(
                    'absolute right-2 top-[6px] cursor-pointer text-customGray-1 text-end',
                  )}
                >
                  {timeLeft === 0 ? '시간 초과' : formatTime(timeLeft)}
                </p>
              )}
            </div>
          </div>
        </motion.div>
      )}
      {!emailVerify && (
        <Button
          className="relative bg-primary w-full rounded-2xl h-[60px] font-semibold text-lg text-white
            mt-[36px] disabled:text-customGray-1 disabled:bg-customWhite-3"
          onClick={handleEmailConfirm}
          disabled={!email}
        >
          이메일 인증
        </Button>
      )}
      {emailVerify && (
        <Button
          className="relative bg-primary w-full rounded-2xl h-[60px] font-semibold text-lg text-white
            mt-[36px] disabled:text-customGray-1 disabled:bg-customWhite-3"
          onClick={handleEmailConfirm}
          disabled={!verifyEmail}
        >
          계속하기
        </Button>
      )}
    </motion.div>
  );
};

export default SetupEmail;
