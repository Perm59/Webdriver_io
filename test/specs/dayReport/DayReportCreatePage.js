import Page from '../Page';

class DayReportCreatePage extends Page{


  get diaryLink () {
    return browser.$('//a[@qa="diary-link"]');
  }

  get h1 () {
    return browser.$('//h1');
  }

  get submitBtn () {
    return browser.$('//a[@qa="create-day-report-button"]');
  }

  get morale () {
    return browser.$('//select[@name="morale"]');
  }

  get hours () {
    return browser.$('//input[@name="hours"]');
  }

  get dairyDescription (){
    return browser.$('//textarea[@name ="description"]');
  }

  get boxes () {
    for (let i = 0; i < 12; i++) {
      return browser.$(`//#input-${i}`);
    }
  }



  get email () {
    return browser.$('//input[@name="email"]');
  }

  get password () {
    return browser.$('//input[@name="password"]');
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

export default new DayReportCreatePage();