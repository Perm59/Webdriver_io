import Page from '../Page';

class RegisterPage extends Page{

  get tabTitle () {
    return browser.getTitle();
  }

  get h1 () {
    return browser.$('//h1');
  }

  get description () {
    return browser.$('//p');
  }

  get firstName () {
    return browser.$('//input[@name="firstName"]');
  }

  get lastName () {
    return browser.$('//input[@name="lastName"]');
  }

  get phoneNumber () {
    return browser.$('//input[@name="phone"]');
  }

  get email () {
    return browser.$('//input[@name="email"]');
  }

  get password () {
    return browser.$('//input[@name="password"]');
  }

  get about () {
    return browser.$('//textarea[@name="about"]');
  }

  get goals () {
    return browser.$('//textarea[@name="goals"]');
  }

  get englishLevel () {
    return browser.$('form select[name="englishLevel"]');
  }

  get submitBtn () {
    return browser.$('//button[@type="submit"]');
  }

  open(){
    super.open('https://stage.pasv.us/user/register');
  }
}

export default new RegisterPage();