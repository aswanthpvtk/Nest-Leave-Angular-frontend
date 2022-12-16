import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecEmpLogComponent } from './sec-emp-log.component';

describe('SecEmpLogComponent', () => {
  let component: SecEmpLogComponent;
  let fixture: ComponentFixture<SecEmpLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecEmpLogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SecEmpLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
