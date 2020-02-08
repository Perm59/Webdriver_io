const HOST = 'https://stage.pasv.us';
const URL_LOGIN = `${HOST}/user/login`;

const pageLogin = {
  title: 'Progress Monitor',
  h1: 'User Login',
  buttonText: 'Submit',
  email: 'ooopartner00@mail.ru',
  password: '123456',
};

function loginAsAdmin (){
  browser.url(URL_LOGIN);
  browser.$('//input[@name="email"]').setValue(pageLogin.email);
  browser.$('//input[@name="password"]').setValue(pageLogin.password);
  browser.$('//button[@type="submit"]').click();
  browser.pause(2000);
}

function logout (){
  browser.$('//a[@class="dropdown-toggle nav-link"]').click();
  browser.$('//button[contains(text(),"Logout")]').click();
  browser.pause(1000);
}

module.exports = {loginAsAdmin, logout};





// $('//a[@class=\'dropdown-toggle nav-link\']').click();
// $('//button[contains(text(),\'Logout\')]').click();
// it('should logout', ()=> {
//     $('//a[@class="dropdown-toggle nav-link"]').click();
//     $('//button[contains(text(),"Logout")]').click();
//     browser.pause(3000)$('//a[@class=\'dropdown-toggle nav-link\']').click();
//     $('//button[contains(text(),\'Logout\')]').click();
//     it('should logout', ()=> {
//         $('//a[@class="dropdown-toggle nav-link"]').click();
//         $('//button[contains(text(),"Logout")]').click();
//         browser.pause(3000);
//     });

