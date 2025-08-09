describe("Verify HQ's details", () => {
  it('Verify if the details are avaliable', () => {
    cy.visit('http://localhost:5173/');
    cy.get('.main__item-link', { timeout: 10000 }).first().click();
    cy.visit('http://localhost:5173/info/1689');
    cy.get('.info-page__description').should('exist');
    cy.get('.info-page__price').should('exist');
  });
});