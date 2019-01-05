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

    saveEvent(entry: CalendarEntry): void {
        console.log(`Saved Event ${entry.entryName}`);
    }

    saveReminder(entry: CalendarEntry): void {
        console.log(`Saved Reminder ${entry.entryName}`);
    }

    saveGoal(entry: CalendarEntry): void {
        console.log(`Saved Goal ${entry.entryName}`);
    }

    saveOutOfOffice(entry: CalendarEntry): void {
        console.log(`Saved Out-of-office ${entry.entryName}`);
    }


}
