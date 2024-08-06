import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CalendarFooterProps {
  prevMonth: () => void;
  nextMonth: () => void;
  goToToday: () => void;
  isCurrentMonth: boolean;
}

const CalendarFooter = ({
  prevMonth,
  nextMonth,
  goToToday,
  isCurrentMonth,
}: CalendarFooterProps) => (
  <div className="mt-4 flex justify-between items-center relative">
    <button onClick={prevMonth} className="text-gray-600 hover:text-gray-800">
      <ChevronLeft size={28} />
    </button>
    {!isCurrentMonth && (
      <button
        onClick={goToToday}
        className="px-4 bg-primary text-white rounded-full text-sm hover:bg-blue-600
          transition-colors"
      >
        Today
      </button>
    )}
    <button onClick={nextMonth} className="text-gray-600 hover:text-gray-800">
      <ChevronRight size={28} />
    </button>
  </div>
);

export default CalendarFooter;
