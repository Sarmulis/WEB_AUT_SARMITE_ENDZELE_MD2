Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});

it('should highlight even numbers and leave odd numbers unhighlighted', () => {
  cy.visit('https://katalon-demo-cura.herokuapp.com/');

  cy.get('#btn-make-appointment').click();
  cy.get('input[id=txt-username]').type('John Doe');
  cy.get('input[id=txt-password]').type('ThisIsNotAPassword');
  cy.get('#btn-login').click();

  cy.get('select[id=combo_facility]').select('Seoul CURA Healthcare Center');
  cy.get('input[id=chk_hospotal_readmission]').check();
  cy.get('input[id=radio_program_medicaid]').check();
  cy.get('#txt_visit_date').click();
  cy.get('.datepicker-days td.day:not(.old):not(.new)').contains('30').click();
  cy.get('textarea[id=txt_comment').type('CURA Healthcare Service');
  cy.get('#btn-book-appointment').click();
  
  cy.get('#facility').should('contain.text', 'Seoul CURA Healthcare Center');
  cy.get('#hospital_readmission').should('contain.text', 'Yes');
  cy.get('#program').should('contain.text', 'Medicaid');
  cy.get('#visit_date').should('contain.text', '30/05/2025');
  cy.get('#comment').should('contain.text', 'CURA Healthcare Service');
})

