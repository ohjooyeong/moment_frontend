'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useEffect, useState } from 'react';
import { useFormContext } from 'react-hook-form';
import { FormDataType } from './signup-main';
import { cn } from '@/lib/utils';

type Props = {
  handleClickNext: () => void;
};

type TPassword = 'none' | 'wrong' | 'right';

const SetupPassword = ({ handleClickNext }: Props) => {
  const { register, watch } = useFormContext<FormDataType>();
  const [passwordMessage, setPasswordMessage] = useState('');
  const [passwordStatus, setPasswordStatus] = useState<TPassword>('none');
  const [passwordTimer, setPasswordTimer] = useState<NodeJS.Timeout | null>(
    null,
  );
  const [confirmPasswordMessage, setConfirmPasswordMessage] = useState('');
  const [confirmPasswordTimer, setConfirmPasswordTimer] =
    useState<NodeJS.Timeout | null>(null);

  const password = watch('password');
  const confirmPassword = watch('confirmPassword');

  const isNext =
    passwordStatus === 'right' &&
    confirmPasswordMessage === '' &&
    confirmPassword.length > 7;

  useEffect(() => {
    if (passwordTimer) clearTimeout(passwordTimer);
    setPasswordTimer(
      setTimeout(() => {
        if (password) {
          const isValidPassword =
            password.length >= 8 && /[!@#$%^&*(),.?":{}|<>]/.test(password);
          if (isValidPassword) {
            setPasswordMessage('알맞은 비밀번호입니다 :)');
            setPasswordStatus('right');
          } else {
            setPasswordMessage('아직 특수문자 포함 8자리가 아니에요.');
            setPasswordStatus('wrong');
          }
        } else {
          setPasswordMessage('');
          setPasswordStatus('none');
        }
      }, 200),
    );
  }, [password]);

  useEffect(() => {
    if (confirmPasswordTimer) clearTimeout(confirmPasswordTimer);
    setConfirmPasswordTimer(
      setTimeout(() => {
        if (confirmPassword && password !== confirmPassword) {
          setConfirmPasswordMessage('두 비밀번호가 달라요! 확인해 보시겠어요?');
        } else {
          setConfirmPasswordMessage('');
        }
      }, 100),
    );
  }, [confirmPassword, password]);

  return (
    <motion.div
      initial={{ y: 0, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.75 }}
    >
      <div className="flex flex-col mt-[14px]">
        <h2 className="text-black text-[24px]/[32px] font-semibold mt-[14px] mb-[10px]">
          비밀번호 입력
        </h2>
        <div className="flex flex-col w-full">
          <div className="flex w-full relative h-[54px]">
            <Input
              id="password"
              className="pl-2 relative w-full h-[32px] font-medium text-[16px]/[24px] text-customBlack-1
                rounded-none border-0 border-b-2 border-black focus-visible:ring-transparent
                placeholder:text-customGray-3 placeholder:font-medium pr-10"
              placeholder="8자리 이상 특수문자 포함 입력해주세요."
              type="password"
              {...register('password', {
                required: '비밀번호는 필수 입력 항목입니다.',
              })}
              maxLength={30}
            />
            {passwordMessage && (
              <p
                className={cn(
                  'absolute left-2 bottom-0 text-[12px]/[18px] text-secondary',
                  passwordStatus === 'right' && 'text-primary',
                )}
              >
                {passwordMessage}
              </p>
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <h2 className="text-black text-[24px]/[32px] font-semibold mt-[14px] mb-[10px]">
          비밀번호 확인
        </h2>
        <div className="flex flex-col w-full">
          <div className="flex w-full relative h-[54px]">
            <Input
              id="confirmPassword"
              className="pl-2 relative w-full h-[32px] font-medium text-[16px]/[24px] text-customBlack-1
                rounded-none border-0 border-b-2 border-black focus-visible:ring-transparent
                placeholder:text-customGray-3 placeholder:font-medium pr-10"
              placeholder="다시 한번 입력해 주세요."
              type="password"
              {...register('confirmPassword', {
                required: '비밀번호 확인은 필수 입력 항목입니다.',
              })}
              maxLength={30}
            />
            {confirmPasswordMessage && (
              <p className="absolute left-2 bottom-0 text-[12px]/[18px] text-secondary">
                {confirmPasswordMessage}
              </p>
            )}
          </div>
        </div>
      </div>
      <Button
        className="relative bg-primary w-full rounded-2xl h-[60px] font-semibold text-lg text-white
          mt-[36px] disabled:text-customGray-1 disabled:bg-customWhite-3"
        disabled={!isNext}
        onClick={handleClickNext}
      >
        계속하기
      </Button>
    </motion.div>
  );
};

export default SetupPassword;
