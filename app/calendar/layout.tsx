'use client';

import BottomNavigation from '@/components/bottom-navigation';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mx-auto my-0 max-w-xl moment-container bg-customWhite-2">
      {children}
      <BottomNavigation />
    </div>
  );
};

export default MainLayout;
