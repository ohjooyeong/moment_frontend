import { memberApis } from '@/services/members';
import { useMutation } from '@tanstack/react-query';

type Signin = {
  email: string;
  password: string;
};

export default function useSignin() {
  const mutate = useMutation({
    mutationFn: async (context: Signin) => {
      const { data } = await memberApis.post(`/v1/members/login`, context);
      return data;
    },
  });

  return mutate;
}
