import { Injectable } from '@angular/core';
import { CalendarEntry } from '../model/calendar-entry';
import { Observable } from 'rxjs';
import { CalendarEntryService } from '../service/calendar-entry.service';

@Injectable({
    providedIn: 'root'
})
export class DayViewService {

    constructor(private calendarEntryService: CalendarEntryService) {
    }

    getEntries(): Observable<CalendarEntry[]> {
        return this.calendarEntryService.getEntries();
    }

    saveEntry(entry: CalendarEntry): void {
        this.calendarEntryService.save(entry);
    }


}
