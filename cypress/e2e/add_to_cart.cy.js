describe('Add items to shopping cart', () => {
  it('Must add a HQ to the cart', () => {
    cy.visit('http://localhost:5173');
    cy.contains('Adicionar ao carrinho').first().click();
    cy.visit('http://localhost:5173/cart');
    cy.get('.cart__items').should('exist');
    cy.get('.cart__item').first().within(() => {
      cy.contains('x1');
    });
  });
});