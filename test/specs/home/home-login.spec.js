import { expect } from 'chai';
import HomePage from './HomePage';
import LoginPage from '../login/LoginPage';

describe('HOME (to LOGIN)', () => {
  it('should open home page', () => {
    HomePage.open();
  });

  it('should have the right tab title', () => {
    const actual = HomePage.tabTitle;
    const expected = 'Progress Monitor';
    expect(actual).eq(expected);
  });

  it('should have a correct page title', () => {
    const actual = HomePage.h1.getText();
    const expected = 'System that considers\nindividual features of\neach student';
    expect(actual).eq(expected);
  });

  it('should click Login link', () => {
    HomePage.clickLogin.click();
    browser.pause(2000);
  });

  it('should check h1 text', () => {
    expect(LoginPage.h1.getText()).eq('User Login');
  });
});

