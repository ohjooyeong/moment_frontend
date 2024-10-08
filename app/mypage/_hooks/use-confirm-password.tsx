import { authApis } from '@/services/auth';

import { useMutation } from '@tanstack/react-query';

type ConfirmPassword = {
  password: string;
  newPassword: string;
};

export default function useConfirmPassword() {
  const mutate = useMutation({
    mutationFn: async (context: ConfirmPassword) => {
      const { data } = await authApis.patch(`/v1/auth/password`, context);
      return data;
    },
  });

  return mutate;
}
