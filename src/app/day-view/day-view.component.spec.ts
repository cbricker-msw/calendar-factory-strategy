import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DayViewComponent } from './day-view.component';
import { DayViewService } from './day-view.service';
import { CalendarEntry } from '../model/calendar-entry';

import { of } from 'rxjs';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

class MockDayViewService {
    getEntries() {}
    saveEvent() {}
    saveReminder() {}
    saveGoal() {}
    saveOutOfOffice() {}
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
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
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
        it('should call saveEvent when the entry is an event', () => {
            const event = new CalendarEntry('entry', 'Test Entry', 'event');
            spyOn(mockDayViewService, 'saveEvent');
            component.onUpdate(event);
            expect(mockDayViewService.saveEvent).toHaveBeenCalledWith(event);
        });

        it('should call saveReminder when the entry is a reminder', () => {
            const event = new CalendarEntry('reminder', 'Test Reminder', 'reminder');
            spyOn(mockDayViewService, 'saveReminder');
            component.onUpdate(event);
            expect(mockDayViewService.saveReminder).toHaveBeenCalledWith(event);
        });

        it('should call saveGoal when the entry is a goal', () => {
            const event = new CalendarEntry('goal', 'Test Goal', 'goal');
            spyOn(mockDayViewService, 'saveGoal');
            component.onUpdate(event);
            expect(mockDayViewService.saveGoal).toHaveBeenCalledWith(event);
        });

        it('should call saveOutOfOffice when the entry is an outOfOffice', () => {
            const event = new CalendarEntry('outOfOffice', 'Test Entry', 'outOfOffice');
            spyOn(mockDayViewService, 'saveOutOfOffice');
            component.onUpdate(event);
            expect(mockDayViewService.saveOutOfOffice).toHaveBeenCalledWith(event);
        });
    });
});
