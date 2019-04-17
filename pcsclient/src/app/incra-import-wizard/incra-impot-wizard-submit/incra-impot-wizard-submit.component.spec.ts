import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncraImpotWizardSubmitComponent } from './incra-impot-wizard-submit.component';

describe('IncraImpotWizardSubmitComponent', () => {
  let component: IncraImpotWizardSubmitComponent;
  let fixture: ComponentFixture<IncraImpotWizardSubmitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncraImpotWizardSubmitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncraImpotWizardSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
