import { WidgetConfig, CURRENT_USER_ID, USER_ASSIGNMENTS } from './widgets.data';
import { SalesWidgetComponent } from '../widgets/sales-widget/sales-widget.component';
import { RevenueWidgetComponent } from '../widgets/revenue-widget/revenue-widget.component';
import { OrdersWidgetComponent } from '../widgets/orders-widget/orders-widget.component';
import { UsersWidgetComponent } from '../widgets/users-widget/users-widget.component';
import { PerformanceWidgetComponent } from '../widgets/performance-widget/performance-widget.component';

export const ALL_WIDGETS: Record<string, WidgetConfig> = {
  sales: { id: 'sales', title: 'Sales Overview', component: SalesWidgetComponent },
  revenue: { id: 'revenue', title: 'Revenue Summary', component: RevenueWidgetComponent },
  orders: { id: 'orders', title: 'Recent Orders', component: OrdersWidgetComponent },
  users: { id: 'users', title: 'Active Users', component: UsersWidgetComponent },
  performance: { id: 'performance', title: 'Performance Metrics', component: PerformanceWidgetComponent },
};
