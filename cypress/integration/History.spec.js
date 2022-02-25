describe('History', () => {
  it('Push value to history', () => {
    cy.visit('/');

    const example = '1+1=2';
    for (let i = 0; i < 5; i++) {
      cy.get('button').contains('1').click();
      cy.get('button').contains('+').click();
      cy.get('button').contains('1').click();
      cy.get('button').contains('=').click();
      cy.get('button').contains('CE').click();
    }

    cy.get('#history-list > li').each(($btn) => {
      cy.wrap($btn).should('have.text', example);
    });
  });

  it('Toggle visible the history', () => {
    cy.get('#history').should('be.visible');

    cy.get('button').contains('×').click();

    cy.get('#history').should('not.be.visible');

    cy.get('button').contains('×').click();

    cy.get('#history').should('be.visible');
  });

  it('Delete all history', () => {
    cy.get('#history > li').should('not.be.empty');

    cy.visit('/settings');

    cy.get('button').contains('Clear All History').click();

    cy.visit('/');

    cy.get('#history-list').should('be.empty');
  })
});
