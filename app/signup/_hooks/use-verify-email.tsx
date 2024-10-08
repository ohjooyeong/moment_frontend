import { authApis } from '@/services/auth';
import { useMutation } from '@tanstack/react-query';

type SendEmail = {
  email: string;
  code: string;
};

export default function useVerifyEmail() {
  const mutate = useMutation({
    mutationFn: async ({ email, code }: SendEmail) => {
      const params = new URLSearchParams();

      params.append('email', email);
      params.append('code', code);

      const { data } = await authApis.get(`/v1/auth/verify-email`, {
        params,
      });
      return data;
    },
  });

  return mutate;
}
