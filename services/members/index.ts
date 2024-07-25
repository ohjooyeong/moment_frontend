import axios, { AxiosResponse } from 'axios';
import axiosInstance, { onError } from '@/config/axiosInstance';

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (axios.isAxiosError(error)) {
      const { status } = error.response as AxiosResponse;

      switch (status) {
        case 2000:
          onError(status, '인터셉터 테스트 해야할듯');
          break;

        default: {
          onError(status, `에러가 발생했습니다. ${error.message}`);
        }
      }
    }
    return Promise.reject(error);
  },
);

export const memberApis = axiosInstance;
