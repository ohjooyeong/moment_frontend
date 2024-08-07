'use client';

import { motion } from 'framer-motion';
import { useFormContext } from 'react-hook-form';
import { useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';
import { FormDataType } from '../_type';

const SetupComplteSignup = () => {
  const router = useRouter();
  const { watch } = useFormContext<FormDataType>();

  const name = watch('name');

  const handleRouteChange = () => {
    router.replace('/signin');
  };

  return (
    <motion.div
      initial={{ y: 0, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.75 }}
      className="flex justify-center items-center flex-col h-screen"
    >
      <span className="text-[20px]/[30px] text-customGray-2 mb-3">
        회원가입 완료!
      </span>

      <h2 className="text-[32px]/[48px] text-customBlack-1 mb-4 text-center font-semibold">
        {`${name}님,`}
        <br />
        {`환영합니다 :)`}
      </h2>
      <Button
        className="bg-primary-main w-[200px] rounded-2xl text-customWhite-1 h-[60px] font-semibold
          text-[20px]/[30px]"
        onClick={handleRouteChange}
      >
        로그인 하러가기
      </Button>
    </motion.div>
  );
};

export default SetupComplteSignup;
