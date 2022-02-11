describe('Basic arithmetic operation', () => {
  it('1 + 1 = 2', () => {
    cy.visit('/');

    cy.get('button').contains('1').click();
    cy.get('button').contains('+').click();
    cy.get('button').contains('1').click();
    cy.get('button').contains('=').click();

    cy.get('input').should('have.value', 2);
  });

  it('9 - 3 = 6', () => {
    cy.visit('/');

    cy.get('button').contains('9').click();
    cy.get('button').contains('-').click();
    cy.get('button').contains('3').click();
    cy.get('button').contains('=').click();

    cy.get('input').should('have.value', 6);
  });

  it('2 * 3 = 6', () => {
    cy.visit('/');

    cy.get('button').contains('2').click();
    cy.get('button').contains('*').click();
    cy.get('button').contains('3').click();
    cy.get('button').contains('=').click();

    cy.get('input').should('have.value', 6);
  });

  it('10 / 2 = 5', () => {
    cy.visit('/');

    cy.get('button').contains('1').click();
    cy.get('button').contains('0').click();
    cy.get('button').contains('/').click();
    cy.get('button').contains('2').click();
    cy.get('button').contains('=').click();

    cy.get('input').should('have.value', 5);
  });

  it('2 + 2 * 2 = 6', () => {
    cy.visit('/');

    cy.get('button').contains('2').click();
    cy.get('button').contains('+').click();
    cy.get('button').contains('2').click();
    cy.get('button').contains('*').click();
    cy.get('button').contains('2').click();
    cy.get('button').contains('=').click();

    cy.get('input').should('have.value', 6);
  });

  it('0.5 + 0.8 = 1.3', () => {
    cy.visit('/');

    cy.get('button').contains('0').click();
    cy.get('button').contains('.').click();
    cy.get('button').contains('5').click();
    cy.get('button').contains('+').click();
    cy.get('button').contains('0').click();
    cy.get('button').contains('.').click();
    cy.get('button').contains('8').click();
    cy.get('button').contains('=').click();

    cy.get('input').should('have.value', 1.3);
  });

  it('(2 + 2) * 2 = 8', () => {
    cy.visit('/');

    cy.get('button').contains('(').click();
    cy.get('button').contains('2').click();
    cy.get('button').contains('+').click();
    cy.get('button').contains('2').click();
    cy.get('button').contains(')').click();
    cy.get('button').contains('*').click();
    cy.get('button').contains('2').click();
    cy.get('button').contains('=').click();

    cy.get('input').should('have.value', 8);
  });

  it('10 % 6 = 4', () => {
    cy.visit('/');

    cy.get('button').contains('1').click();
    cy.get('button').contains('0').click();
    cy.get('button').contains('%').click();
    cy.get('button').contains('6').click();
    cy.get('button').contains('=').click();

    cy.get('input').should('have.value', 4);
  });
});
