export type EntryType = 'event' | 'reminder' | 'goal' | 'outOfOffice';

export class CalendarEntry {
    private key: string;
    private name: string;
    private type: EntryType;

    constructor(key: string, name: string, type: EntryType) {
        this.key = key;
        this.name = name;
        this.type = type;
    }

    get entryKey(): string {
        return this.key;
    }

    get entryName(): string {
        return `${this.type} - ${this.name}`;
    }

    get entryType(): EntryType {
        return this.type;
    }
}
