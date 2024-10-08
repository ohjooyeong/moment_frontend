'use client';

import { motion } from 'framer-motion';
import { CircleXIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { useFormContext } from 'react-hook-form';
import { FormProfileDataType } from '../_type';
import { useBirths } from '../_hooks/use-births';

const ProfileInfo = () => {
  const {
    register,
    watch,
    setValue,
    formState: { errors },
  } = useFormContext<FormProfileDataType>();
  const births = useBirths();
  const name = watch('name');
  const gender = watch('gender');
  const birth = watch('birth');

  const isConfirm = name.length > 1 && gender && birth;

  const handleDeletename = () => {
    setValue('name', '');
  };

  const handleChangeGender = (select: FormProfileDataType['gender']) => {
    setValue('gender', select);
  };

  return (
    <motion.div
      initial={{ y: 0, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.75 }}
    >
      <div className="flex flex-col mt-[14px]">
        <h2 className="text-black text-xl font-semibold mt-[14px] mb-[10px]">
          이름 입력
        </h2>
        <div className="flex flex-col w-full">
          <div className="flex w-full relative h-[54px]">
            <Input
              id="name"
              className="pl-2 relative w-full h-[32px] font-medium text-sm text-customBlack-1
                rounded-none border-0 border-b-2 border-black focus-visible:ring-transparent
                placeholder:text-customGray-3 placeholder:font-medium pr-10"
              placeholder="이름을 입력해 주세요."
              type="text"
              {...register('name', {
                minLength: {
                  value: 2,
                  message: '사용자 이름은 최소 2자 이상이어야 합니다.',
                },
              })}
              maxLength={30}
            />
            {name && (
              <CircleXIcon
                className="absolute right-2 top-[6px] cursor-pointer text-customGray-3 w-5 h-5"
                onClick={handleDeletename}
              />
            )}
            {errors?.name && (
              <p className="absolute left-2 bottom-0 text-sm text-secondary">
                {errors.name.message}
              </p>
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        <h2 className="text-black text-xl font-semibold mt-[14px] mb-[10px]">
          성별 선택
        </h2>
        <div
          className="flex items-center justify-center w-full h-[54px] bg-customWhite-2 rounded-[6px]
            px-[6px]"
        >
          <div
            className={cn(
              `bg-transparent w-full flex items-center justify-center h-[40px] rounded-[6px]
              cursor-pointer text-base font-semibold text-black`,
              gender === 'MALE' && 'bg-customWhite-1',
            )}
            onClick={() => handleChangeGender('MALE')}
          >
            남성
          </div>
          <div
            className={cn(
              `bg-transparent w-full flex items-center justify-center h-[40px] rounded-[6px]
              cursor-pointer text-base font-semibold text-black`,
              gender === 'FEMALE' && 'bg-customWhite-1',
            )}
            onClick={() => handleChangeGender('FEMALE')}
          >
            여성
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-4">
        <h2 className="text-black text-xl font-semibold mt-[14px] mb-[10px]">
          생년월일
        </h2>
        <div className="flex flex-col w-full">
          <div className="flex w-full relative h-[54px]">
            <Input
              id="name"
              className="pl-2 relative w-full h-[32px] font-medium text-sm text-customBlack-1
                rounded-none border-0 border-b-2 border-black focus-visible:ring-transparent
                placeholder:text-customGray-3 placeholder:font-medium pr-10 cursor-pointer"
              type="text"
              {...register('birth')}
              readOnly
              onClick={births.onOpen}
            />
          </div>
        </div>
      </div>

      <Button
        className="bg-primary-main w-full rounded-2xl text-customWhite-1 h-[60px] font-semibold
          text-lg disabled:text-customGray-1 disabled:bg-customWhite-3"
        disabled={!isConfirm}
      >
        수정 완료!
      </Button>
    </motion.div>
  );
};

export default ProfileInfo;
