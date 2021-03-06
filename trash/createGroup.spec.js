const { expect } = require('chai');

const { pageLogin, pageGroups, pageRegisterSelectors, pageCreateNewGroup, pageAdmin } = require('./registerData');
const { URL_LOGIN } = require('./urlData');

describe('CREATE GROUP', () => {
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
  });

  it('should have a correct title of Admin page', () => {
    const actual = $('h1').getText();
    const expected = pageAdmin.h1;
    expect(actual).equal(expected);
  });

  it('should click Groups link', () => {
    const element = $('[qa="groups-link"]');
    element.click();
    browser.pause(1000);
  });

  it('should have a correct title of Groups page', () => {
    const actual = $('h1').getText();
    const expected = pageGroups.h1;
    expect(actual).equal(expected);

  });

  it('should click Create new Group button', () => {
    const element = $(pageRegisterSelectors.createButton);
    element.click();
    browser.pause(1000);
  });

  it('should have a correct title of Create new Group page', () => {
    const actual = $('h1').getText();
    const expected = pageCreateNewGroup.h1;
    expect(actual).equal(expected);
  });

  it('should fill in Group name field', () => {
    const element = $(pageRegisterSelectors.groupNameInput);
    element.setValue(pageCreateNewGroup.groupName);
  });

  it('should choose Access type', () => {
    const element = $(pageRegisterSelectors.accessTypeInput);
    element.selectByVisibleText(pageCreateNewGroup.accessType);
  });

  it('should fill in Group description field', () => {
    const element = $(pageRegisterSelectors.groupDescriptionInput);
    element.setValue(pageCreateNewGroup.groupDescription);
  });

  it('should click Create button', () => {
    const element = $(pageRegisterSelectors.submitButton);
    element.click();
    browser.pause(3000);
  });

  it('should have a notification title', () => {
    const actual = $('h4').getText();
    const expected = pageCreateNewGroup.h4;
    expect(actual).equal(expected);
  });
});