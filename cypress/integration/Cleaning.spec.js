describe('Remove numbers', () => {
  it('Should remove one symbol', () => {
    cy.visit('/');
    cy.get('button').contains('1').click();
    cy.get('button').contains('2').click();
    cy.get('button').contains('3').click();

    cy.get('button').contains('C').click();

    cy.get('input').should('have.value', 12);
  })

  it('Should remove all symbols', () => {
    cy.get('section > button').each(($btn) => {
      if ($btn[0].textContent !== 'CE' && $btn[0].textContent !== '=') {
        cy.wrap($btn).click();
      }
    })

    cy.get('button').contains('CE').click();
    cy.get('input').should('have.value', '');
  })
})