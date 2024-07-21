'use client';

import Image from 'next/image';
import ImageMomentLogo from '@/public/assets/image-moment-primary-logo.svg';
import { BellIcon } from 'lucide-react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <header className="w-full flex items-center h-14">
      <h1 className="sr-only">moment-navbar</h1>
      <div className="w-full my-0 flex px-[30px] justify-between">
        <Link
          href={'/'}
          className="flex w-[157px] h-[30px] relative cursor-pointer ml-[-20px]"
        >
          <Image fill alt="moment-logo" src={ImageMomentLogo} />
        </Link>

        <div className="flex items-center basis-20 shrink-0"></div>

        <div className="flex items-center basis-20 shrink-0 justify-end">
          <BellIcon className="w-6 h-6 cursor-pointer" />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
