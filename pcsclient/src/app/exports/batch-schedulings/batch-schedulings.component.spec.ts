import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BatchSchedulingsComponent } from './batch-schedulings.component';

describe('BatchSchedulingsComponent', () => {
  let component: BatchSchedulingsComponent;
  let fixture: ComponentFixture<BatchSchedulingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BatchSchedulingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BatchSchedulingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

});
