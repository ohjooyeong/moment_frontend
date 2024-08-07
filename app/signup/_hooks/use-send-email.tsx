import { memberApis } from '@/services/members';
import { useMutation } from '@tanstack/react-query';

type SendEmail = {
  email: string;
};

export default function useSendEmail() {
  const mutate = useMutation({
    mutationFn: async (context: SendEmail) => {
      const { data } = await memberApis.post(
        `/v1/members/send-authentication-email`,
        context,
      );
      return data;
    },
  });

  return mutate;
}
