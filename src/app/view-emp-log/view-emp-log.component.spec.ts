import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewEmpLogComponent } from './view-emp-log.component';

describe('ViewEmpLogComponent', () => {
  let component: ViewEmpLogComponent;
  let fixture: ComponentFixture<ViewEmpLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewEmpLogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewEmpLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
