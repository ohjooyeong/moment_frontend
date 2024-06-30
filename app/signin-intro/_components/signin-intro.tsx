"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import ImageKakaoLogo from "@/public/assets/image-kakao-logo.svg";
import ImageGoogleLogo from "@/public/assets/image-google-logo.svg";
import ImageMomentLogo from "@/public/assets/image-moment-logo.svg";
import Link from "next/link";

const SigninIntro = () => {
  return (
    <div className="flex-col justify-around w-full">
      <div className="flex flex-col justify-center items-center mb-[150px]">
        <div className="flex w-[227px] h-20 sm:w-80 sm:h-24 relative mb-[14px]">
          <Image fill alt="moment-logo" src={ImageMomentLogo} />
        </div>
        <p className="text-[16px]/[20px] sm:text-[18px]/[26px] text-center font-bold text-customBlack-4 mb-3">
          연인과의 소중한 순간을 기록하세요
        </p>
        <p className="text-[16px]/[20px] sm:text-[18px]/[26px] text-center font-bold text-customBlack-4">
          추억을 함께 나누고, 특별한 날을 기억하세요
        </p>
      </div>
      <div className="flex flex-col justify-center items-center gap-4">
        <Button className="relative bg-[#FFF500] hover:bg-[#e5dc00] w-full rounded-2xl h-[60px] font-semibold text-lg text-black">
          <Image
            width={24}
            height={24}
            alt="kakao-logo"
            className="absolute left-7 top-[18px]"
            src={ImageKakaoLogo}
          />
          카카오 로그인
        </Button>
        <Button className="relative bg-[#ffffff] hover:bg-[#f2f2f2] w-full rounded-2xl h-[60px] font-semibold text-lg text-black mb-[70px] border-customGray-3 border">
          <Image
            width={24}
            height={24}
            alt="kakao-logo"
            className="absolute left-7 top-[18px]"
            src={ImageGoogleLogo}
          />
          구글 로그인
        </Button>
        <Button
          className="relative bg-primary w-full rounded-2xl h-[60px] font-semibold text-lg text-customWhite-1 mb-[70px]"
          asChild
        >
          <Link href={"/signin"}>로그인</Link>
        </Button>
      </div>
      <div className="flex absolute bottom-4 left-0 right-0 max-w-xl justify-center">
        <p className="text-customBlack-1 font-medium text-[14px]/[22px]">
          아직 회원이 아니신가요?
        </p>
        <Link
          href={"/signup"}
          className="text-secondary text-[14px]/[22px] font-semibold ml-[6px] underline cursor-pointer"
        >
          회원가입
        </Link>
      </div>
    </div>
  );
};

export default SigninIntro;
