'use client';
import { Button } from '@/components/ui/button';
import HeartFill from '@/public/assets/image-heart-fill.svg';
import Image from 'next/image';

const HomeMain = () => {
  return (
    <div className="w-full">
      <div className="w-full bg-white mt-4 rounded-3xl p-5 flex flex-col">
        <div>
          <span className="font-semibold text-[20px]/[28px] text-customBlack-1">
            두근두근 100 일 째
          </span>
        </div>
        <div className="mt-6 flex justify-between px-8 py-4">
          <div className="w-[120px] h-[120px] rounded-full bg-customWhite-3"></div>
          <div className="flex flex-col p-4 items-center justify-center text-primary">
            <Image alt="heart-icon" src={HeartFill} className="w-12 h-12" />
          </div>
          <div className="w-[120px] h-[120px] rounded-full bg-customWhite-3"></div>
        </div>
        <div className="flex justify-end gap-4 px-3 mt-6">
          <Button
            className="px-5 h-[40px] bg-customWhite-3 hover:bg-customWhite-2 rounded-3xl flex
              items-center justify-center font-semibold text-[14px]/[20px] text-customBlack-1"
          >
            일정 보러 갈래?
          </Button>
        </div>
      </div>

      <div className="w-full mt-8 flex flex-col gap-4">
        <div className="w-full h-16 bg-customWhite-1 rounded-full"></div>
        <div className="w-full h-16 bg-customWhite-1 rounded-full"></div>
        <div className="w-full h-16 bg-customWhite-1 rounded-full"></div>
      </div>
    </div>
  );
};

export default HomeMain;
