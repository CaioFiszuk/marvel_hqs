describe('Verify the total price', () => {
  beforeEach(() => {
    const item = [
      {
        id: 1,
        title: 'Teste HQ',
        price: 9.90,
        thumbnail: 'url',
        extension: 'jpg',
        quantity: 1,
        unitPrice: 9.90
      },
      {
        id: 2,
        title: 'Outro HQ',
        price: 2.99,
        thumbnail: 'url2',
        extension: 'jpg',
        quantity: 1,
        unitPrice: 2.99
      }
    ];
    localStorage.setItem('cart', JSON.stringify(item));
  });

  it('Verify if exists some change at the total price', () => {
    cy.visit('http://localhost:5173/cart');
    
    cy.get('[data-cy=total-price]').invoke('text').then((before) => {
      cy.get('[data-cy=remove-item-btn]').first().click();

      cy.get('[data-cy=total-price]').should(($el) => {
        const after = $el.text();
        expect(after).not.to.equal(before);
      });
    });
  });
});