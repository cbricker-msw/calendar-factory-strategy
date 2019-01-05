import { EntryPersistence } from './entry-persistence';
import { CalendarEntry } from '../model/calendar-entry';

export class ReminderPersistence implements EntryPersistence {
    save(entry: CalendarEntry): void {
        console.log(`Saved Reminder ${entry.entryName}`);
    }
}
