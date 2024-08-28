'use client';
import { Button } from '@/components/ui/button';
import HeartFill from '@/public/assets/image-heart-fill.svg';
import { MessageCircleHeartIcon, PencilLineIcon, StarIcon } from 'lucide-react';
import Image from 'next/image';

const HomeMain = () => {
  return (
    <div className="w-full">
      <div className="w-full bg-white mt-4 rounded-3xl p-3 sm:p-5 flex flex-col shadow">
        <div className="mt-6 flex justify-between sm:px-4 py-4">
          <div className="w-[100px] h-[100px] rounded-full bg-customWhite-3 sm:w-[120px] sm:h-[120px]"></div>
          <div className="flex flex-col p-4 items-center justify-center text-primary">
            <Image alt="heart-icon" src={HeartFill} className="w-12 h-12" />
          </div>
          <div className="w-[100px] h-[100px] rounded-full bg-customWhite-3 sm:w-[120px] sm:h-[120px]"></div>
        </div>
        <div className="flex justify-end gap-4 px-3 mt-6">
          <div className="flex flex-col gap-1">
            <span className="font-semibold text-xl text-customBlack-1">
              함께한 지 100 일 째
            </span>
            <span className="text-sm text-customGray-3 font-normal flex justify-end">
              2024. 5. 5.
            </span>
          </div>
        </div>
      </div>

      <div className="w-full mt-8 flex flex-col">
        <span className="text-base text-customGray-2 font-semibold mb-2 ml-2">
          2024년
        </span>
        <div className="flex flex-col gap-4">
          <div className="w-full bg-customWhite-1 rounded-2xl p-6 shadow">
            <div className="flex justify-between mb-2">
              <div className="text-base text-primary font-medium flex gap-1 items-center">
                <PencilLineIcon className="w-5 h-5" />
                내가 한 답변
              </div>
              <div className="text-sm text-customGray-3 font-normal">
                2024. 5. 4.
              </div>
            </div>
            <h3 className="text-lg font-bold text-customBlack-1 text-overflow-line-2">
              가장 기억에 남는 장소는?
            </h3>
            <div className="mt-3 flex justify-between">
              <span className="text-sm font-medium text-customGray-1">
                두달 전에 우리가 아침부터 나와서 .....
              </span>
              <div className="flex gap-1 items-center">
                <StarIcon className="w-4 h-4 text-primary" fill="#04B8AB" />
                <p className="text-sm text-customGray-1 font-medium">5</p>
              </div>
            </div>
          </div>

          <div className="w-full bg-customWhite-1 rounded-2xl p-6 shadow">
            <div className="flex justify-between mb-2">
              <div className="text-base text-secondary font-bold flex gap-1 items-center">
                <MessageCircleHeartIcon className="w-5 h-5" />
                질문
                <p className="text-sm text-customGray-3 ml-1">
                  아직 답변을 적지 않았어요!
                </p>
              </div>

              <div className="text-sm text-customGray-3 font-semibold">
                2024. 5. 2.
              </div>
            </div>
            <h3 className="text-lg font-bold text-customBlack-1 text-overflow-line-2">
              우리가 같이 먹었던 것 중 생각나는 음식은?
            </h3>
          </div>
          <div className="w-full bg-customWhite-1 rounded-2xl p-6 shadow">
            <div className="flex justify-between mb-2">
              <div className="text-base text-secondary font-bold flex gap-1 items-center">
                <MessageCircleHeartIcon className="w-5 h-5" />
                질문
                <p className="text-sm text-customGray-3 ml-1">
                  아직 답변을 적지 않았어요!
                </p>
              </div>

              <div className="text-sm text-customGray-3 font-semibold">
                2024. 5. 2.
              </div>
            </div>
            <h3 className="text-lg font-bold text-customBlack-1 text-overflow-line-2">
              함께 가고 싶은 해외 여행지를 말해주세요. 긴글 쓰기 긴글 쓰기 긴글
              쓰기
            </h3>
          </div>
          <div className="w-full bg-customWhite-1 rounded-2xl p-6 shadow">
            <div className="flex justify-between mb-2">
              <div className="text-base text-primary font-medium flex gap-1 items-center">
                <PencilLineIcon className="w-5 h-5" />
                내가 한 답변
              </div>
              <div className="text-sm text-customGray-3 font-normal">
                2024. 5. 4.
              </div>
            </div>
            <h3 className="text-lg font-bold text-customBlack-1 text-overflow-line-2">
              함께 가고 싶은 해외 여행지를 말해주세요. 긴글 쓰기 긴글 쓰기 긴글
              쓰기 함께 가고 싶은 해외 여행지를 말해주세요. 긴글 쓰기 긴글 쓰기
              긴글 쓰기 함께 가고 싶은 해외 여행지를 말해주세요. 긴글 쓰기 긴글
              쓰기 긴글 쓰기 함께 가고 싶은 해외 여행지를 말해주세요. 긴글 쓰기
              긴글 쓰기 긴글 쓰기
            </h3>
            <div className="mt-3 flex justify-between">
              <span className="text-sm font-medium text-customGray-1 text-ellipsis whitespace-nowrap">
                두달 전에 우리가 아침부터 나와서 .....
              </span>
              <div className="flex gap-1 items-center">
                <StarIcon className="w-4 h-4 text-primary" fill="#04B8AB" />
                <p className="text-sm text-customGray-1 font-medium">5</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeMain;
