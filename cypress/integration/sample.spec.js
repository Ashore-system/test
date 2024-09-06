// cypress/integration/sample.spec.js
describe('Sample Test', () => {
  it('Visits the Test Page', () => {
    cy.visit('http://localhost:8080');  // Adjust if needed
    cy.contains('Hello World');
  });
});
