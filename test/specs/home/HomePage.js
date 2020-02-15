import Page from '../Page';

class HomePage extends Page{

  get tabTitle () {
    return browser.getTitle();
  }

  get h1 () {
    return browser.$('//h1');
  }

  get clickRegister () {
    return browser.$('//a[@qa="register-link"]');
  }

  get clickLogin () {
    return browser.$('//a[@qa="login-link"]');
  }

  open(){
    super.open('https://stage.pasv.us/');
  }
}

export default new HomePage();