'use client';

import BottomNavigation from '@/components/bottom-navigation';
import Navbar from './_components/navbar';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mx-auto my-0 max-w-xl moment-container bg-white">
      <Navbar />
      {children}
      <BottomNavigation />
    </div>
  );
};

export default MainLayout;
