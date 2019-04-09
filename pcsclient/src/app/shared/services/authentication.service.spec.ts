import { TestBed, ComponentFixture } from '@angular/core/testing';
import { AuthenticationService } from './authentication.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import { TokenmanagemnetService } from './tokenmanagemnet.service';

describe('AuthenticationService', () => {
  let component: AuthenticationService;
  let fixture: ComponentFixture<AuthenticationService>;

  beforeEach(() => {
    TestBed.configureTestingModule({
    imports:[HttpClientTestingModule],
    providers:[AuthenticationService]
  });

  fixture=TestBed.createComponent(AuthenticationService);
}); 

it('login true', () => {
  let return_data=component.signIn({'username':'pravesh','password':'pravesh','environment':'Acceptance'});
  expect(return_data).toBeTruthy();
});

it('wrong credential login false', () => {
  let return_data=component.signIn({'username':'ramesh','password':'pravesh','environment':'Acceptance'});
  expect(return_data).toBeFalsy();
});

it('empty value login false', () => {
  let return_data=component.signIn({'username':' ','password':' ','environment':' '});
  expect(return_data).toBeFalsy();
});

it('only user name password login false', () => {
  let return_data=component.signIn({'username':'pravesh','password':'pravesh','environment':' '});
  expect(return_data).toBeFalsy();
});

it('no data passed login false', () => {
  let return_data=component.signIn({});
  expect(return_data).toBeFalsy();
});

});
