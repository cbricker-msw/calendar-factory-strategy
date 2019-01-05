import { CalendarEntry } from '../model/calendar-entry';

export interface EntryPersistence {
    save(entry: CalendarEntry): void;
}
