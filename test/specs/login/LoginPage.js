import Page from '../Page';

class LoginPage extends Page{
  //email = browser.$('//input[@name="email"]');

  get email () {
    return browser.$('//input[@name="email"]');
  }

  get password () {
    return browser.$('//input[@name="password"]');
  }

  get submitBtn () {
    return browser.$('//button[@type="submit"]');
  }

  get h1 () {
    return browser.$('//h1');
  }

  login(){
    this.open();
    this.email.setValue('ooopartner00@mail.ru');
    this.password.setValue('123456');
    this.submitBtn.click();
    browser.pause(2000);
  }

  open(){
    super.open('https://stage.pasv.us/user/login');
  }
}

export default new LoginPage();

// npm install --save-dev @babel/plugin-proposal-class-properties