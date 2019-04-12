import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PcsBatchSchedulingComponent } from './pcs-batch-scheduling.component';

describe('PcsBatchSchedulingComponent', () => {
  let component: PcsBatchSchedulingComponent;
  let fixture: ComponentFixture<PcsBatchSchedulingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PcsBatchSchedulingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PcsBatchSchedulingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
