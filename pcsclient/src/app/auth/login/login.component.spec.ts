import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { TestModule } from 'src/test-helpers/test.module';
import { AuthenticationServiceMock } from 'src/test-helpers/AuthenticationServiceMock';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports:[TestModule],
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should login successfully', () => {
    component.submitLoginForm({'username':'pravesh','password':'pravesh','environment':'Acceptance'});
    expect(component.loggedInTrue).toBeTruthy();
  });
  
  it('wrong credential Should not login', () => {
    component.submitLoginForm({'username':'ramesh','password':'pravesh','environment':'Acceptance'});
    expect(component.loggedInFail).toBeTruthy();
  });
  
  it('empty value should not login', () => {
    component.submitLoginForm({'username':' ','password':' ','environment':' '});
    expect(component.loggedInFail).toBeTruthy();
  });
  
  it('only user name password should not login', () => {
    component.submitLoginForm({'username':'pravesh','password':'pravesh','environment':' '});
    expect(component.loggedInFail).toBeTruthy();
  });
});
