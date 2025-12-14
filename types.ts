export interface BlogPost {
  id: number;
  category: string;
  date: string;
  title: string;
  image: string;
}

export interface StatMetric {
  name: string;
  value: number;
}

export interface ServiceItem {
  icon: 'users' | 'message-square' | 'copyright';
  title: string;
  description: string;
}

export enum RevenueRange {
  NEW = 'new',
  LOW = 'low',
  MID = 'mid',
  HIGH = 'high'
}