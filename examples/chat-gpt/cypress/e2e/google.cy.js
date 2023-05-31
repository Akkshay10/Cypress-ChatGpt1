
describe('Google Search', () => {
  it('should search for fast cars', () => {
    cy.visit('https://google.com');
    cy.get('input[name="q"]').type('fast cars{enter}');
  });
});