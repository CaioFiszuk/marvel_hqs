describe('Home page flow', () => {
  it('Deve abrir a página inicial e listar HQs', () => {
    cy.visit('http://localhost:5173/');
    cy.get('.main__list', { timeout: 20000 }).should('exist');
    cy.get('.main__item').should('have.length.at.least', 1);
  });

  it('Paginate buttons may work', () => {
    cy.visit('http://localhost:5173/');
    cy.get('.main__item', { timeout: 20000 }).should('have.length.at.least', 1);
    cy.get('.main__paginate-info').should('not.contain', 'Página 0');
    
    cy.get('.main__paginate-buttons', { timeout: 10000 }).contains('Próxima').click();

    cy.get('.main__paginate-info', { timeout: 10000 }).should(($span) => {
      const text = $span.text();
      expect(text).to.match(/Página 2 de \d+/);
    });
  });
});

