import { Button } from '@/components/ui/button';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from '@/components/ui/drawer';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { useBirths } from '../../_hooks/use-births';
import useMediaQuery from '@/hooks/use-meida-query';
import Picker, { PickerValue } from 'react-mobile-picker';
import { useCallback, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { FormDataType } from '../signup-main';
import { useFormContext } from 'react-hook-form';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';

export function BirthDrawer() {
  const { watch, setValue } = useFormContext<FormDataType>();

  const births = useBirths();
  const isDesktop = useMediaQuery({ query: '(min-width: 578px)' });

  const birth = watch('birth');

  const [pickerValue, setPickerValue] = useState<PickerValue>({
    year: '2000',
  });

  const handlePickerChange = useCallback(
    (newValue: PickerValue, key: string) => {
      if (key === 'day') {
        setPickerValue(newValue);
        return;
      }

      const { year } = newValue;

      setPickerValue({ year: year });
    },
    [],
  );

  const handleOnClose = () => {
    setValue('birth', Number(pickerValue.year));
    births.onClose();
  };

  useEffect(() => {
    setPickerValue({ year: `${birth}` });
  }, [birth]);

  if (isDesktop) {
    return (
      <Dialog open={births.isOpen} onOpenChange={handleOnClose}>
        <DialogContent className="sm:max-w-[428px]">
          <DialogHeader className="border-b pb-3">
            <DialogTitle className="text-lg text-center font-medium">
              출생년도
            </DialogTitle>
          </DialogHeader>

          <DialogDescription className="flex min-h-full items-center justify-center text-center w-full cursor-row-resize">
            <Picker
              value={pickerValue}
              onChange={handlePickerChange}
              wheelMode="natural"
              className="w-full"
            >
              <Picker.Column name="year">
                {Array.from({ length: 100 }, (_, i) => `${1923 + i}`).map(
                  (year) => (
                    <Picker.Item key={year} value={year} className="w-full">
                      {({ selected }) => (
                        <div
                          className={cn(
                            'text-[16px]/[24px] w-full',
                            selected
                              ? 'font-semibold text-neutral-900'
                              : 'text-neutral-400',
                          )}
                        >
                          {year}
                        </div>
                      )}
                    </Picker.Item>
                  ),
                )}
              </Picker.Column>
            </Picker>
          </DialogDescription>

          <Button
            className="relative bg-primary w-full rounded-2xl h-[50px] font-semibold text-lg text-white
              disabled:text-customGray-1 disabled:bg-customWhite-3"
            onClick={handleOnClose}
          >
            선택
          </Button>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Sheet open={births.isOpen} onOpenChange={handleOnClose}>
      <SheetContent side="bottom" hideCloseButton>
        <SheetHeader className="border-b pb-3 relative justify-center">
          <SheetTitle className="text-lg text-center font-medium">
            출생년도
          </SheetTitle>
          <p
            className="absolute right-4 text-[14px]/[20px] font-semibold text-primary mt-0"
            onClick={handleOnClose}
          >
            선택
          </p>
        </SheetHeader>

        <SheetDescription className="flex min-h-full items-center justify-center text-center w-full">
          <Picker
            value={pickerValue}
            onChange={handlePickerChange}
            className="w-full"
          >
            <Picker.Column name="year">
              {Array.from({ length: 100 }, (_, i) => `${1923 + i}`).map(
                (year) => (
                  <Picker.Item key={year} value={year} className="w-full">
                    {({ selected }) => (
                      <div
                        className={cn(
                          'text-[16px]/[24px] w-full',
                          selected
                            ? 'font-semibold text-neutral-900'
                            : 'text-neutral-400',
                        )}
                      >
                        {year}
                      </div>
                    )}
                  </Picker.Item>
                ),
              )}
            </Picker.Column>
          </Picker>
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
}
