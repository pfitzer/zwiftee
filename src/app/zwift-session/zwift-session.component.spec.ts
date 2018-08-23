import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZwiftSessionComponent } from './zwift-session.component';

describe('ZwiftSessionComponent', () => {
  let component: ZwiftSessionComponent;
  let fixture: ComponentFixture<ZwiftSessionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZwiftSessionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZwiftSessionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
