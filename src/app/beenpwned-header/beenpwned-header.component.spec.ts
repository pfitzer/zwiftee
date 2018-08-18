import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeenpwnedHeaderComponent } from './beenpwned-header.component';

describe('BeenpwnedHeaderComponent', () => {
  let component: BeenpwnedHeaderComponent;
  let fixture: ComponentFixture<BeenpwnedHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeenpwnedHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeenpwnedHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
