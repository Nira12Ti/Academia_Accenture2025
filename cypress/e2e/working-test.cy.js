describe('Teste funcional WebTables', () => {
  it('deve cadastrar um usuário com sucesso', () => {
    cy.visit('/webtables');
    cy.wait(20000);

    cy.get('button').contains('Add').click();
    cy.wait(1000);

    cy.get('input[placeholder="First Name"]').type('João');
    cy.get('input[placeholder="Last Name"]').type('Silva');
    cy.get('input[placeholder="name@example.com"]').type('joao.silva@test.com');
    cy.get('input[placeholder="Age"]').type('30');
    cy.get('input[placeholder="Salary"]').type('5000');
    cy.get('input[placeholder="Department"]').type('QA');

    cy.get('button[type="submit"]').click();
    cy.wait(20000);

    cy.get('.rt-tbody').should('contain', 'João');
    cy.get('.rt-tbody').should('contain', 'Silva');
    cy.get('.rt-tbody').should('contain', 'joao.silva@test.com');
  });
});