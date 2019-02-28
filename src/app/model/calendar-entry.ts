export type EntryType = 'event' | 'reminder' | 'outOfOffice';

export interface CalendarEntry {
    key?: string;
    title: string;
    type: EntryType;
}

export interface Event extends CalendarEntry {
    start: Date;
    end: Date;
}

export interface OutOfOffice extends Event {
    declineMessage: string;
}

export interface Reminder extends CalendarEntry {
    when: Date;
}
