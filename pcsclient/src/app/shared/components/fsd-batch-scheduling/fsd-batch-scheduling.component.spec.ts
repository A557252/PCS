import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FsdBatchSchedulingComponent } from './fsd-batch-scheduling.component';

describe('FsdBatchSchedulingComponent', () => {
  let component: FsdBatchSchedulingComponent;
  let fixture: ComponentFixture<FsdBatchSchedulingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FsdBatchSchedulingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FsdBatchSchedulingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
