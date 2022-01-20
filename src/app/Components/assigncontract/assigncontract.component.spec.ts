import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssigncontractComponent } from './assigncontract.component';

describe('AssigncontractComponent', () => {
  let component: AssigncontractComponent;
  let fixture: ComponentFixture<AssigncontractComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssigncontractComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssigncontractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
