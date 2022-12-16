import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewVisitLogComponent } from './view-visit-log.component';

describe('ViewVisitLogComponent', () => {
  let component: ViewVisitLogComponent;
  let fixture: ComponentFixture<ViewVisitLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewVisitLogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewVisitLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
