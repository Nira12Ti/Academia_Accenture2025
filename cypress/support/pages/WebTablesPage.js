class WebTablesPage {
  constructor() {
    this.elements = {
      addButton: 'button:contains("Add")',
      searchBox: '#searchBox',
      table: '.rt-table',
      tableRows: '.rt-tr-group',
      tableBody: '.rt-tbody',
      registrationForm: '.modal',
      firstName: 'input[placeholder="First Name"]',
      lastName: 'input[placeholder="Last Name"]',
      email: 'input[placeholder="name@example.com"]',
      age: 'input[placeholder="Age"]',
      salary: 'input[placeholder="Salary"]',
      department: 'input[placeholder="Department"]',
      submitButton: 'button[type="submit"]',
      closeButton: '.close',
      editButtons: '[title="Edit"]',
      deleteButtons: '[title="Delete"]',
      noDataMessage: '.rt-noData'
    };
  }

  visit() {
    cy.visit('/webtables');
    cy.url().should('include', '/webtables');
  }

  clickAddButton() {
    cy.get(this.elements.addButton).should('be.visible').click();
    cy.wait(1000);
  }

  fillRegistrationForm(userData) {
    cy.get(this.elements.firstName).clear().type(userData.firstName);
    cy.get(this.elements.lastName).clear().type(userData.lastName);
    cy.get(this.elements.email).clear().type(userData.email);
    cy.get(this.elements.age).clear().type(userData.age.toString());
    cy.get(this.elements.salary).clear().type(userData.salary.toString());
    cy.get(this.elements.department).clear().type(userData.department);
  }

  submitForm() {
    cy.get(this.elements.submitButton).click();
  }

  searchUser(searchTerm) {
    cy.get('input[placeholder="Type to search"]').clear().type(searchTerm);
  }

  verifyUserInTable(userData) {
    cy.get(this.elements.tableBody).should('contain', userData.firstName);
    cy.get(this.elements.tableBody).should('contain', userData.lastName);
    cy.get(this.elements.tableBody).should('contain', userData.email);
  }

  verifyFormValidation() {
    cy.get(this.elements.firstName).then(($input) => {
      expect($input[0].checkValidity()).to.be.false;
    });
  }

  getTableRowsCount() {
    return cy.get(this.elements.tableRows).its('length')
  }

  deleteUser(userName) {
    cy.get('.rt-tbody .rt-tr-group').contains(userName).parents('.rt-tr-group').within(() => {
      cy.get('[title="Delete"]').click()
    });
    cy.wait(10000)
  }

  deleteFirstUser() {
    cy.get(this.elements.deleteButtons).first().click()
  }

  editFirstUser() {
    cy.get(this.elements.editButtons).first().click()
  }

  verifyUserNotInTable(userName) {
    cy.get('.rt-tbody').should('not.contain', userName)
  }
}

export default WebTablesPage;