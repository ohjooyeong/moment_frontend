import { ArrowLeftIcon } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

type Props = {
  title: string;
  toLink?: string;
  handleRoutePrev?: () => void;
};

const PageHeader = ({ title, toLink = '#', handleRoutePrev }: Props) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div
        className="relative flex items-center justify-center w-full rounded-2xl font-semibold
          text-[20px]/[30px] text-black h-[56px]"
      >
        {handleRoutePrev ? (
          <ArrowLeftIcon
            width={24}
            height={24}
            className="absolute left-0 top-[14px] cursor-pointer"
            onClick={handleRoutePrev}
          />
        ) : (
          <Link href={toLink}>
            <ArrowLeftIcon
              width={24}
              height={24}
              className="absolute left-0 top-[14px] cursor-pointer"
            />
          </Link>
        )}
        <h3 className="text-[20px]/[32px] text-customBlack-1 font-semibold">
          {title}
        </h3>
      </div>
    </div>
  );
};

export default PageHeader;
