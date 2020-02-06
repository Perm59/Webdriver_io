const { expect } = require('chai');

const { pageLogin, pageDiary, pageAdmin, pageRegisterSelectors, pageCreateDayReport  } = require('./registerData');
const { URL_LOGIN } = require('./urlData');

describe('CREATE DAY REPORT', () => {
  it('should have the right title of tab', () => {
    browser.url(URL_LOGIN);
    const actual = browser.getTitle();
    const expected = pageLogin.title;
    expect(actual).equal(expected);
  });

  it('should have a correct title of Login page', () => {
    const actual = $('h1').getText();
    const expected = pageLogin.h1;
    expect(actual).equal(expected);
  });

  it('Login as admin', () => {
    $('form input[name="email"]').setValue(pageLogin.email);
    $('form input[name="password"]').setValue(pageLogin.password);
    $('form button[type="submit"]').click();
    browser.pause(2000);

    browser.$('//input[@name="email"]').setValue(pageLogin.email);
  });

  it('should have a correct title of Admin page', () => {
    const actual = $('h1').getText();
    const expected = pageAdmin.h1;
    expect(actual).equal(expected);
  });

  it('should click Diary link', () => {
    const element = $('[qa="diary-link"]');
    element.click();
    browser.pause(1000);
  });

  it('should have a correct title of Diary page', () => {
    const actual = $('h1').getText();
    const expected = pageDiary.h1;
    expect(actual).equal(expected);

  });

  it('should click Create day report button', () => {
    const element = $(pageRegisterSelectors.createButton);
    element.click();
    browser.pause(1000);
  });

  it('should have a correct title of Create Day Report page', () => {
    const actual = $('h1').getText();
    const expected = pageCreateDayReport.h1;
    expect(actual).equal(expected);
  });

  it('should choose Morale condition', () => {
    const element = $(pageRegisterSelectors.moraleInput);
    element.selectByVisibleText(pageCreateDayReport.morale);
  });

  it('should fill in Study/Practice hours field', () => {
    const element = $(pageRegisterSelectors.studyHoursInput);
    element.setValue(pageCreateDayReport.hours);
  });

  it('should fill in How was your day field', () => {
    const element = $(pageRegisterSelectors.dairyDescriptionInput);
    element.setValue(pageCreateDayReport.description);
    browser.pause(1000);
  });

  it('should check boxes 0 to 11', () => {
    for (let i = 0; i < 12; i++) {
      $(`#input-${i}`).click();
    }
  });

  it('should click Save button', () => {
    const element = $(pageRegisterSelectors.submitButton);
    element.click();
    browser.pause(1000);
  });

  it('should have a correct title of Diary page', () => {
    const actual = $('h1').getText();
    const expected = pageDiary.h1;
    expect(actual).equal(expected);
    browser.pause(2000);
  });
});

