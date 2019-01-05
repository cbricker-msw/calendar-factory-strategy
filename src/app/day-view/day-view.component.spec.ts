import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DayViewComponent } from './day-view.component';
import { DayViewService } from './day-view.service';
import { CalendarEntry } from '../model/calendar-entry';

import { of } from 'rxjs';

class MockDayViewService {
    getEntries() {}
    saveEntry() {}
}

describe('DayViewComponent', () => {
    let component: DayViewComponent;
    let fixture: ComponentFixture<DayViewComponent>;
    let mockDayViewService: any;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [DayViewComponent],
            providers: [
                { provide: DayViewService, useClass: MockDayViewService }
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DayViewComponent);
        component = fixture.componentInstance;
        mockDayViewService = fixture.debugElement.injector.get(DayViewService);

        spyOn(mockDayViewService, 'getEntries').and.returnValue(of([]));

        fixture.detectChanges();
        expect(mockDayViewService.getEntries).toHaveBeenCalled();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    describe('#onUpdate', () => {
        it('should call the service saveEntry when called', () => {
            const entry = new CalendarEntry('entry', 'Test Entry', 'event');
            spyOn(mockDayViewService, 'saveEntry');
            component.onUpdate(entry);
            expect(mockDayViewService.saveEntry).toHaveBeenCalledWith(entry);
        });
    });
});
