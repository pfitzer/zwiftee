import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {WorkoutsComponent} from './workouts.component';
import {FormsModule} from '@angular/forms';

describe('WorkoutsComponent', () => {
    let component: WorkoutsComponent;
    let fixture: ComponentFixture<WorkoutsComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [WorkoutsComponent],
            imports: [FormsModule]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(WorkoutsComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
