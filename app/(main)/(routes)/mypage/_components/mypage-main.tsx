'use client';

import {
  Bell,
  Settings,
  Heart,
  ChevronRight,
  Calendar,
  MessageCircle,
  Gift,
  Home,
  User,
} from 'lucide-react';

const MypageMain = () => {
  return (
    <div className="w-full">
      {/* Profile Section */}
      <div className="bg-white p-6 mb-4 mt-4 rounded-3xl shadow">
        <div className="flex items-center justify-center mb-4">
          <div className="w-28 h-28 bg-gray-200 rounded-full mr-4"></div>
          <div className="text-center">
            <h2 className="text-[24px]/[32px] font-semibold">인생 커플</h2>
            <p className="text-md text-gray-500">함께한 지 100일째</p>
            <div className="flex items-center justify-center mt-2 text-[20px]/[28px]">
              <span className="mr-2">홍길동</span>
              <Heart size={16} fill="red" color="red" />
              <span className="ml-2">아무개</span>
            </div>
          </div>
        </div>
        <p className="text-right text-sm text-gray-400 cursor-pointer">
          커플 설정하기
        </p>
      </div>

      {/* Couple Mission */}
      <div className="bg-yellow-100 p-6 my-4 rounded-3xl shadow">
        <h3 className="text-[24px]/[30px] font-semibold mb-2">
          오늘의 커플 미션
        </h3>
        <p className="text-md">커플 미션을 함께 클리어하세요</p>
        <button className="mt-4 bg-yellow-500 text-white px-4 py-2 rounded-full text-md">
          미션 참여하기
        </button>
      </div>

      {/* Menu Items */}
      <div className="bg-white p-6 rounded-3xl shadow space-y-4">
        <div className="flex justify-between items-center cursor-pointer">
          <h3 className="text-lg font-semibold">개인정보 수정</h3>
          <ChevronRight size={20} className="text-gray-400" />
        </div>
        <div className="flex justify-between items-center cursor-pointer">
          <h3 className="text-lg font-semibold">공지</h3>
          <ChevronRight size={20} className="text-gray-400" />
        </div>
        <div className="flex justify-between items-center cursor-pointer">
          <h3 className="text-lg font-semibold">자주 묻는 질문</h3>
          <ChevronRight size={20} className="text-gray-400" />
        </div>
        <div className="flex justify-between items-center cursor-pointer">
          <h3 className="text-lg font-semibold">모멘트 문의하기</h3>
          <ChevronRight size={20} className="text-gray-400" />
        </div>
        <div className="flex justify-between items-center cursor-pointer">
          <h3 className="text-lg font-semibold">리뷰 쓰러가기</h3>
          <ChevronRight size={20} className="text-gray-400" />
        </div>
        <div className="flex justify-between items-center cursor-pointer">
          <h3 className="text-lg font-semibold">로그아웃</h3>
          <ChevronRight size={20} className="text-gray-400" />
        </div>
      </div>
    </div>
  );
};

export default MypageMain;
