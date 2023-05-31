
describe('Sauce Demo Login', () => {
  it('should login to the website', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').click()
    cy.url().should('include', 'inventory.html')
  })
})