'use client';

import { motion } from 'framer-motion';
import { CircleXIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ChangeEvent, useState } from 'react';

type Props = {
  handleClickNext: (step: string) => void;
};

const SetupProfile = ({ handleClickNext }: Props) => {
  const [email, setEmail] = useState('');
  const [emailValid, setEmailValid] = useState(false);

  const handleChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleDeleteEmail = () => {
    setEmail('');
  };

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
              className="pl-2 relative w-full h-[32px] font-medium text-[16px]/[24px] text-customBlack-1
                rounded-none border-0 border-b-2 border-black focus-visible:ring-transparent
                placeholder:text-customGray-3 placeholder:font-medium pr-10"
              placeholder="test1234@naver.com"
              type="email"
              value={email}
              onChange={handleChangeEmail}
            />
            {email && (
              <CircleXIcon
                className="absolute right-2 top-[6px] cursor-pointer text-customGray-3 w-5 h-5"
                onClick={handleDeleteEmail}
              />
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-col mt-3">
        <h2 className="text-black text-[24px]/[32px] font-semibold mt-[14px] mb-[10px]">
          비밀번호 확인
        </h2>
        <div className="flex flex-col w-full">
          <div className="flex w-full relative h-[54px]">
            <Input
              className="pl-2 relative w-full h-[32px] font-medium text-[16px]/[24px] text-customBlack-1
                rounded-none border-0 border-b-2 border-black focus-visible:ring-transparent
                placeholder:text-customGray-3 placeholder:font-medium pr-10"
              placeholder="test1234@naver.com"
              type="email"
              value={email}
              onChange={handleChangeEmail}
            />
            {email && (
              <CircleXIcon
                className="absolute right-2 top-[6px] cursor-pointer text-customGray-3 w-5 h-5"
                onClick={handleDeleteEmail}
              />
            )}
          </div>
        </div>
      </div>
      <Button
        className="relative bg-primary w-full rounded-2xl h-[60px] font-semibold text-lg text-white
          mt-[12px]"
      >
        계속하기
      </Button>
    </motion.div>
  );
};

export default SetupProfile;
