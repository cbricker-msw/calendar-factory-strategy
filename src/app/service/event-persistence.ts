import { CalendarEntry } from '../model/calendar-entry';
import { EntryPersistence } from './entry-persistence';

export class EventPersistence implements EntryPersistence {
    save(entry: CalendarEntry): void {
        console.log(`Saved Event ${entry.entryName}`);
    }
}
