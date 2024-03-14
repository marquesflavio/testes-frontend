describe('My First Test', () => {
  it('finds the content type', () => {
    //acessou o site
    cy.visit('https://example.cypress.io')
    //procurou o elemento type e clicou nele
    cy.contains('type').click()
    //should be on a new URL which
    //incluiu '/commands/actions' na URL
    cy.url().should('include', '/commands/actions')
    //buscou um campo de e-mail e digitou o e-mail fake
    cy.get('.action-email').type('fake@email.com')
    //Verify that the value has been updated
    cy.get('.action-email').should('have.value', 'fake@email.com')
  })
})

//https://docs.cypress.io/guides/end-to-end-testing/writing-your-first-end-to-end-test