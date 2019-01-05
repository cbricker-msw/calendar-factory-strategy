import { EntryPersistence } from './entry-persistence';
import { CalendarEntry } from '../model/calendar-entry';

export class GoalPersistence implements EntryPersistence {
    save(entry: CalendarEntry): void {
        console.log(`Saved Goal ${entry.entryName}`);
    }
}
