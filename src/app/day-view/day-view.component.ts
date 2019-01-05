import { Component, OnInit } from '@angular/core';
import { from, Observable } from 'rxjs';
import { CalendarEntry } from '../model/calendar-entry';

@Component({
    selector: 'app-day-view',
    templateUrl: './day-view.component.html',
    styleUrls: ['./day-view.component.css']
})
export class DayViewComponent implements OnInit {

    entries: Observable<CalendarEntry[]>;

    constructor() {
    }

    ngOnInit() {
        this.entries = from([[
            new CalendarEntry('e1', 'Test Event', 'event'),
            new CalendarEntry('e2', 'Test Reminder', 'reminder'),
            new CalendarEntry('e3', 'Test Goal', 'goal'),
            new CalendarEntry('e4', 'Test Out-of-office', 'outOfOffice')
        ]]);
    }

    onUpdate(entryToUpdate: CalendarEntry): void {
        switch (entryToUpdate.entryType) {
            case 'event':
                return this.saveEvent(entryToUpdate);
            case 'reminder':
                return this.saveReminder(entryToUpdate);
            case 'goal':
                return this.saveGoal(entryToUpdate);
            case 'outOfOffice':
                return this.saveOutOfOffice(entryToUpdate);
        }
    }

    trackByFn(index: number, entry: CalendarEntry): string {
        return entry.entryKey;
    }

    private saveEvent(entry: CalendarEntry): void {
        console.log(`Saved Event ${entry.entryName}`);
    }

    private saveReminder(entry: CalendarEntry): void {
        console.log(`Saved Reminder ${entry.entryName}`);
    }

    private saveGoal(entry: CalendarEntry): void {
        console.log(`Saved Goal ${entry.entryName}`);
    }

    private saveOutOfOffice(entry: CalendarEntry): void {
        console.log(`Saved Out-of-office ${entry.entryName}`);
    }

}
