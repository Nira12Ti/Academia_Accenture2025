Cypress.Commands.add('visitWebTables', () => {
  cy.visit('/webtables');
});

Cypress.Commands.add('fillForm', (userData) => {
  cy.get('#firstName').type(userData.firstName);
  cy.get('#lastName').type(userData.lastName);
  cy.get('#userEmail').type(userData.email);
  cy.get('#age').type(userData.age.toString());
  cy.get('#salary').type(userData.salary.toString());
  cy.get('#department').type(userData.department);
});

Cypress.Commands.add('submitForm', () => {
  cy.get('#submit').click();
});

Cypress.Commands.add('openAddForm', () => {
  cy.get('#addNewRecordButton').click();
});