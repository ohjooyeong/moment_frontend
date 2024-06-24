"use client";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mx-auto my-0 max-w-xl moment-container bg-primary">
      {children}
    </div>
  );
};

export default MainLayout;
