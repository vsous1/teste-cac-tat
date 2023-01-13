
Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function() {
  cy.get('#firstName').type('Victor')
  cy.get('#lastName').type('Sousa')
  cy.get('#email').type('teste@teste.com')
  cy.get('#open-text-area').type('teste')
  cy.get('.button').click()
});

Cypress.Commands.add('fillIncorrectFields', function(){

    const longText = 'A Ética a Nicômaco ou Ética a Nicómaco é a principal obra de Aristóteles sobre Ética. Nela se expõe sua concepção teleológica e eudaimonista de racionalidade prática, sua concepção da virtude como mediania e suas considerações acerca do papel do hábito e da prudência'
  
    cy.get('#firstName').type('Victor')
    cy.get('#lastName').type('Sousa')
    cy.get('#email').type('teste@teste,com')
    cy.get('#phone')
    cy.get('button[type="submit"]').click()
  })

  Cypress.Commands.add('fillAndClear', function(){

    cy.get('#firstName')
      .type('Victor')
      .should('have.value', 'Victor')
      .clear()
      .should('have.value', '')
      cy.get('#lastName')
      .type('Sousa')
      .should('have.value', 'Sousa')
      .clear()
      .should('have.value', '')
      cy.get('#email')
      .type('email1@gmail.com')
      .should('have.value','email1@gmail.com')
      .clear()
      .should('have.value', '')
      cy.get('#phone')
      .type('12345678')
      .should('have.value','12345678')
      .clear()
      .should('have.value', '')
      cy.get('#open-text-area')
      .type('teste')
      .should('have.value', 'teste')
      .clear()
      .should('have.value', '')

  })