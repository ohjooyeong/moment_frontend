import Navbar from '../(main)/_components/navbar';
import MypageMain from './_components/mypage-main';

export default function Mypage() {
  return (
    <>
      <Navbar />
      <div className="mx-6 relative flex justify-center items-center h-[calc(100vh - 56px)] pb-[90px]">
        <MypageMain />
      </div>
    </>
  );
}
