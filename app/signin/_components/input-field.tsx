import { CircleXIcon } from 'lucide-react';
import { UseFormRegisterReturn } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

const InputField = ({
  label,
  type,
  placeholder,
  icon,
  register,
  error,
  onClear,
  rightIcon,
}: {
  label: string;
  type: string;
  placeholder: string;
  icon: React.ReactNode;
  register: UseFormRegisterReturn;
  error?: { message?: string };
  onClear?: () => void;
  rightIcon?: React.ReactNode;
}) => (
  <div className="flex flex-col w-full">
    <span className="ml-2 mb-2 text-base font-medium text-black">{label}</span>
    <div className="flex relative w-full">
      <Input
        className={cn(
          `pl-[50px] w-full rounded-2xl h-[60px] font-medium text-base text-customBlack-1
          border-customGray-3 focus-visible:ring-transparent focus-visible:border-primary
          placeholder:text-customGray-3`,
        )}
        placeholder={placeholder}
        type={type}
        {...register}
      />
      <span className="absolute left-5 top-5 text-customGray-2">{icon}</span>
      {onClear && register.name === 'email' && (
        <CircleXIcon
          className="absolute right-5 top-5 cursor-pointer text-customGray-3 w-5 h-5"
          onClick={onClear}
        />
      )}
      {rightIcon && <span className="absolute right-5 top-5">{rightIcon}</span>}
    </div>
  </div>
);

export default InputField;
