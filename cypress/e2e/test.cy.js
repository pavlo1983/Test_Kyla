it ('Verify that all elements of the counter are visible', () => {
  Cypress.on('uncaught:exception', (err, runnable) => { return false; })
  cy.visit('/');
  cy.contains('CounterApp').should('be.visible');
  cy.contains('10').should('be.visible');
  cy.contains('+1').should('be.visible');
  cy.contains('Reset').should('be.visible');
  cy.contains('-1').should('be.visible');
});

it ('User can increment the counter', () => {
    Cypress.on('uncaught:exception', (err, runnable) => { return false; })
    cy.visit('/');
    cy.contains('CounterApp').should('be.visible');
    cy.get('#app > button:nth-child(3)').click();
    cy.contains('11').should('be.visible');
});

it ('User can decrement the counter', () => {
  Cypress.on('uncaught:exception', (err, runnable) => { return false; })
  cy.visit('/');
  cy.contains('CounterApp').should('be.visible');
  cy.get('#app > button:nth-child(5)').click();
  cy.contains('9').should('be.visible');
});

it ('User can reset the counter', () => {
  Cypress.on('uncaught:exception', (err, runnable) => { return false; })
  cy.visit('/');
  cy.contains('CounterApp').should('be.visible');
  cy.get('#app > button:nth-child(3)').click();
  cy.get('#app > button:nth-child(3)').click();
  cy.get('#app > button:nth-child(3)').click();
  cy.get('#app > button:nth-child(5)').click();
  cy.contains('12').should('be.visible');
  cy.get('#app > button:nth-child(4)').click();
  cy.contains('10').should('be.visible');
});