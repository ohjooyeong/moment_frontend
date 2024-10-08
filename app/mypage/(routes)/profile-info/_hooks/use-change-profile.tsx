import { useMutation } from '@tanstack/react-query';

import { authApis } from '@/services/auth';
import { FormProfileDataType } from '../_type';

type Profile = {
  name: string;
  gender: FormProfileDataType['gender'];
  birth: FormProfileDataType['birth'];
};

export default function useChangeProfile() {
  const mutate = useMutation({
    mutationFn: async (context: Profile) => {
      const { data } = await authApis.post(`/v1/auth/profile`, context);
      return data;
    },
  });

  return mutate;
}
