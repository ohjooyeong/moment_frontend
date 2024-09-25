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
};

const ProfileNewPasswordMain = () => {
  const [loading, setLoading] = useState(false);

  const ProfileNewPasswordMutation = useConfirmPassword();

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
    },
  });

  const password = watch('password');

  const handleDeletePassword = () => {
    setValue('password', '');
  };

  const onSubmit: SubmitHandler<ProfileNewPasswordFormData> = async (
    context,
  ) => {
    try {
      setLoading(true);
      if (
        context.password === '1q2w3e4r' &&
        context.newPassword === '1q2w3e4r!!'
      ) {
        return;
      }
      // await ProfileNewPasswordMutation.mutateAsync(
      //   {
      //     password: context.password,
      //   },
      //   {
      //     onSuccess() {},
      //   },
      // );

      // Assuming the response contains an accessToken
    } catch (error) {
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
        <motion.div
          initial={{ y: 0, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.75 }}
          className="mt-4"
        >
          <PageHeader title="비밀번호 변경" handleRoutePrev={() => {}} />

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
                    required: '비밀번호는 필수 입력 항목입니다.',
                  })}
                  maxLength={50}
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
                    required: '비밀번호는 필수 입력 항목입니다.',
                  })}
                  maxLength={50}
                />
                {register.name && (
                  <CircleXIcon
                    className={cn(
                      'absolute right-2 top-[6px] cursor-pointer text-customGray-3 w-5 h-5',
                    )}
                    onClick={handleDeletePassword}
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
                  {...register('newPassword', {
                    required: '비밀번호는 필수 입력 항목입니다.',
                  })}
                  maxLength={50}
                />
                {register.name && (
                  <CircleXIcon
                    className={cn(
                      'absolute right-2 top-[6px] cursor-pointer text-customGray-3 w-5 h-5',
                    )}
                    onClick={handleDeletePassword}
                  />
                )}
                {errors?.newPassword && (
                  <p className="absolute left-2 bottom-0 text-sm text-secondary">
                    {errors.newPassword.message}
                  </p>
                )}
              </div>
            </div>
          </div>
          <Button
            className="relative bg-primary w-full rounded-2xl h-[60px] font-semibold text-lg text-white
              mt-[36px] disabled:text-customGray-1 disabled:bg-customWhite-3"
            disabled={!password || loading}
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
