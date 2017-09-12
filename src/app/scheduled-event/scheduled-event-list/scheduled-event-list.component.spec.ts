import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduledEventListComponent } from './scheduled-event-list.component';

describe('ScheduledEventListComponent', () => {
  let component: ScheduledEventListComponent;
  let fixture: ComponentFixture<ScheduledEventListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduledEventListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduledEventListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
