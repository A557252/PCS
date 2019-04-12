import { TestBed } from '@angular/core/testing';
import { TestModule } from 'src/test-helpers/test.module';
import { AuthenticationServiceMock } from 'src/test-helpers/AuthenticationServiceMock';

describe('AuthenticationService', () => {

  let service:AuthenticationServiceMock;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[TestModule],
      providers:[AuthenticationServiceMock]
  });

  service=TestBed.get(AuthenticationServiceMock);

}); 

it('login true', () => {
  let return_data=service.signIn({'username':'pravesh','password':'pravesh','environment':'Acceptance'});
  expect(return_data).toBeTruthy();
});

it('wrong credential login false', () => {
  let return_data=service.signIn({'username':'ramesh','password':'pravesh','environment':'Acceptance'});
  expect(return_data).toBeFalsy();
});

it('empty value login false', () => {
  let return_data=service.signIn({'username':' ','password':' ','environment':' '});
  expect(return_data).toBeFalsy();
});

it('only user name password login false', () => {
  let return_data=service.signIn({'username':'pravesh','password':'pravesh','environment':' '});
  expect(return_data).toBeFalsy();
});

it('no data passed login false', () => {
  let return_data=service.signIn({});
  expect(return_data).toBeFalsy();
});

});
