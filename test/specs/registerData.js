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
  createButton: 'a.btn.btn-secondary',
  groupNameInput: 'form input[name="name"]',
  accessTypeInput: 'form select[name="accessType"]',
  groupDescriptionInput: 'form input[name="description"]',
  moraleInput: 'form select[name="morale"]',
  studyHoursInput: 'input.form-control',
  dairyDescriptionInput: 'textarea.form-control',
};

const pageLogin = {
  title: 'Progress Monitor',
  h1: 'User Login',
  buttonText: 'Submit',
  email: 'ooopartner00@mail.ru',
  password: '123456',
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

const pageDiary = {
  h1: 'Daily reports',
};

const pageAdmin = {
  h1: 'Arthur Aminov',
};

const pageCreateDayReport = {
  h1: 'Create day report',
  morale: '9',
  hours: '8',
  description: 'Day was perfect and full of fun!',
};

module.exports = { user, pageRegister, pageRegisterSelectors, pageLogin,
  pageConfirmation, pageGroups, pageCreateNewGroup, pageDiary, pageAdmin, pageCreateDayReport };