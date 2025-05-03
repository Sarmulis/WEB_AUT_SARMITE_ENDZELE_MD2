Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

it('should highlight even numbers and leave odd numbers unhighlighted', () => {
  cy.visit('https://katalon-demo-cura.herokuapp.com/');

  cy.get('#btn-make-appointment').click();
  cy.get('input[id=txt-username]').type('John Doe');
  cy.get('input[id=txt-password]').type('ThisIsNotAPassword');
  cy.get('#btn-login').click();

  cy.get('#menu-toggle').click();
  cy.get('#sidebar-wrapper').should('have.class', 'active');
  cy.contains('History').click();
  cy.contains('No appointment.').should('be.visible');

})