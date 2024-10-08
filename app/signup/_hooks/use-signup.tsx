import { useMutation } from '@tanstack/react-query';
import { FormDataType } from '../_type';
import { authApis } from '@/services/auth';

type Signup = {
  email: string;
  password: string;
  name: string;
  gender: FormDataType['gender'];
  birth: FormDataType['birth'];
};

export default function useSignup() {
  const mutate = useMutation({
    mutationFn: async (context: Signup) => {
      const { data } = await authApis.post(`/v1/auth/join`, context);
      return data;
    },
  });

  return mutate;
}
