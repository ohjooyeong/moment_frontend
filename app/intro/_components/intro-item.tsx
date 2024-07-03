'use client';

import { Button } from '@/components/ui/button';
import Image from 'next/image';

type Props = {
  imgSrc: string;
  title: string;
  desc: React.ReactNode | string;
  step: number;
  handleChangeIntroStep: (step: number) => void;
};

const IntroItem = ({
  imgSrc,
  title,
  desc,
  handleChangeIntroStep,
  step,
}: Props) => {
  const renderDotStep = () => {
    if (step === 0) {
      return (
        <>
          <div className="w-8 h-2 bg-primary-main rounded-full"></div>
          <div className="w-2 h-2 bg-customGray-3 rounded-full"></div>
          <div className="w-2 h-2 bg-customGray-3 rounded-full"></div>
        </>
      );
    }
    if (step === 1) {
      return (
        <>
          <div className="w-2 h-2 bg-customGray-3 rounded-full"></div>
          <div className="w-8 h-2 bg-primary-main rounded-full"></div>
          <div className="w-2 h-2 bg-customGray-3 rounded-full"></div>
        </>
      );
    }
    if (step === 2) {
      return (
        <>
          <div className="w-2 h-2 bg-customGray-3 rounded-full"></div>
          <div className="w-2 h-2 bg-customGray-3 rounded-full"></div>
          <div className="w-8 h-2 bg-primary-main rounded-full"></div>
        </>
      );
    }
  };

  return (
    <>
      <div className="flex justify-center items-center flex-col mb-12">
        <Image
          src={imgSrc}
          width={250}
          height={250}
          alt={`intro-${title}`}
          className="mb-11"
          style={{ height: '250px' }}
        />
        <h2 className="text-[26px]/[40px] mb-3 font-semibold sm:text-[32px]/[44px]">
          {title}
        </h2>
        <p className="text-[14px]/[22px] text-center font-medium sm:text-[14px]/[20px]">
          {desc}
        </p>
      </div>
      <div className="flex absolute bottom-4 left-0 right-0 max-w-xl flex-col">
        <div className="flex gap-4 justify-center mb-3">{renderDotStep()}</div>
        <Button
          onClick={() => handleChangeIntroStep(step + 1)}
          className="bg-primary-main w-full rounded-2xl text-customWhite-1 h-[60px] font-semibold
            text-lg"
        >
          시작하기
        </Button>
      </div>
    </>
  );
};

export default IntroItem;
