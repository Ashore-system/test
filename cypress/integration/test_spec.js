describe('HTML Test', () => {
  it('Should load the homepage and check the heading', () => {
    cy.visit('http://localhost:8080'); // Assuming you are running a local server
    cy.get('h1').should('contain.text', 'Hello, GitHub Actions!');
  });
});
