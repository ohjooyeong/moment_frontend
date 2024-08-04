import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';

const TimeLeft = () => {
  const [timeLeft, setTimeLeft] = useState(180); // 3분 = 180초
  const [reload, setReload] = useState(false);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes < 10 ? '0' : ''}${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  const handleClickReload = () => {
    setReload(true);
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

  useEffect(() => {
    if (reload) {
      setTimeLeft(180);
      setReload(false);
    }
  }, [reload]);

  return (
    <>
      <span
        className={cn('absolute right-2 top-[6px] text-customGray-1 text-end')}
      >
        {timeLeft === 0 ? '시간 초과' : formatTime(timeLeft)}
      </span>
      <p
        className="absolute right-2 bottom-0 text-[14px]/[20px] text-primary font-medium
          cursor-pointer"
        onClick={handleClickReload}
      >
        코드 재전송
      </p>
    </>
  );
};

export default TimeLeft;
