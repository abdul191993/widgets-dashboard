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

  // By exposing the Observable directly, the async pipe in the HTML template 
  // will automatically handle subscribing, unsubscribing, AND change detection!
  widgets$: Observable<WidgetConfig[]> = this.widgetService.getUserWidgets();
}