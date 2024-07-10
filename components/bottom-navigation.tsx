import {
  AlbumIcon,
  CalendarDaysIcon,
  HomeIcon,
  MapIcon,
  UserIcon,
} from 'lucide-react';
import Link from 'next/link';

const bottomNav = [
  {
    link: '/album',
    icon: <AlbumIcon className="w-6 h-6" />,
    label: '앨범',
  },
  {
    link: '/calendar',
    icon: <CalendarDaysIcon className="w-6 h-6" />,
    label: '기록',
  },
  {
    link: '/',
    icon: <HomeIcon className="w-6 h-6" />,
    label: '홈',
  },
  {
    link: '/memory-map',
    icon: <MapIcon className="w-6 h-6" />,
    label: '메모리 맵',
  },
  {
    link: '/mypage',
    icon: <UserIcon className="w-6 h-6" />,
    label: '마이',
  },
];

const BottomNavigation = () => {
  return (
    <div
      className="flex fixed bottom-0 left-0 right-0 mx-auto my-0 max-w-xl border-t
        border-customWhite-3"
    >
      {bottomNav.map((nav) => (
        <Link
          key={nav.link}
          href={`${nav.link}`}
          className="w-1/5 flex flex-col items-center relative justify-center h-[60px] gap-1"
        >
          <div className="w-7 h-7 flex items-center justify-center">
            {nav.icon}
          </div>
          <span className="text-[11px]/[17px] text-customBlack-1">
            {nav.label}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default BottomNavigation;
