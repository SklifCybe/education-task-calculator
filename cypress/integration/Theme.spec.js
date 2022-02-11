describe('Themes', () => {
  it('change themes', () => {
    cy.visit('/settings');
    
    cy.get('select').select('colored');
    cy.wait(500);
    cy.get('select').select('light');
    cy.wait(500);
    cy.get('select').select('dark');
  })
})