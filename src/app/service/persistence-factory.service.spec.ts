import { PersistenceFactoryService } from './persistence-factory.service';
import { EventPersistence } from './event-persistence';
import { ReminderPersistence } from './reminder-persistence';
import { GoalPersistence } from './goal-persistence';
import { OutOfOfficePersistence } from './out-of-office-persistence';

describe('PersistenceFactoryService', () => {
    let service: PersistenceFactoryService;

    beforeEach(() => {
        service = new PersistenceFactoryService();
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    describe('#build', () => {
        it('should return an EventPersistence when the type is event', () => {
            expect(service.build('event')).toEqual(jasmine.any(EventPersistence));
        });

        it('should return a ReminderPersistence when the type is reminder', () => {
            expect(service.build('reminder')).toEqual(jasmine.any(ReminderPersistence));
        });

        it('should return a GoalPersistence when the type is goal', () => {
            expect(service.build('goal')).toEqual(jasmine.any(GoalPersistence));
        });

        it('should return an OutOfOfficePersistence when the type is outOfOffice', () => {
            expect(service.build('outOfOffice')).toEqual(jasmine.any(OutOfOfficePersistence));
        });
    });
});
