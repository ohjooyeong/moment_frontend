import { ArrowLeftIcon } from 'lucide-react';
import React from 'react';

type Props = {
  handleRoutePrev: () => void;
  title: string;
};

const PageHeader = ({ handleRoutePrev, title }: Props) => {
  return (
    <div className="flex flex-col justify-center items-center mb-[24px]">
      <div
        className="relative flex items-center justify-center w-full rounded-2xl font-semibold
          text-lg text-black h-[56px]"
      >
        <ArrowLeftIcon
          width={24}
          height={24}
          className="absolute left-0 top-[14px] cursor-pointer"
          onClick={handleRoutePrev}
        />
        <h3 className="text-[20px]/[32px] text-customBlack-1 font-semibold">
          {title}
        </h3>
      </div>
    </div>
  );
};

export default PageHeader;
