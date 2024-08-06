import { DAYS_OF_WEEK } from '../constants';
import { DayData, IEventStatus } from '../types';
import { isSameDate } from '../utils';

interface CalendarBodyProps {
  viewDate: Date;
  calendarDays: DayData[];
  currentDate: Date;
  isCurrentMonth: boolean;
  renderEventIndicators: (events: IEventStatus[]) => JSX.Element[];
}

const CalendarBody = ({
  viewDate,
  calendarDays,
  currentDate,
  isCurrentMonth,
  renderEventIndicators,
}: CalendarBodyProps) => (
  <>
    <div className="text-center mb-4">
      <p className="text-xl text-gray-600 uppercase">
        {viewDate.toLocaleString('default', { month: 'long' })}
      </p>
    </div>
    <div className="grid grid-cols-7 gap-1 mb-2">
      {DAYS_OF_WEEK.map((day) => (
        <div
          key={day}
          className="text-center text-lg font-medium text-gray-400"
        >
          {day}
        </div>
      ))}
    </div>
    <div className="grid grid-cols-7 gap-1">
      {calendarDays.map((dayData, index) => (
        <div
          key={index}
          className={`relative h-12 border border-gray-100 ${dayData.day ? 'bg-white' : 'bg-gray-50'}`}
        >
          <span
            className={`absolute top-1 left-1 text-sm ${
            dayData.day &&
              isSameDate(
                new Date(
                  viewDate.getFullYear(),
                  viewDate.getMonth(),
                  Number(dayData.day),
                ),
                currentDate,
              ) &&
              isCurrentMonth
                ? 'text-blue-500 font-bold'
                : 'text-gray-700'
            }`}
          >
            {dayData.day}
          </span>
          {renderEventIndicators(dayData.events)}
        </div>
      ))}
    </div>
  </>
);

export default CalendarBody;
