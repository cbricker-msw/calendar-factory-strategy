import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { CalendarEntry } from '../model/calendar-entry';
import { AngularFirestore, AngularFirestoreCollection, DocumentChangeAction } from '@angular/fire/firestore';
import { map, takeUntil } from 'rxjs/operators';

@Component({
    selector: 'app-day-view',
    templateUrl: './day-view.component.html',
    styleUrls: ['./day-view.component.scss']
})
export class DayViewComponent implements OnInit, OnDestroy {

    entries: CalendarEntry[];

    private calendarEventsCollection: AngularFirestoreCollection<CalendarEntry>;
    private destroySubject = new Subject<void>();

    constructor(private db: AngularFirestore) {
    }

    ngOnInit() {
        this.calendarEventsCollection = this.db.collection('calendar-entries');
        this.calendarEventsCollection.snapshotChanges()
            .pipe(
                map((actions: DocumentChangeAction<CalendarEntry>[]) => {
                    return actions.map((action) => {
                        const data = action.payload.doc.data() as CalendarEntry;
                        const key = action.payload.doc.id;
                        return { key, ...data };
                    });
                }),
                takeUntil(this.destroySubject)
            )
            .subscribe((entries: CalendarEntry[]) => {
                this.entries = entries;
            });
    }

    ngOnDestroy() {
        this.destroySubject.next();
        this.destroySubject.complete();
    }

    onUpdate(entryToUpdate: CalendarEntry): void {
        switch (entryToUpdate.type) {
            case 'event':
                return this.saveEvent(entryToUpdate);
            case 'reminder':
                return this.saveReminder(entryToUpdate);
            case 'outOfOffice':
                return this.saveOutOfOffice(entryToUpdate);
        }
    }

    trackByFn(index: number, entry: CalendarEntry): string {
        return entry.key;
    }

    private saveEvent(entry: CalendarEntry): void {
        console.log(`Saved Event ${entry.title}`);
        this.calendarEventsCollection.doc(entry.key).set(entry);
    }

    private saveReminder(entry: CalendarEntry): void {
        console.log(`Saved Reminder ${entry.title}`);
        this.calendarEventsCollection.doc(entry.key).set(entry);
    }

    private saveOutOfOffice(entry: CalendarEntry): void {
        console.log(`Saved Out-of-office ${entry.title}`);
        this.calendarEventsCollection.doc(entry.key).set(entry);
    }

}
