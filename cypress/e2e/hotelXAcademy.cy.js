describe('Hotel Page Tests', () => {
 
  it('should display hotel information', () => {
    cy.visit('https://automationintesting.online'); 

    cy.contains('Shady Meadows B&B').should('be.visible');

    cy.contains('Strosmajerova 122').should('be.visible');

    cy.contains('06265498733').should('be.visible');

    cy.contains('fakeemail@email.com').should('be.visible');
  });

  
  it('should have at least one visible image', () => {
    cy.visit('https://automationintesting.online');
    
   
    cy.get('img').should('be.visible').and('have.length.greaterThan', 0);
  });

 
  it('should display the correct hotel description', () => {
    cy.visit('https://automationintesting.online');
    

    cy.contains('Restful-booker-platform').should('be.visible');
    cy.contains('Your one stop shop to practise Software Testing!').should('be.visible');
    cy.contains('Testing is more than just finding bugs').should('be.visible');
  });
});

