
Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function(){

    const longText = 'A Ética a Nicômaco ou Ética a Nicómaco é a principal obra de Aristóteles sobre Ética. Nela se expõe sua concepção teleológica e eudaimonista de racionalidade prática, sua concepção da virtude como mediania e suas considerações acerca do papel do hábito e da prudência'
  
  cy.get('#firstName').type('Victor')
  cy.get('#lastName').type('Sousa')
  cy.get('#email').type('teste@teste.com')
  cy.get('#open-text-area').type(longText, {delay: 0})
  cy.get('.button').click()
})

Cypress.Commands.add('fillIncorrectFields', function(){

    const longText = 'A Ética a Nicômaco ou Ética a Nicómaco é a principal obra de Aristóteles sobre Ética. Nela se expõe sua concepção teleológica e eudaimonista de racionalidade prática, sua concepção da virtude como mediania e suas considerações acerca do papel do hábito e da prudência'
  
    cy.get('#firstName').type('Victor')
    cy.get('#lastName').type('Sousa')
    cy.get('#email').type('teste@teste,com')
    cy.get('#open-text-area').type(longText, {delay: 0})
    cy.get('button[type="submit"]')
  })