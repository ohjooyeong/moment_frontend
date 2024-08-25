import { memberApis } from '@/services/members';
import { useMutation } from '@tanstack/react-query';

type FindPassword = {
  email: string;
};

export default function useFindPassword() {
  const mutate = useMutation({
    mutationFn: async (context: FindPassword) => {
      const params = new URLSearchParams();
      params.append('email', context.email);
      const { data } = await memberApis.post(`/v1/members/reset-password`, '', {
        params,
      });
      return data;
    },
  });

  return mutate;
}
