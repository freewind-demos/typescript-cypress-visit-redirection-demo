describe('cypress', () => {
  it('wait for redirection', () => {
    cy.visit('http://deelay.me/1000/https://example.cypress.io/')
    cy.get('h1').should('have.text', 'Kitchen Sink');
  })
})
