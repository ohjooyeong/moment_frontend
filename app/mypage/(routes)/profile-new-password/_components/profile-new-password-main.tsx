'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { SubmitHandler, useForm } from 'react-hook-form';
import GenericForm from '@/components/genric-form';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { CircleXIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import useConfirmPassword from '@/app/mypage/_hooks/use-confirm-password';
import PageHeader from '@/components/page-header';

type ProfileNewPasswordFormData = {
  password: string;
  newPassword: string;
  newConfirmPassword: string;
};

const ProfileNewPasswordMain = () => {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const passwordConfirmMutation = useConfirmPassword();

  const {
    register,
    setValue,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ProfileNewPasswordFormData>({
    defaultValues: {
      password: '',
      newPassword: '',
      newConfirmPassword: '',
    },
  });

  const password = watch('password');
  const newPassword = watch('newPassword');
  const newConfirmPassword = watch('newConfirmPassword');

  const handleDeletePassword = () => {
    setValue('password', '');
  };

  const handleDeleteNewPassword = () => {
    setValue('newPassword', '');
  };

  const handleDeleteNewConfirmPassword = () => {
    setValue('newConfirmPassword', '');
  };

  const isValidPassword = (password: string) =>
    password.length >= 8 && /[!@#$%^&*(),.?":{}|<>]/.test(password);

  const onSubmit: SubmitHandler<ProfileNewPasswordFormData> = async (
    context,
  ) => {
    setErrorMessage('');
    if (context.newPassword !== context.newConfirmPassword) {
      setErrorMessage('새 비밀번호와 확인 비밀번호가 일치하지 않습니다.');
      return;
    }

    if (!isValidPassword(context.newPassword)) {
      setErrorMessage(
        '새 비밀번호는 8자 이상이며, 특수문자를 포함해야 합니다.',
      );
      return;
    }

    try {
      setLoading(true);

      await passwordConfirmMutation.mutateAsync(
        {
          password: context.password,
          newPassword: context.newPassword,
        },
        {
          onSuccess() {},
          onError(error: any) {
            if (error.message === 'Invalid current password') {
              setErrorMessage('현재 비밀번호가 올바르지 않습니다.');
            } else {
              setErrorMessage('비밀번호 변경 중 오류가 발생했습니다.');
            }
          },
        },
      );

      // Assuming the response contains an accessToken
    } catch (error) {
      setErrorMessage('비밀번호 변경 중 오류가 발생했습니다.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex-col justify-around w-full">
      <GenericForm<ProfileNewPasswordFormData>
        onSubmit={handleSubmit(onSubmit) as any}
        formOptions={{
          mode: 'onChange',
        }}
      >
        <PageHeader title="비밀번호 변경" toLink="/mypage/profile-setting" />
        <motion.div
          initial={{ y: 0, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.75 }}
          className="mt-4"
        >
          <div className="flex flex-col mt-7">
            <h2 className="text-black text-xl font-semibold mt-[14px] mb-[10px]">
              기존 비밀번호
            </h2>
            <div className="flex flex-col w-full">
              <div className="flex w-full relative h-[54px]">
                <Input
                  id="email"
                  className={cn(
                    `pl-2 relative w-full h-[32px] font-medium text-base text-customBlack-1
                    rounded-none border-0 border-b-2 border-black ring-offset-transparent bg-white
                    focus-visible:ring-transparent placeholder:text-customGray-3
                    placeholder:font-medium pr-10`,
                  )}
                  placeholder="비밀번호를 입력해 주세요"
                  type={'password'}
                  {...register('password', {
                    required: '기존 비밀번호는 필수 입력 항목입니다.',
                  })}
                  maxLength={30}
                />
                {register.name && (
                  <CircleXIcon
                    className={cn(
                      'absolute right-2 top-[6px] cursor-pointer text-customGray-3 w-5 h-5',
                    )}
                    onClick={handleDeletePassword}
                  />
                )}
                {errors?.password && (
                  <p className="absolute left-2 bottom-0 text-sm text-secondary">
                    {errors.password.message}
                  </p>
                )}
              </div>
            </div>
            <div className="flex flex-col">
              <h2 className="text-black text-xl font-semibold mt-[14px] mb-[10px]">
                새 비밀번호
              </h2>
              <div className="flex w-full relative">
                <Input
                  id="email"
                  className={cn(
                    `pl-2 relative w-full h-[32px] font-medium text-base text-customBlack-1
                    rounded-none border-0 border-b-2 border-black ring-offset-transparent bg-white
                    focus-visible:ring-transparent placeholder:text-customGray-3
                    placeholder:font-medium pr-10`,
                  )}
                  placeholder="비밀번호를 입력해 주세요"
                  type={'password'}
                  {...register('newPassword', {
                    required: '새 비밀번호는 필수 입력 항목입니다.',
                    validate: (value) =>
                      isValidPassword(value) ||
                      '비밀번호는 8자 이상이며, 특수문자를 포함해야 합니다.',
                  })}
                  maxLength={30}
                />
                {register.name && (
                  <CircleXIcon
                    className={cn(
                      'absolute right-2 top-[6px] cursor-pointer text-customGray-3 w-5 h-5',
                    )}
                    onClick={handleDeleteNewPassword}
                  />
                )}
                {errors?.newPassword && (
                  <p className="absolute left-2 bottom-0 text-sm text-secondary">
                    {errors.newPassword.message}
                  </p>
                )}
              </div>
            </div>
            <div className="flex flex-col">
              <h2 className="text-black text-xl font-semibold mt-[14px] mb-[10px]">
                비밀번호 확인
              </h2>
              <div className="flex w-full relative">
                <Input
                  id="email"
                  className={cn(
                    `pl-2 relative w-full h-[32px] font-medium text-base text-customBlack-1
                    rounded-none border-0 border-b-2 border-black ring-offset-transparent bg-white
                    focus-visible:ring-transparent placeholder:text-customGray-3
                    placeholder:font-medium pr-10`,
                  )}
                  placeholder="비밀번호를 입력해 주세요"
                  type={'password'}
                  {...register('newConfirmPassword', {
                    required: '새 비밀번호 확인은 필수 입력 항목입니다.',
                    validate: (value) =>
                      value === newPassword ||
                      '새 비밀번호와 확인 비밀번호가 일치하지 않습니다.',
                  })}
                  maxLength={30}
                />
                {register.name && (
                  <CircleXIcon
                    className={cn(
                      'absolute right-2 top-[6px] cursor-pointer text-customGray-3 w-5 h-5',
                    )}
                    onClick={handleDeleteNewConfirmPassword}
                  />
                )}
                {errors?.newConfirmPassword && (
                  <p className="absolute left-2 bottom-0 text-sm text-secondary">
                    {errors.newConfirmPassword.message}
                  </p>
                )}
              </div>
            </div>
          </div>
          {errorMessage && (
            <p className="mt-4 text-sm text-secondary">{errorMessage}</p>
          )}
          <Button
            className="relative bg-primary w-full rounded-2xl h-[60px] font-semibold text-lg text-white
              mt-[36px] disabled:text-customGray-1 disabled:bg-customWhite-3"
            disabled={
              !password ||
              !newConfirmPassword ||
              !newPassword ||
              loading ||
              !!errors.password ||
              !!errors.newPassword ||
              !!errors.newConfirmPassword
            }
            type="submit"
          >
            확인하기
          </Button>
        </motion.div>
      </GenericForm>
    </div>
  );
};

export default ProfileNewPasswordMain;
