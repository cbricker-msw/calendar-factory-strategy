import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CalendarEntry } from '../model/calendar-entry';
import { DayViewService } from './day-view.service';

@Component({
    selector: 'app-day-view',
    templateUrl: './day-view.component.html',
    styleUrls: ['./day-view.component.css']
})
export class DayViewComponent implements OnInit {

    entries: Observable<CalendarEntry[]>;

    constructor(private dayViewService: DayViewService) {
    }

    ngOnInit() {
        this.entries = this.dayViewService.getEntries();
    }

    onUpdate(entryToUpdate: CalendarEntry): void {
        switch (entryToUpdate.entryType) {
            case 'event':
                return this.dayViewService.saveEvent(entryToUpdate);
            case 'reminder':
                return this.dayViewService.saveReminder(entryToUpdate);
            case 'goal':
                return this.dayViewService.saveGoal(entryToUpdate);
            case 'outOfOffice':
                return this.dayViewService.saveOutOfOffice(entryToUpdate);
        }
    }

    trackByFn(index: number, entry: CalendarEntry): string {
        return entry.entryKey;
    }

}
