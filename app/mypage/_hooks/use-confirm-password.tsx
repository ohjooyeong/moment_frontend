import { memberApis } from '@/services/members';
import { useMutation } from '@tanstack/react-query';

type ConfirmPassword = {
  password: string;
};

export default function useConfirmPassword() {
  const mutate = useMutation({
    mutationFn: async (context: ConfirmPassword) => {
      const params = new URLSearchParams();
      params.append('password', context.password);
      const { data } = await memberApis.post(`/v1/members/password`, '', {
        params,
      });
      return data;
    },
  });

  return mutate;
}
