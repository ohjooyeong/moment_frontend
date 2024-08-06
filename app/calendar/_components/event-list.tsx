import { Plus } from 'lucide-react';
import { IEventData } from '../types';

interface EventListProps {
  events: IEventData[];
  addEvent: () => void;
}

const EventList = ({ events, addEvent }: EventListProps) => (
  <div className="mt-14">
    <div className="flex justify-between items-center mb-2">
      <h3 className="text-xl font-semibold">이벤트</h3>
      <button onClick={addEvent} className="text-blue-500 hover:text-blue-700">
        <Plus size={20} />
      </button>
    </div>
    {events.length === 0 ? (
      <p className="text-gray-500">이벤트 목록이 없습니다.</p>
    ) : (
      <ul className="space-y-2">
        {events.map((event, index) => (
          <li key={index} className="bg-white p-2 rounded shadow">
            {event.title}
          </li>
        ))}
      </ul>
    )}
  </div>
);

export default EventList;
