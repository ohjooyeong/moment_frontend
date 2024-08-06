import { AlignJustify, HelpCircle } from 'lucide-react';

const CalendarHeader = () => (
  <>
    <div className="flex justify-between items-center mb-4">
      <HelpCircle size={20} className="text-gray-400" />
      <h1 className="text-xl font-semibold text-gray-800">Moment Log</h1>
      <AlignJustify size={20} className="text-gray-400" />
    </div>
  </>
);

export default CalendarHeader;
