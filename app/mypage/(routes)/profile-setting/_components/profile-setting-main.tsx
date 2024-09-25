'use client';

import { motion } from 'framer-motion';

import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import PageHeader from '@/components/page-header';
import { useRouter } from 'next/navigation';

const ProfileSettingMain = () => {
  const router = useRouter();

  return (
    <div className="flex-col justify-around w-full">
      <motion.div
        initial={{ y: 0, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.75 }}
      >
        <PageHeader title="설정" handleRoutePrev={() => router.back()} />
        <div className="flex items-center mb-8 mt-4">
          <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
          <div>
            <h2 className="text-lg font-semibold">오주영</h2>
            <p className="text-sm text-gray-600">Email: brb1111@naver.com</p>
          </div>
        </div>
        <div className="bg-white space-y-6">
          <Link
            className="flex justify-between items-center cursor-pointer"
            href={'/mypage/profile-confirm'}
          >
            <div className="flex flex-col gap-1">
              <h3 className="text-md font-semibold">회원정보 변경</h3>
              <span className="text-sm text-gray-300">
                이름, 생년월일, 이메일
              </span>
            </div>
            <ChevronRight size={20} className="text-gray-400" />
          </Link>
          <Link
            className="flex justify-between items-center cursor-pointer"
            href={'/mypage/profile-new-password'}
          >
            <div className="flex flex-col gap-1">
              <h3 className="text-md font-semibold">비밀번호 변경</h3>
            </div>
            <ChevronRight size={20} className="text-gray-400" />
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default ProfileSettingMain;
