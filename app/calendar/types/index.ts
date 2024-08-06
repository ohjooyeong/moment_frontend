export interface IEventStatus {
  type: 'highlight' | 'dot';
  icon?: 'cloud' | 'todo';
}

export interface IEventData {
  date: Date;
  title: string;
}

export interface DayData {
  day: number | string;
  events: IEventStatus[];
}
