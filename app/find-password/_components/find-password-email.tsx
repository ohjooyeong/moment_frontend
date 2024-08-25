import { useState } from 'react';
import useFindPassword from '../_hooks/use-find-password';
import { SubmitHandler, useForm } from 'react-hook-form';
import GenericForm from '@/components/genric-form';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { CircleXIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

type Props = {
  handleClickNext: () => void;
};

type FindPasswordFormData = {
  email: string;
};

const FindPasswordEmail = ({ handleClickNext }: Props) => {
  const [loading, setLoading] = useState(false);

  const findPasswordMutation = useFindPassword();

  const {
    register,
    setValue,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FindPasswordFormData>({
    defaultValues: {
      email: '',
    },
  });

  const email = watch('email');

  const handleDeleteEmail = () => {
    setValue('email', '');
  };

  const onSubmit: SubmitHandler<FindPasswordFormData> = async (context) => {
    try {
      setLoading(true);
      await findPasswordMutation.mutateAsync(
        {
          email: context.email,
        },
        {
          onSuccess() {
            handleClickNext();
          },
        },
      );

      // Assuming the response contains an accessToken
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  return (
    <GenericForm<FindPasswordFormData>
      onSubmit={handleSubmit(onSubmit) as any}
      formOptions={{
        mode: 'onChange',
      }}
    >
      <div className="flex flex-col justify-center gap-5 mb-10">
        <h1 className="text-black text-[28px]/[36px] font-semibold">
          혹시 비밀번호를 잊어버리셨나요?
        </h1>
        <div className="flex flex-col w-full">
          <div className="flex w-full relative h-[54px]">
            <Input
              id="email"
              className={cn(
                `pl-2 relative w-full h-[32px] font-medium text-[16px]/[24px] text-customBlack-1
                rounded-none border-0 border-b-2 border-black ring-offset-transparent bg-white
                focus-visible:ring-transparent placeholder:text-customGray-3
                placeholder:font-medium pr-10`,
              )}
              inputMode="email"
              placeholder="이메일을 입력해 주세요"
              type={'text'}
              {...register('email', {
                pattern: {
                  value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i,
                  message: '알맞은 이메일이 아닙니다!',
                },
              })}
              maxLength={50}
            />
            {register.name && (
              <CircleXIcon
                className={cn(
                  'absolute right-2 top-[6px] cursor-pointer text-customGray-3 w-5 h-5',
                )}
                onClick={handleDeleteEmail}
              />
            )}
            {errors?.email && (
              <p className="absolute left-2 bottom-0 text-[14px]/[20px] text-secondary">
                {errors.email.message}
              </p>
            )}
          </div>
        </div>
        <Button
          className="relative bg-primary w-full rounded-2xl h-[60px] font-semibold text-[20px]/[30px]
            text-white mt-[36px] disabled:text-customGray-1 disabled:bg-customWhite-3"
          disabled={!email || loading}
          type="submit"
        >
          이메일로 임시 비밀번호 전송하기
        </Button>
      </div>
    </GenericForm>
  );
};

export default FindPasswordEmail;
