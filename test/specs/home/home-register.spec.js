import { expect } from 'chai';
import HomePage from './HomePage';
import RegisterPage from '../register/RegisterPage';

describe('HOME (to REGISTER)', () => {
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

  it('should click Register link', () => {
    HomePage.clickRegister.click();
    browser.pause(2000);
  });

  it('should check h1 text', () => {
    expect(RegisterPage.h1.getText()).eq('User Register');
  });
});

