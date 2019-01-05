import { CalendarEntryService } from './calendar-entry.service';
import { CalendarEntry, EntryType } from '../model/calendar-entry';
import { EventPersistence } from './event-persistence';

class MockPersisterFactoryService {
    build() {}
}

class MockPersister implements EventPersistence {
    save() {}
}

describe('CalendarEntryService', () => {
    let service: CalendarEntryService;
    let mockPersisterFactoryService: any;

    beforeEach(() => {
        mockPersisterFactoryService = new MockPersisterFactoryService();
        service = new CalendarEntryService(mockPersisterFactoryService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    describe('#save', () => {
        it('should build a persister and call save on it when called', () => {
            const entryType: EntryType = 'reminder';
            const entry = new CalendarEntry('entry', 'Test Entry', entryType);
            const mockPersister = new MockPersister();
            spyOn(mockPersisterFactoryService, 'build').and.returnValue(mockPersister);
            spyOn(mockPersister, 'save');

            service.save(entry);
            expect(mockPersisterFactoryService.build).toHaveBeenCalledWith(entryType);
            expect(mockPersister.save).toHaveBeenCalledWith(entry);
        });
    });
});
