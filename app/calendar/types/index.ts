export interface IEventStatus {
  type: 'highlight' | 'dot';
  icon?: 'cloud' | 'todo';
}

export interface DayData {
  day: number | string;
  events: IEventStatus[];
}
