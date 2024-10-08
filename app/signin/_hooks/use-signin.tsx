import { authApis } from '@/services/auth';
import { useMutation } from '@tanstack/react-query';

type Signin = {
  email: string;
  password: string;
};

export default function useSignin() {
  const mutate = useMutation({
    mutationFn: async (context: Signin) => {
      const { data } = await authApis.post(`/v1/auth/login`, context);
      return data;
    },
  });

  return mutate;
}
