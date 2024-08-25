import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import ImageKakaoMainLogo from '@/public/assets/image-kakao-main-logo.svg';
import ImageGoogleLogo from '@/public/assets/image-google-logo.svg';

const SocialLoginButtons = () => (
  <div className="flex items-center justify-between gap-[22px] mb-12">
    <SocialLoginButton
      href="http://ec2-43-203-84-215.ap-northeast-2.compute.amazonaws.com:8080/oauth2/authorization/kakao"
      logo={ImageKakaoMainLogo}
      alt="kakao-logo"
    >
      로그인
    </SocialLoginButton>
    <SocialLoginButton
      href="http://ec2-43-203-84-215.ap-northeast-2.compute.amazonaws.com:8080/oauth2/authorization/google"
      logo={ImageGoogleLogo}
      alt="google-logo"
    />
  </div>
);

const SocialLoginButton = ({
  href,
  logo,
  alt,
  children,
}: {
  href: string;
  logo: string;
  alt: string;
  children?: React.ReactNode;
}) => (
  <Button
    variant="outline"
    className="flex items-center justify-center bg-white w-full rounded-2xl h-[60px]
      font-semibold text-xl text-white border-customGray-2"
    asChild
  >
    <Link href={href}>
      {children}
      <Image width={34} height={34} alt={alt} src={logo} />
    </Link>
  </Button>
);

export default SocialLoginButtons;
