'use client';

import { motion } from 'framer-motion';
import { CircleXIcon, CircleCheckIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import { useFormContext } from 'react-hook-form';
import { FormDataType } from './signup-main';
import { cn } from '@/lib/utils';
import TimeLeft from './time-left';
import { useEffect, useState } from 'react';

type Props = {
  handleClickNext: () => void;
};

const SetupEmail = ({ handleClickNext }: Props) => {
  const {
    register,
    watch,
    setValue,
    trigger,
    formState: { errors },
  } = useFormContext<FormDataType>();
  const [verificationMessage, setVerificationMessage] = useState('');
  const [timer, setTimer] = useState<NodeJS.Timeout | null>(null);
  const [correctCode, setCorrectCode] = useState('123456');

  const email = watch('email');
  const code = watch('code');
  const isVerifyEmail = watch('isVerifyEmail');
  const isVerifyCode = watch('isVerifyCode');

  const handleDeleteEmail = () => {
    setValue('email', '');
    setValue('isVerifyEmail', false);
    setValue('code', '');
    setValue('isVerifyCode', false);
  };

  const handleEmailConfirm = async () => {
    const output = await trigger('email', { shouldFocus: true });

    if (!output) return;

    setValue('isVerifyEmail', output);
  };

  useEffect(() => {
    if (code && code.length === 6) {
      if (timer) clearTimeout(timer);
      setTimer(
        setTimeout(() => {
          if (code === correctCode) {
            setVerificationMessage('성공적으로 인증이 완료됐어요!');
            setValue('isVerifyCode', true);
          } else {
            setVerificationMessage('인증번호를 재확인하세요.');
          }
        }, 300),
      );
    } else {
      setVerificationMessage('');
    }
  }, [code, correctCode]);

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
              id="email"
              className={cn(
                `pl-2 relative w-full h-[32px] font-medium text-[16px]/[24px] text-customBlack-1
                rounded-none border-0 border-b-2 border-black ring-offset-transparent bg-white
                focus-visible:ring-transparent placeholder:text-customGray-3
                placeholder:font-medium pr-10`,
                isVerifyEmail && 'text-primary',
              )}
              inputMode="email"
              placeholder="test1234@naver.com"
              type={'text'}
              {...register('email', {
                pattern: {
                  value:
                    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
                  message: '알맞은 이메일이 아닙니다!',
                },
              })}
              readOnly={isVerifyEmail}
            />
            {email && (
              <CircleXIcon
                className={cn(
                  'absolute right-2 top-[6px] cursor-pointer text-customGray-3 w-5 h-5',
                  isVerifyEmail && 'text-primary',
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
      {isVerifyEmail && (
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
                id="code"
                className={cn(
                  `pl-2 relative w-full h-[32px] font-medium text-[16px]/[24px] text-customBlack-1
                  rounded-none border-0 border-b-2 border-black focus-visible:ring-transparent
                  placeholder:text-customGray-3 placeholder:font-medium pr-10`,
                  isVerifyCode && 'text-primary border-primary',
                )}
                placeholder="123456"
                type="text"
                inputMode="numeric"
                {...register('code', {
                  required: true,
                  pattern: /^[0-9]{6}$/,
                  maxLength: 6,
                })}
                maxLength={6}
                readOnly={isVerifyCode}
              />
              {!isVerifyCode && email && <TimeLeft />}
              {isVerifyCode && (
                <CircleCheckIcon
                  className={cn(
                    'absolute right-2 top-[6px] text-primary w-5 h-5',
                  )}
                />
              )}
              {verificationMessage && (
                <p
                  className={cn(
                    'absolute left-2 bottom-0 text-[12px]/[18px] text-secondary',
                    isVerifyCode && 'text-primary font-semibold',
                  )}
                >
                  {verificationMessage}
                </p>
              )}
            </div>
          </div>
        </motion.div>
      )}
      {!isVerifyEmail && (
        <Button
          className="relative bg-primary w-full rounded-2xl h-[60px] font-semibold text-lg text-white
            mt-[36px] disabled:text-customGray-1 disabled:bg-customWhite-3"
          onClick={handleEmailConfirm}
          disabled={!email}
        >
          이메일 인증
        </Button>
      )}
      {isVerifyEmail && (
        <Button
          className="relative bg-primary w-full rounded-2xl h-[60px] font-semibold text-lg text-white
            mt-[36px] disabled:text-customGray-1 disabled:bg-customWhite-3"
          onClick={handleClickNext}
          disabled={!isVerifyCode}
        >
          계속하기
        </Button>
      )}
    </motion.div>
  );
};

export default SetupEmail;
