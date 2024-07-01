import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

const TimeLeft = () => {
  const [timeLeft, setTimeLeft] = useState(180); // 3분 = 180초

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes < 10 ? '0' : ''}${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <span
        className={cn('absolute right-2 top-[6px] text-customGray-1 text-end')}
      >
        {timeLeft === 0 ? '시간 초과' : formatTime(timeLeft)}
      </span>
      <p
        className="absolute right-2 bottom-0 text-[12px]/[18px] text-primary font-medium
          cursor-pointer"
      >
        코드 재전송
      </p>
    </>
  );
};

export default TimeLeft;
