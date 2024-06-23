"use client";
import { useMemo, useState } from "react";
import ImageIntro1 from "@/public/assets/image-intro-1.svg";
import ImageIntro2 from "@/public/assets/image-intro-2.svg";
import ImageIntro3 from "@/public/assets/image-intro-3.svg";
import IntroItem from "./intro-item";
import { useRouter } from "next/navigation";

const introMap = [
  {
    title: "서로의 순간을 공유해요",
    desc: (
      <>
        여행의 설렘과 사진 속 추억을 함께 나누며 <br />
        더욱 가까워지세요.
      </>
    ),
    imgSrc: ImageIntro1,
  },
  {
    title: "함께하는 순간들을 소중히",
    desc: (
      <>
        당신의 소중한 연인과의 모든 순간을 <br />
        기록하고 간직하세요.
      </>
    ),
    imgSrc: ImageIntro2,
  },
  {
    title: "우리의 모든 순간을 한 곳에",
    desc: (
      <>
        사귄 날, 기념일, 소중한 날들을 잊지 않고 <br />
        함께 기억하세요.
      </>
    ),
    imgSrc: ImageIntro3,
  },
];

const IntroMain = () => {
  const router = useRouter();
  const [introStep, setIntroStep] = useState<number>(0);

  const handleChangeIntroStep = (step: number) => {
    if (step > 2) {
      return router.push("/signin");
    }
    setIntroStep(step);
  };

  return (
    <>
      <IntroItem
        handleChangeIntroStep={handleChangeIntroStep}
        imgSrc={introMap[introStep].imgSrc}
        title={introMap[introStep].title}
        desc={introMap[introStep].desc}
        step={introStep}
      />
    </>
  );
};

export default IntroMain;
