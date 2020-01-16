// https://stage.pasv.us/user/register

//const assert = require('assert')
const { expect } = require('chai');
const email = Math.random().toFixed(4)+'kakak@gmail.com';
const firstName = 'John';
const lastName = 'Smith';
const password = 'password';
describe('Register page', () => {
    it('should have the right title', () => {
        browser.url('https://stage.pasv.us/user/register');
        const actualTitle = browser.getTitle();
        const expectedTitle = 'Progress Monitor';
        expect(actualTitle).equal(expectedTitle);
    });
    it('should have a correct title', () => {
        const actualH1text = $('h1').getText();
        const expectedH1Text = 'User Register';
        expect(actualH1text).equal(expectedH1Text);
    });
    it('should have a correct description', () => {
        const actual = $('p').getText();
        const expected = 'Profiles with fictitious or dummy data will be deleted.';
        expect(actual).equal(expected);
    });
    it('should have a correct submit button text', () => {
        const actual = $('form button').getText();
        const expected = 'Submit';
        expect(actual).equal(expected);
    });
    it('should fill in first name field', () => {
        const element = $('form input[name="firstName"]');
        element.setValue(firstName);
    });
    it('should fill in last name field', () => {
        const element = $('form input[name="lastName"]');
        element.setValue(lastName);
    });
    it('should fill in phone num field', () => {
        const element = $('form input[name="phone"]');
        element.setValue('14259195668');
    });
    it('should fill in email field', () => {
        const element = $('form input[name="email"]');
        element.setValue(email);
    });
    it('should fill in password field', () => {
        const element = $('form input[name="password"]');
        element.setValue(password);
    });
    it('should fill in about field', () => {
        const element = $('form textarea[name="about"]');
        element.setValue('hdfkdfjldlkfj djdfsdfjdfkj kdfjdkfdj');
    });
    it('should fill in goals field', () => {
        const element = $('form textarea[name="goals"]');
        element.setValue('eat sleep code');
    });
    it('should choose English level dropdown', () => {
        const element = $('form select[name="englishLevel"]');
        element.selectByVisibleText('Native');
    });
    it('should choose click button', () => {
        const element = $('form button[type="submit"]');
        element.click();
        browser.pause(3000);
    });
});

describe('Login page', () => {
    it('should have the right title', () => {
        browser.url('https://stage.pasv.us/user/login');
        const actualTitle = browser.getTitle();
        const expectedTitle = 'Progress Monitor';
        expect(actualTitle).equal(expectedTitle);
    });
    it('should have a correct title', () => {
        const actualH1text = $('h1').getText();
        const expectedH1Text = 'User Login';
        expect(actualH1text).equal(expectedH1Text);
    });
    it('should fill in email field', () => {
        const element = $('form input[name="email"]');
        element.setValue(email);
    });
    it('should fill in password field', () => {
        const element = $('form input[name="password"]');
        element.setValue(password);
    });
    it('should choose click button', () => {
        const element = $('form button[type="submit"]');
        element.click();
        browser.pause(2000);
    });
});

describe('You are a new user page', () => {
    it('should have a correct title', () => {
        const actualH1text = $('h1').getText();
        const expectedH1Text = 'You are a new user';
        expect(actualH1text).equal(expectedH1Text);
        browser.pause(1000);
    });
});