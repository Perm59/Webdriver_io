import { expect } from 'chai';
import RegisterPage from './RegisterPage';
import LoginPage from '../login/LoginPage';

describe('REGISTER', () => {
  it('should open register page', () => {
    RegisterPage.open();
  });

  it('should have the right tab title', () => {
    const actual = RegisterPage.tabTitle;
    const expected = 'Progress Monitor';
    expect(actual).eq(expected);
  });

  it('should have a correct page title', () => {
    const actual = RegisterPage.h1.getText();
    const expected = 'User Register';
    expect(actual).eq(expected);
  });

  it('should have a correct description', () => {
    const actual = RegisterPage.description.getText();
    const expected = 'Profiles with fictitious or dummy data will be deleted.';
    expect(actual).equal(expected);
  });

  it('should fill in first name field', () => {
    RegisterPage.firstName.setValue('John');
  });

  it('should fill in last name field', () => {
    RegisterPage.lastName.setValue('Smith');
  });

  it('should fill in phone num field', () => {
    RegisterPage.phoneNumber.setValue('14259195668');
  });

  it('should fill in email field', () => {
    RegisterPage.email.setValue(Math.random().toFixed(4)+'kakak@gmail.com');
  });

  it('should fill in password field', () => {
    RegisterPage.password.setValue('password');
  });

  it('should fill in about field', () => {
    RegisterPage.about.setValue('I am so good and super smart');
  });

  it('should fill in goals field', () => {
    RegisterPage.goals.setValue('Be happy and healthy!');
  });

  it('should choose English level dropdown', () => {
    RegisterPage.englishLevel.selectByVisibleText('Native');
  });

  it('should have a correct submit button text', () => {
    const actual = RegisterPage.submitBtn.getText();
    const expected = 'Submit';
    expect(actual).equal(expected);
  });

  it('should click Submit button', () => {
    RegisterPage.submitBtn.click();
    browser.pause(3000);
  });

  it('should check h1 text', () => {
    expect(LoginPage.h1.getText()).eq('User Login');
    browser.pause(1000);
  });
});