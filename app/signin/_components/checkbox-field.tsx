import { Checkbox } from '@/components/ui/checkbox';

const CheckboxField = ({
  id,
  label,
  checked,
  onChange,
}: {
  id: string;
  label: string;
  checked: boolean;
  onChange: () => void;
}) => (
  <div className="flex items-center space-x-2 ml-2">
    <Checkbox
      id={id}
      className="data-[state=checked]:text-white data-[state=checked]:border-primary w-[22px]
        h-[22px] border-customGray-3"
      checked={checked}
      onCheckedChange={onChange}
    />
    <label
      htmlFor={id}
      className="text-customGray-1 select-none cursor-pointer peer-disabled:cursor-not-allowed
        peer-disabled:opacity-70 text-sm"
    >
      {label}
    </label>
  </div>
);

export default CheckboxField;
