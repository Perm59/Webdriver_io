const { expect } = require('chai');
const { URL_LOGIN } = require('./register_data');

describe('CREATE DAY REPORT', () => {
  it('Login as admin', () => {
    browser.url(URL_LOGIN);
    $('form input[name="email"]').setValue('ooopartner00@mail.ru');
    $('form input[name="password"]').setValue('123456');
    $('form button[type="submit"]').click();
    browser.pause(2000);
  });

  it('should click Diary button', () => {
    const element = $(pageRegisterSelectors.submitButton);
    element.click();
    browser.pause(3000);
  });
});

// describe('Register page', () => {
//     it('should have the right title', () => {
//         browser.url(URL_REGISTER);
//         const actualTitle = browser.getTitle();
//         const expectedTitle = pageRegister.title;
//         expect(actualTitle).equal(expectedTitle);
//     });
//
//     it('should have a correct title', () => {
//         const actualH1text = $(pageRegisterSelectors.h1).getText();
//         const expectedH1Text = pageRegister.h1;
//         expect(actualH1text).equal(expectedH1Text);
//     });
//
//     it('should have a correct description', () => {
//         const actual = $(pageRegisterSelectors.description).getText();
//         const expected = pageRegister.description;
//         expect(actual).equal(expected);
//     });
//
//     it('should have a correct submit button text', () => {
//         const actual = $(pageRegisterSelectors.submitButton).getText();
//         const expected = pageRegister.buttonText;
//         expect(actual).equal(expected);
//     });
//
//     it('should fill in first name field', () => {
//         const element = $(pageRegisterSelectors.firstNameInput);
//         element.setValue(user.firstName);
//     });
//
//     it('should fill in last name field', () => {
//         const element = $(pageRegisterSelectors.lastNameInput);
//         element.setValue(user.lastName);
//     });
//     it('should fill in phone num field', () => {
//         const element = $(pageRegisterSelectors.phoneInput);
//         element.setValue(user.phone);
//     });
//
//     it('should fill in email field', () => {
//         const element = $(pageRegisterSelectors.emailInput);
//         element.setValue(user.email);
//     });
//
//     it('should fill in password field', () => {
//         const element = $(pageRegisterSelectors.passwordInput);
//         element.setValue(user.password);
//     });
//
//     it('should fill in about field', () => {
//         const element = $(pageRegisterSelectors.aboutInput);
//         element.setValue(user.about);
//     });
//
//     it('should fill in goals field', () => {
//         const element = $(pageRegisterSelectors.goalsInput);
//         element.setValue(user.goals);
//     });
//
//     it('should choose English level dropdown', () => {
//         const element = $(pageRegisterSelectors.englishLevelInput);
//         element.selectByVisibleText(user.englishLevel);
//     });
//
//     it('should click Submit button', () => {
//         const element = $(pageRegisterSelectors.submitButton);
//         element.click();
//         browser.pause(3000);
//     });
// });
//
//
//
// describe('Confirmation register page', () => {
//     it('should have a correct title', () => {
//         const actualH1text = $('h1').getText();
//         const expectedH1Text = pageConfirmation.h1;
//         expect(actualH1text).equal(expectedH1Text);
//         browser.pause(1000);
//     });
// });