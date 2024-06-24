import { Button } from "@/components/ui/button";
import Image from "next/image";
import ImageKakaoLogo from "@/public/assets/image-kakao-logo.svg";
import ImageGoogleLogo from "@/public/assets/image-google-logo.svg";

const SigninMain = () => {
  return (
    <div className="flex-col justify-around w-full">
      <div className="flex flex-col justify-center items-center mb-[150px]">
        <h2 className="text-[52px]/[70px] mb-6 font-bold text-white">Moment</h2>
        <p className="text-[16px]/[20px] text-center font-bold text-white mb-3">
          연인과의 소중한 순간을 기록하세요
        </p>
        <p className="text-[16px]/[20px] text-center font-bold text-white">
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
        <Button className="relative bg-[#ffffff] hover:bg-[#f2f2f2] w-full rounded-2xl h-[60px] font-semibold text-lg text-black mb-[70px]">
          <Image
            width={24}
            height={24}
            alt="kakao-logo"
            className="absolute left-7 top-[18px]"
            src={ImageGoogleLogo}
          />
          구글 로그인
        </Button>
        <Button className="relative bg-secondary hover:bg-[#e42960] w-full rounded-2xl h-[60px] font-semibold text-lg text-customWhite-2 mb-[70px]">
          로그인
        </Button>
      </div>
      <div className="flex absolute bottom-4 left-0 right-0 max-w-xl justify-center">
        <p className="text-white font-medium text-[14px]/[22px]">
          아직 회원이 아니신가요?
        </p>
        <p className="text-secondary text-[14px]/[22px] font-semibold ml-[6px] underline cursor-pointer">
          회원가입
        </p>
      </div>
    </div>
  );
};

export default SigninMain;
