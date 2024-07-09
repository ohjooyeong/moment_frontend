'use client';

import Navbar from './_components/navbar';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mx-auto my-0 max-w-xl moment-container">
      <Navbar />
      {children}
    </div>
  );
};

export default MainLayout;
