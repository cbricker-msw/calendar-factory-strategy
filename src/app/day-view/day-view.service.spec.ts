import { DayViewService } from './day-view.service';

describe('DayViewService', () => {
    let service: DayViewService;

    beforeEach(() => {
        service = new DayViewService();
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    describe('#saveEntry', () => {
        it('should ??? when entry is an event', () => {
            expect(true).toEqual(true);
        });

        it('should ??? when entry is a reminder', () => {
            expect(true).toEqual(true);
        });

        it('should ??? when entry is a goal', () => {
            expect(true).toEqual(true);
        });

        it('should ??? when entry is an out-of-office', () => {
            expect(true).toEqual(true);
        });
    });
});
