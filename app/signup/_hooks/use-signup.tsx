import { memberApis } from '@/services/members';
import { useMutation } from '@tanstack/react-query';
import { FormDataType } from '../_type';

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
      const { data } = await memberApis.post(`/v1/members/join`, context);
      return data;
    },
  });

  return mutate;
}
