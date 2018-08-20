import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZwiftComponent } from './zwift.component';

describe('ZwiftComponent', () => {
  let component: ZwiftComponent;
  let fixture: ComponentFixture<ZwiftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZwiftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZwiftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
