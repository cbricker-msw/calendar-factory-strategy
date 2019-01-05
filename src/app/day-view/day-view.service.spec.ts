import { TestBed, inject } from '@angular/core/testing';

import { DayViewService } from './day-view.service';

describe('DayViewService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DayViewService]
    });
  });

  it('should be created', inject([DayViewService], (service: DayViewService) => {
    expect(service).toBeTruthy();
  }));
});
