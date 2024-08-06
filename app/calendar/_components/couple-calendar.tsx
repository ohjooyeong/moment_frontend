'use client';

import { Fragment, useCallback, useMemo, useState } from 'react';
import { Cloud, FileText } from 'lucide-react';
import { DayData, IEventData, IEventStatus } from '../types';
import { TOTAL_CALENDAR_DAYS } from '../constants';
import CalendarFooter from './calendar-footer';
import { getDaysInMonth, getFirstDayOfMonth } from '../utils';
import CalendarBody from './calendar-body';
import CalendarHeader from './calendar-header';
import EventList from './event-list';
import MemoSection from './memo-section';

const CoupleCalendar = () => {
  const [currentDate] = useState<Date>(new Date());
  const [viewDate, setViewDate] = useState<Date>(new Date());
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [events, setEvents] = useState<IEventData[]>([]);
  const [memo, setMemo] = useState<string>('');

  const year = viewDate.getFullYear();
  const month = viewDate.getMonth();

  const isCurrentMonth = useMemo(
    () =>
      viewDate.getMonth() === currentDate.getMonth() &&
      viewDate.getFullYear() === currentDate.getFullYear(),
    [viewDate, currentDate],
  );

  const calendarDays = useMemo(() => {
    const daysInMonth = getDaysInMonth(year, month);
    const firstDayOfMonth = getFirstDayOfMonth(year, month);
    const days: DayData[] = [];

    for (let i = 0; i < TOTAL_CALENDAR_DAYS; i++) {
      if (i < firstDayOfMonth || i >= firstDayOfMonth + daysInMonth) {
        days.push({ day: '', events: [] });
      } else {
        const dayNumber = i - firstDayOfMonth + 1;
        const events: IEventStatus[] = [];
        if (dayNumber === 6) events.push({ type: 'highlight' });
        if (dayNumber === 11) events.push({ type: 'dot' });
        if (dayNumber === 12) events.push({ type: 'dot', icon: 'cloud' });
        if (dayNumber === 13) events.push({ type: 'dot', icon: 'todo' });
        days.push({ day: dayNumber, events });
      }
    }
    return days;
  }, [year, month]);

  const prevMonth = useCallback(
    () => setViewDate(new Date(year, month - 1, 1)),
    [year, month],
  );

  const nextMonth = useCallback(
    () => setViewDate(new Date(year, month + 1, 1)),
    [year, month],
  );

  const goToToday = useCallback(() => setViewDate(new Date()), []);

  const addEvent = useCallback(() => {
    const title = prompt('Enter event title:');
    if (title) {
      setEvents([...events, { date: selectedDate, title }]);
    }
  }, [events, selectedDate]);

  const filteredEvents = useMemo(
    () =>
      events.filter(
        (event) => event.date.toDateString() === selectedDate.toDateString(),
      ),
    [events, selectedDate],
  );

  const renderEventIndicators = (events: IEventStatus[]): JSX.Element[] => {
    return events.map((event, index) => {
      switch (event.type) {
        case 'highlight':
          return (
            <div
              key={index}
              className="absolute top-0 left-0 right-0 h-1 bg-red-300 rounded-t-full"
            />
          );
        case 'dot':
          return (
            <Fragment key={index}>
              <div className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-secondary rounded-full" />
              {event.icon === 'cloud' && (
                <Cloud
                  size={16}
                  className="text-gray-400 absolute bottom-0 left-1/2 transform -translate-x-1/2"
                />
              )}
              {event.icon === 'todo' && (
                <FileText
                  size={16}
                  className="text-gray-400 absolute bottom-0 left-1/2 transform -translate-x-1/2"
                />
              )}
            </Fragment>
          );

        default:
          return <></>;
      }
    });
  };

  return (
    <div className="w-full bg-white p-4 rounded-lg shadow-md">
      <CalendarHeader />
      <CalendarBody
        viewDate={viewDate}
        calendarDays={calendarDays}
        currentDate={currentDate}
        isCurrentMonth={isCurrentMonth}
        renderEventIndicators={renderEventIndicators}
      />
      <CalendarFooter
        prevMonth={prevMonth}
        nextMonth={nextMonth}
        goToToday={goToToday}
        isCurrentMonth={isCurrentMonth}
      />
      <EventList events={filteredEvents} addEvent={addEvent} />
      <MemoSection memo={memo} setMemo={setMemo} />
    </div>
  );
};

export default CoupleCalendar;
