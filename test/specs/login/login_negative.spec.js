import { expect } from 'chai';
import LoginPage from './LoginPage';
import ProfilePage from '../profile/ProfilePage';

describe('LOGIN (negative)', () => {
  it('should open login page', () => {
    LoginPage.open();
    browser.pause(2000);
  });

  it('should have correct title', () => {
    const actual = LoginPage.h1.getText();
    const expected = 'User Login';
    expect(actual).eq(expected);
  });

  it('should fill out email field', () => {
    LoginPage.email.setValue('ooopartner00@mail.ru');
  });

  it('should fill out password field', () => {
    LoginPage.password.setValue('12345+');
  });

  it('should submit form', () => {
    LoginPage.submitBtn.click();
    browser.pause(2000);
  });

  it('should check h1 text', () => {
    expect(LoginPage.h1.getText()).eq('User Login');
  });
});

