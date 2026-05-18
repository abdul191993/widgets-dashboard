import { Type } from '@angular/core';

export interface WidgetConfig {
  id: string;
  title: string;
  component: Type<any>;
}

export interface UserWidgetAssignment {
  userId: string;
  userName: string;
  widgetIds: string[];
}

export const CURRENT_USER_ID = 'user-1';

export const USER_ASSIGNMENTS: UserWidgetAssignment[] = [
  {
    userId: 'user-1',
    userName: 'Alex Johnson',
    widgetIds: ['sales', 'revenue', 'orders'],
  },
  {
    userId: 'user-2',
    userName: 'Sam Rivera',
    widgetIds: ['users', 'performance'],
  },
];
