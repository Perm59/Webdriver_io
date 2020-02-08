import Page, { expect } from 'chai';
import LoginPage from './LoginPage'

describe('', () => {
    it('should open login page', () => {
       LoginPage.open();
    });

    it('should fill out email field', () => {
        LoginPage.email.setValue('ooopartner00@mail.ru');
    });
});

