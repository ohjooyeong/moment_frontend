'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

import Link from 'next/link';

const FindPasswordComplete = () => {
  return (
    <motion.div
      initial={{ y: 0, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.75 }}
      className="flex justify-center items-center flex-col h-[calc(100%-56px)]"
    >
      <span className="text-xl text-customGray-1">
        발급된 비밀번호는 <span className="text-black font-bold">이메일</span>
        에서 확인해주세요!
      </span>

      <span className="text-xl text-black mb-3">
        임시 비밀번호
        <span className="text-customGray-1">
          는 <span className="text-black font-bold">마이 페이지</span>에서 바꿀
          수 있습니다.
        </span>
      </span>

      <Button
        className="bg-primary-main w-[200px] rounded-2xl text-customWhite-1 h-[50px] font-semibold
          text-lg"
        asChild
      >
        <Link href={'/signin'}>로그인 하러가기</Link>
      </Button>
    </motion.div>
  );
};

export default FindPasswordComplete;
