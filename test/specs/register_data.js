const HOST = 'https://stage.pasv.us';
const URL_REGISTER = `${HOST}/user/register`;
const URL_LOGIN = `${HOST}/user/login`;

const email = Math.random().toFixed(4)+'kakak@gmail.com';

const user = {
  firstName: 'John',
  lastName: 'Smith',
  password: 'password',
  phone: '14259195668',
  email,
  about: 'hdfkdfjldlkfj djdfsdfjdfkj kdfjdkfdj',
  goals: 'eat sleep code',
  englishLevel: 'Native',

};

const pageRegister = {
  title: 'Progress Monitor',
  h1: 'User Register',
  description: 'Profiles with fictitious or dummy data will be deleted.',
  buttonText: 'Submit'
};

const pageRegisterSelectors = {
  h1: 'h1',
  description: 'p',
  submitButton: 'form button[type="submit"]',
  firstNameInput: 'form input[name="firstName"]',
  lastNameInput: 'form input[name="lastName"]',
  phoneInput: 'form input[name="phone"]',
  emailInput: 'form input[name="email"]',
  passwordInput: 'form input[name="password"]',
  aboutInput: 'form textarea[name="about"]',
  goalsInput: 'form textarea[name="goals"]',
  englishLevelInput: 'form select[name="englishLevel"]',
  createGroupButton: 'a.btn.btn-secondary',
  groupNameInput: 'form input[name="name"]',
  accessTypeInput: 'form select[name="accessType"]',
  groupDescriptionInput: 'form input[name="description"]',

};

const pageLogin = {
  title: 'Progress Monitor',
  h1: 'User Login',
  buttonText: 'Submit',
};

const pageConfirmation = {
  h1: 'You are a new user',
};

const pageGroups = {
  h1: 'Groups',
  description: 'You may allow to see hidden groups. Ask admin to add you to group.',
};

const pageCreateNewGroup = {
  h1: 'Create new Group',
  groupName: 'Resume',
  accessType: 'Members',
  groupDescription: 'How to create a good resume.',
  h4: 'Group created',
};

module.exports = { URL_REGISTER, URL_LOGIN, user, pageRegister, pageRegisterSelectors, pageLogin, pageConfirmation, pageGroups, pageCreateNewGroup };