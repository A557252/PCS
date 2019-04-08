import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncraImportWizardComponent } from './incra-import-wizard.component';

describe('IncraImportWizardComponent', () => {
  let component: IncraImportWizardComponent;
  let fixture: ComponentFixture<IncraImportWizardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncraImportWizardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncraImportWizardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
