export interface ResponseTableHistoryShort {
  lastDate: string;
  count: number;
  name: string;
}

export interface ResponseTableHistoryItem {
  currentValue: string;
  fromValue: string;
  operation: string;
  timestamp: string;
}
