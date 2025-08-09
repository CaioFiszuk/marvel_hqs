describe('Remove items from shopping cart', () => {
    beforeEach(() => {
    const item = [{
      id: 1,
      title: 'Teste HQ',
      price: 9.90,
      thumbnail: 'url',
      extension: 'jpg',
      quantity: 1,
      unitPrice: 9.90
    }];
    localStorage.setItem('cart', JSON.stringify(item));
  });
  it('Must remove an item', () => {
    cy.visit('http://localhost:5173/cart');
    cy.get('[data-cy=remove-item-btn]').first().click();
    cy.get('.cart__items').should('not.exist');
  });
});