import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncraImportWizardSubmitComponent } from './incra-import-wizard-submit.component';

describe('IncraImportWizardSubmitComponent', () => {
  let component: IncraImportWizardSubmitComponent;
  let fixture: ComponentFixture<IncraImportWizardSubmitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncraImportWizardSubmitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncraImportWizardSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
