import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { useBirths } from '../../_hooks/use-births';
import useMediaQuery from '@/hooks/use-meida-query';
import Picker, { PickerValue } from 'react-mobile-picker';
import { useCallback, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

import { useFormContext } from 'react-hook-form';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import dayjs from 'dayjs';
import { FormDataType } from '../../_type';

function getDayArray(year: number, month: number) {
  const dayCount = new Date(year, month, 0).getDate();
  return Array.from({ length: dayCount }, (_, i) =>
    String(i + 1).padStart(2, '0'),
  );
}

export function BirthDrawer() {
  const { watch, setValue } = useFormContext<FormDataType>();

  const births = useBirths();
  const isDesktop = useMediaQuery({ query: '(min-width: 578px)' });

  const birth = watch('birth');

  const [pickerValue, setPickerValue] = useState<PickerValue>({
    year: '2000',
    month: '08',
    day: '12',
  });

  const handlePickerChange = useCallback(
    (newValue: PickerValue, key: string) => {
      if (key === 'day') {
        setPickerValue(newValue);
        return;
      }

      const { year, month } = newValue;
      const newDayArray = getDayArray(Number(year), Number(month));
      const newDay = newDayArray.includes(newValue.day)
        ? newValue.day
        : newDayArray[newDayArray.length - 1];
      setPickerValue({ ...newValue, day: newDay });
    },
    [],
  );

  const handleOnClose = () => {
    const birth = dayjs(
      `${pickerValue.year}-${pickerValue.month}-${pickerValue.day}`,
    ).format('YYYY / MM / DD');
    setValue('birth', birth);
    births.onClose();
  };

  useEffect(() => {
    const year = dayjs(birth).year();
    const month =
      dayjs(birth).month() < 10
        ? `0${dayjs(birth).month()}`
        : dayjs(birth).month();
    const date = dayjs(birth).date();

    setPickerValue({ year: `${year}`, month: `${month}`, day: `${date}` });
  }, []);

  if (isDesktop) {
    return (
      <Dialog open={births.isOpen} onOpenChange={handleOnClose}>
        <DialogContent className="sm:max-w-[428px]" aria-describedby="">
          <DialogHeader className="border-b pb-3">
            <DialogTitle className="text-[20px]/[30px] text-center font-medium">
              생년월일
            </DialogTitle>
          </DialogHeader>

          <div className="flex min-h-full items-center justify-center text-center w-full cursor-row-resize">
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
              <Picker.Column name="month">
                {Array.from({ length: 12 }, (_, i) =>
                  String(i + 1).padStart(2, '0'),
                ).map((month) => (
                  <Picker.Item key={month} value={month}>
                    {({ selected }) => (
                      <div
                        className={cn(
                          'text-[16px]/[24px] w-full',
                          selected
                            ? 'font-semibold text-neutral-900'
                            : 'text-neutral-400',
                        )}
                      >
                        {month}
                      </div>
                    )}
                  </Picker.Item>
                ))}
              </Picker.Column>
              <Picker.Column name="day">
                {getDayArray(
                  Number(pickerValue.year),
                  Number(pickerValue.month),
                ).map((day) => (
                  <Picker.Item key={day} value={day}>
                    {({ selected }) => (
                      <div
                        className={cn(
                          'text-[16px]/[24px] w-full',
                          selected
                            ? 'font-semibold text-neutral-900'
                            : 'text-neutral-400',
                        )}
                      >
                        {day}
                      </div>
                    )}
                  </Picker.Item>
                ))}
              </Picker.Column>
            </Picker>
          </div>

          <Button
            className="relative bg-primary w-full rounded-2xl h-[50px] font-semibold text-[20px]/[30px]
              text-white disabled:text-customGray-1 disabled:bg-customWhite-3"
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
      <SheetContent side="bottom" hideCloseButton aria-describedby="">
        <SheetHeader className="border-b pb-3 relative justify-center">
          <SheetTitle className="text-[20px]/[30px] text-center font-medium">
            출생년도
          </SheetTitle>
          <p
            className="absolute right-4 text-[16px]/[24px] font-semibold text-primary mt-0"
            onClick={handleOnClose}
          >
            선택
          </p>
        </SheetHeader>

        <div className="flex min-h-full items-center justify-center text-center w-full">
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
            <Picker.Column name="month">
              {Array.from({ length: 12 }, (_, i) =>
                String(i + 1).padStart(2, '0'),
              ).map((month) => (
                <Picker.Item key={month} value={month}>
                  {({ selected }) => (
                    <div
                      className={cn(
                        'text-[16px]/[24px] w-full',
                        selected
                          ? 'font-semibold text-neutral-900'
                          : 'text-neutral-400',
                      )}
                    >
                      {month}
                    </div>
                  )}
                </Picker.Item>
              ))}
            </Picker.Column>
            <Picker.Column name="day">
              {getDayArray(
                Number(pickerValue.year),
                Number(pickerValue.month),
              ).map((day) => (
                <Picker.Item key={day} value={day}>
                  {({ selected }) => (
                    <div
                      className={cn(
                        'text-[16px]/[24px] w-full',
                        selected
                          ? 'font-semibold text-neutral-900'
                          : 'text-neutral-400',
                      )}
                    >
                      {day}
                    </div>
                  )}
                </Picker.Item>
              ))}
            </Picker.Column>
          </Picker>
        </div>
      </SheetContent>
    </Sheet>
  );
}
