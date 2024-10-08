import { authApis } from '@/services/auth';
import { useMutation } from '@tanstack/react-query';

type SendEmail = {
  email: string;
};

export default function useSendEmail() {
  const mutate = useMutation({
    mutationFn: async (context: SendEmail) => {
      const { data } = await authApis.post(
        `/v1/auth/send-authentication-email`,
        context,
      );
      return data;
    },
  });

  return mutate;
}
