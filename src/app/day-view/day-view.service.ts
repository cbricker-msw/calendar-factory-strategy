import { Injectable } from '@angular/core';
import { CalendarEntry } from '../model/calendar-entry';
import { from, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DayViewService {

    constructor() {
    }

    getEntries(): Observable<CalendarEntry[]> {
        return from([[
            new CalendarEntry('e1', 'Test Event', 'event'),
            new CalendarEntry('e2', 'Test Reminder', 'reminder'),
            new CalendarEntry('e3', 'Test Goal', 'goal'),
            new CalendarEntry('e4', 'Test Out-of-office', 'outOfOffice')
        ]]);
    }

    saveEntry(entry: CalendarEntry): void {
        switch (entry.entryType) {
            case 'event':
                return this.saveEvent(entry);
            case 'reminder':
                return this.saveReminder(entry);
            case 'goal':
                return this.saveGoal(entry);
            case 'outOfOffice':
                return this.saveOutOfOffice(entry);
        }
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
