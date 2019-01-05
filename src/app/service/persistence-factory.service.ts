import { Injectable } from '@angular/core';
import { EntryType } from '../model/calendar-entry';
import { EntryPersistence } from './entry-persistence';
import { EventPersistence } from './event-persistence';
import { ReminderPersistence } from './reminder-persistence';
import { GoalPersistence } from './goal-persistence';
import { OutOfOfficePersistence } from './out-of-office-persistence';

@Injectable({
    providedIn: 'root'
})
export class PersistenceFactoryService {

    constructor() {
    }

    build(type: EntryType): EntryPersistence {
        switch (type) {
            case 'event':
                return new EventPersistence();
            case 'reminder':
                return new ReminderPersistence();
            case 'goal':
                return new GoalPersistence();
            case 'outOfOffice':
                return new OutOfOfficePersistence();
        }
    }

}
