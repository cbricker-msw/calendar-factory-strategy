import { Injectable } from '@angular/core';
import { CalendarEntry } from '../model/calendar-entry';
import { from, Observable } from 'rxjs';
import { PersistenceFactoryService } from './persistence-factory.service';
import { EntryPersistence } from './entry-persistence';

@Injectable({
    providedIn: 'root'
})
export class CalendarEntryService {

    constructor(private persisterFactoryService: PersistenceFactoryService) {
    }

    getEntries(): Observable<CalendarEntry[]> {
        return from([[
            new CalendarEntry('e1', 'Test Event', 'event'),
            new CalendarEntry('e2', 'Test Reminder', 'reminder'),
            new CalendarEntry('e3', 'Test Goal', 'goal'),
            new CalendarEntry('e4', 'Test Out-of-office', 'outOfOffice')
        ]]);
    }

    save(entry: CalendarEntry): void {
        const persistence: EntryPersistence = this.persisterFactoryService.build(entry.entryType);
        persistence.save(entry);
    }

}
