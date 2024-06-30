'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';
import ImageKakaoMainLogo from '@/public/assets/image-kakao-main-logo.svg';
import ImageGoogleLogo from '@/public/assets/image-google-logo.svg';
import { LockKeyholeIcon, MailIcon } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Checkbox } from '@/components/ui/checkbox';
import Link from 'next/link';
import PageHeader from '@/components/page-header';
import { useRouter } from 'next/router';

const SigninMain = () => {
  const router = useRouter();
  const handleRoutePrev = () => {
    router.back();
  };

  return (
    <div className="flex-col justify-around w-full">
      <PageHeader title="회원가입" handleRoutePrev={handleRoutePrev} />
      <div className="flex flex-col justify-center gap-5 mb-[60px]">
        <div className="flex flex-col w-full">
          <span className="ml-2 mb-2 text-[14px]/[22px] font-medium text-black">
            이메일
          </span>
          <div className="flex relative w-full">
            <Input
              className="pl-[50px] relative w-full rounded-2xl h-[60px] font-medium text-[16px]/[24px]
                text-customBlack-1 border-customGray-3 focus-visible:ring-transparent
                focus-visible:border-primary placeholder:text-customGray-3"
              placeholder="이메일을 입력해 주세요"
            />
            <MailIcon
              width={20}
              height={20}
              className="absolute left-5 top-[20px] text-customGray-2"
            />
          </div>
        </div>
        <div className="flex flex-col w-full">
          <span className="ml-2 mb-2 text-[14px]/[22px] font-medium text-black">
            비밀번호
          </span>
          <div className="flex relative w-full">
            <Input
              className="pl-[50px] relative w-full rounded-2xl h-[60px] font-medium text-[16px]/[24px]
                text-customBlack-1 border-customGray-3 focus-visible:ring-transparent
                focus-visible:border-primary placeholder:text-customGray-3"
              placeholder="비밀번호를 입력해 주세요"
            />
            <LockKeyholeIcon
              width={20}
              height={20}
              className="absolute left-5 top-[20px] text-customGray-2"
            />
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex items-center space-x-2 ml-2">
            <Checkbox
              id="id-save-check"
              className="data-[state=checked]:text-white data-[state=checked]:border-primary w-[22px]
                h-[22px] border-customGray-3"
            />
            <label
              htmlFor="id-save-check"
              className="text-customGray-1 select-none cursor-pointer leading-none
                peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-[14px]/[22px]"
            >
              이메일 저장
            </label>
          </div>
          <div className="text-customGray-1 cursor-pointer text-[14px]/[22px] hover:text-primary">
            비밀번호 찾기
          </div>
        </div>
      </div>
      <Button
        className="relative bg-primary w-full rounded-2xl h-[60px] font-semibold text-lg text-white
          mb-[47px]"
      >
        로그인
      </Button>
      <div className="flex items-center justify-between gap-[22px]">
        <Button
          variant={'outline'}
          className="flex items-center justify-center bg-white w-full rounded-2xl h-[60px]
            font-semibold text-lg text-white mb-[47px] border-customGray-2"
        >
          <Image
            width={34}
            height={34}
            alt="kakao-logo"
            src={ImageKakaoMainLogo}
          />
        </Button>
        <Button
          variant={'outline'}
          className="relative bg-white w-full rounded-2xl h-[60px] font-semibold text-lg text-white
            mb-[47px] border-customGray-2"
        >
          <Image
            width={28}
            height={28}
            alt="kakao-logo"
            src={ImageGoogleLogo}
          />
        </Button>
      </div>
      <div className="flex absolute bottom-4 left-0 right-0 max-w-xl justify-center">
        <p className="text-customBlack-1 font-medium text-[14px]/[22px]">
          아직 회원이 아니신가요?
        </p>
        <Link
          href={'/signup'}
          className="text-secondary text-[14px]/[22px] font-semibold ml-[6px] underline
            cursor-pointer"
        >
          회원가입
        </Link>
      </div>
    </div>
  );
};

export default SigninMain;
