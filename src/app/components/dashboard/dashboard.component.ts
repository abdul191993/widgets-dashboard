import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

import { WidgetConfig } from '../../data/widgets.data';
import { WidgetService } from '../../services/widget.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {
  private widgetService = inject(WidgetService);
  
  widgets$: Observable<WidgetConfig[]> = this.widgetService.getUserWidgets();
}
