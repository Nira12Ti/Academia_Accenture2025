import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import WebTablesPage from '../pages/WebTablesPage';

const webTablesPage = new WebTablesPage();
let testUserData;

Given('que eu estou na página de WebTables', () => {
  webTablesPage.visit();
});

Given('que existe um usuário cadastrado na tabela', () => {
  cy.fixture('testData').then((data) => {
    testUserData = data.validUser;
    webTablesPage.clickAddButton();
    webTablesPage.fillRegistrationForm(testUserData);
    webTablesPage.submitForm();
  });
});

When('eu clico no botão "Add" para adicionar novo usuário', () => {
  webTablesPage.clickAddButton();
});

When('eu preencho o formulário com dados válidos:', (dataTable) => {
  const userData = dataTable.hashes()[0];
  testUserData = {
    firstName: userData.firstName,
    lastName: userData.lastName,
    email: userData.email,
    age: parseInt(userData.age),
    salary: parseInt(userData.salary),
    department: userData.department
  };
  webTablesPage.fillRegistrationForm(testUserData);
});

When('eu clico no botão "Submit"', () => {
  webTablesPage.submitForm();
});

When('eu clico no botão "Submit" sem preencher os campos', () => {
  webTablesPage.submitForm();
});

When('eu pesquiso pelo nome do usuário', () => {
  webTablesPage.searchUser(testUserData.firstName);
});

When('eu cadastro o primeiro usuário com dados:', (dataTable) => {
  const userData = dataTable.hashes()[0];
  const firstUser = {
    firstName: userData.firstName,
    lastName: userData.lastName,
    email: userData.email,
    age: parseInt(userData.age),
    salary: parseInt(userData.salary),
    department: userData.department
  };
  
  webTablesPage.clickAddButton();
  webTablesPage.fillRegistrationForm(firstUser);
  webTablesPage.submitForm();
});

When('eu cadastro o segundo usuário com dados:', (dataTable) => {
  const userData = dataTable.hashes()[0];
  const secondUser = {
    firstName: userData.firstName,
    lastName: userData.lastName,
    email: userData.email,
    age: parseInt(userData.age),
    salary: parseInt(userData.salary),
    department: userData.department
  };
  
  webTablesPage.clickAddButton();
  webTablesPage.fillRegistrationForm(secondUser);
  webTablesPage.submitForm();
});

Then('o usuário deve ser adicionado à tabela', () => {
  cy.get('.rt-tr-group').should('contain', testUserData.firstName);
});

Then('eu devo ver os dados do usuário na tabela', () => {
  webTablesPage.verifyUserInTable(testUserData);
});

Then('devo ver mensagens de validação para campos obrigatórios', () => {
  webTablesPage.verifyFormValidation();
});

Then('apenas o usuário pesquisado deve aparecer na tabela', () => {
  cy.get('.rt-tbody').should('contain', testUserData.firstName);
  cy.get('input[placeholder="Type to search"]').should('have.value', testUserData.firstName);
  cy.get('.rt-tbody .rt-tr-group').should('have.length.greaterThan', 0);
});

Then('ambos os usuários devem aparecer na tabela', () => {
  cy.get('.rt-tr-group').should('contain', 'Maria');
  cy.get('.rt-tr-group').should('contain', 'Pedro');
});

When('eu clico no botão "Delete" do usuário {string}', (userName) => {
  cy.get('.rt-tbody .rt-tr-group').contains(userName).parents('.rt-tr-group').within(() => {
    cy.get('[title="Delete"]').click();
  });
  cy.wait(10000);
});

Then('o usuário {string} deve ser removido da tabela', (userName) => {
  cy.get('.rt-tbody').should('not.contain', userName);
});