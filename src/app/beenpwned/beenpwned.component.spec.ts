import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeenpwnedComponent } from './beenpwned.component';

describe('BeenpwnedComponent', () => {
  let component: BeenpwnedComponent;
  let fixture: ComponentFixture<BeenpwnedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeenpwnedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeenpwnedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
