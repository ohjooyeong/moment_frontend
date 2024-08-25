import { useEffect, useState } from 'react';
import { setCookie, getCookie } from 'cookies-next';

const useRememberEmail = () => {
  const [isRememberEmail, setIsRememberEmail] = useState<boolean>(false);
  const [rememberedEmail, setRememberedEmail] = useState<string>('');

  useEffect(() => {
    const savedEmail = getCookie('rememberEmail');
    if (savedEmail) {
      setIsRememberEmail(true);
      setRememberedEmail(savedEmail.toString());
    }
  }, []);

  useEffect(() => {
    if (isRememberEmail) {
      setCookie('rememberEmail', rememberedEmail);
    } else {
      setCookie('rememberEmail', '');
    }
  }, [isRememberEmail, rememberedEmail]);

  return {
    isRememberEmail,
    setIsRememberEmail,
    rememberedEmail,
    setRememberedEmail,
  };
};

export default useRememberEmail;
