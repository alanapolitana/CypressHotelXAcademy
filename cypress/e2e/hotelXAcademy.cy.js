describe('Hotel Page Tests', () => {
  // Verifica que la información del hotel esté presente
  it('should display hotel information', () => {
    cy.visit('https://automationintesting.online'); // Asegúrate de usar la URL correcta

    // Verifica que el nombre del hotel esté presente
    cy.contains('Shady Meadows B&B').should('be.visible');
    
    // Verifica que la dirección esté presente
    cy.contains('Strosmajerova 122').should('be.visible');
    
    // Verifica que el número de teléfono esté presente
    cy.contains('06265498733').should('be.visible');
    
    // Verifica que el correo electrónico esté presente
    cy.contains('fakeemail@email.com').should('be.visible');
  });

  // Verifica que haya al menos una imagen visible
  it('should have at least one visible image', () => {
    cy.visit('https://automationintesting.online'); // Asegúrate de usar la URL correcta
    
    // Verifica que haya al menos una imagen visible en la página
    cy.get('img').should('be.visible').and('have.length.greaterThan', 0);
  });

  // Verifica que el texto de la descripción del hotel sea el esperado
  it('should display the correct hotel description', () => {
    cy.visit('https://automationintesting.online'); // Asegúrate de usar la URL correcta
    
    // Verifica que el texto de la descripción contenga el texto esperado
    cy.contains('Restful-booker-platform').should('be.visible');
    cy.contains('Your one stop shop to practise Software Testing!').should('be.visible');
    cy.contains('Testing is more than just finding bugs').should('be.visible');
  });
});

