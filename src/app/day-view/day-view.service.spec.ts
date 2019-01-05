import { DayViewService } from './day-view.service';
import { CalendarEntry } from '../model/calendar-entry';

class MockCalendarEntryService {
    save() {}
}

describe('DayViewService', () => {
    let service: DayViewService;
    let mockCalendarEntryService: any;

    beforeEach(() => {
        mockCalendarEntryService = new MockCalendarEntryService();
        service = new DayViewService(mockCalendarEntryService);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    describe('#saveEntry', () => {
        it('should call the calendar entry service save when called', () => {
            const entry = new CalendarEntry('entry', 'Test Entry', 'event');
            spyOn(mockCalendarEntryService, 'save');
            service.saveEntry(entry);
            expect(mockCalendarEntryService.save).toHaveBeenCalledWith(entry);
        });
    });
});
