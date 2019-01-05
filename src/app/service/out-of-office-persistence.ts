import { EntryPersistence } from './entry-persistence';
import { CalendarEntry } from '../model/calendar-entry';

export class OutOfOfficePersistence implements EntryPersistence {
    save(entry: CalendarEntry): void {
        console.log(`Saved Out-of-office ${entry.entryName}`);
    }
}
