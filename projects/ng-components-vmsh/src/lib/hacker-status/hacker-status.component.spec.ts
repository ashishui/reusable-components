import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HackerStatusComponent } from './hacker-status.component';

describe('HackerStatusComponent', () => {
  let component: HackerStatusComponent;
  let fixture: ComponentFixture<HackerStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HackerStatusComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HackerStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
