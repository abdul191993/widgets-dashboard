import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { WidgetConfig, CURRENT_USER_ID, USER_ASSIGNMENTS } from '../data/widgets.data';
import { ALL_WIDGETS } from '../data/widget-registry';

@Injectable({ providedIn: 'root' })
export class WidgetService {

  getUserWidgets(): Observable<WidgetConfig[]> {
    const assignment = USER_ASSIGNMENTS.find(a => a.userId === CURRENT_USER_ID);

    let widgets: WidgetConfig[] = [];
    if (assignment) {
      widgets = assignment.widgetIds
        .map(id => ALL_WIDGETS[id])
        .filter((w): w is WidgetConfig => !!w);
    }
    return of(widgets).pipe(delay(500));
  }
}
