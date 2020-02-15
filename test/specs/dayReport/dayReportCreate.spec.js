import { expect } from 'chai';
import LoginPage from '../login/LoginPage';
import ProfilePage from '../profile/ProfilePage';
import DayReportCreatePage from './DayReportCreatePage';
import HomePage from '../home/HomePage';

describe('', () => {
  before(()=> {
    LoginPage.login();
  });

  it('should go to profile Page', () => {
    browser.pause(2000);
    expect(ProfilePage.h1.getText()).eq('Arthur Aminov');
  });

  it('should click Diary link', () => {
    DayReportCreatePage.diaryLink.click();
    browser.pause(1000);
  });

  it('should have a correct page title', () => {
    const actual = DayReportCreatePage.h1.getText();
    const expected = 'Daily reports';
    expect(actual).equal(expected);

  });

  it('should click Create day report button', () => {
    DayReportCreatePage.submitBtn.click();
    browser.pause(1000);
  });

  it('should have a correct title of Create Day Report page', () => {
    const actual = DayReportCreatePage.h1.getText();
    const expected = 'Create day report';
    expect(actual).equal(expected);
  });

  it('should choose Morale condition', () => {
    DayReportCreatePage.morale.selectByVisibleText('9');
  });

  it('should fill in Study/Practice hours field', () => {
    DayReportCreatePage.hours.setValue('8');
  });

  it('should fill in How was your day field', () => {
    DayReportCreatePage.dairyDescription.setValue('Day was perfect and full of fun!');
    browser.pause(1000);
  });

  it('should check boxes 0 to 11', () => {
    DayReportCreatePage.boxes.click();
    browser.pause(1000);
  });


  //
  // it('should click Save button', () => {
  //   const element = $(pageRegisterSelectors.submitButton);
  //   element.click();
  //   browser.pause(1000);
  // });
  //
  // it('should have a correct title of Diary page', () => {
  //   const actual = $('h1').getText();
  //   const expected = pageDiary.h1;
  //   expect(actual).equal(expected);
  //   browser.pause(2000);
  // });
});