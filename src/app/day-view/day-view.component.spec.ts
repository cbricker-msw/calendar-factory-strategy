import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DayViewComponent } from './day-view.component';
import { of } from 'rxjs';
import { random as _random, range as _range } from 'lodash';
import { AngularFirestore } from '@angular/fire/firestore';
import { CalendarEntry } from '../model/calendar-entry';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material';

const buildCalendarEntry = (index, type): CalendarEntry => {
    return {
        title: `Title ${index}`,
        type: type
    };
};

const buildSnapshotChange = (key: string, data: any) => {
    return {
        payload: {
            doc: {
                id: key,
                data: () => data
            }
        }
    };
};

const buildCollectionStub = (snapshotChanges) => {
    return {
        snapshotChanges: jasmine.createSpy('snapshotChanges').and.returnValue(of(snapshotChanges)),
        doc: jasmine.createSpy('doc').and.returnValue(documentStub)
    };
};

const buildAngularFirestoreStub = (collectionStub) => {
    return {
        collection: jasmine.createSpy('collection').and.returnValue(collectionStub)
    };
};

describe('DayViewComponent', () => {
    let component: DayViewComponent;
    let fixture: ComponentFixture<DayViewComponent>;
    let collectionStub: any;
    let angularFirestoreStub: any;
    let numberOfEntries: number;

    beforeEach(async(() => {
        numberOfEntries = _random(1, 10);
        const snapshotChanges = _range(numberOfEntries).map((index) => {
            return buildSnapshotChange(`testKey${index}`, buildCalendarEntry(index, 'event'));
        });
        collectionStub = buildCollectionStub(snapshotChanges);
        angularFirestoreStub = buildAngularFirestoreStub(collectionStub);

        TestBed.configureTestingModule({
            declarations: [DayViewComponent],
            imports: [
                FormsModule,
                MatCardModule
            ],
            providers: [
                { provide: AngularFirestore, useValue: angularFirestoreStub }
            ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(DayViewComponent);
        component = fixture.componentInstance;

        const angularFirestore = TestBed.get(AngularFirestore);

        fixture.detectChanges();
        expect(angularFirestore.collection).toHaveBeenCalledWith('calendar-entries');
        expect(component.entries.length).toEqual(numberOfEntries);
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    describe('#onUpdate', () => {
        it('should update an entry when called', () => {
            spyOn(collectionStub.
        })
    })
});
