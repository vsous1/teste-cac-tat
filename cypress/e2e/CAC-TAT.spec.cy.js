describe('Central de Atendimento ao Cliente TAT', function() {
    
    beforeEach(() => {
    
      cy.visit('./src/index.html')
      })
    
      it('verifica o título da aplicação', function() {
  
        cy.title().should('eq', 'Central de Atendimento ao Cliente TAT')
    })
    
      it('Prenche os dados do formulário e verifica se as respostas foram enviadas', function() {
  
        const longText = 'A Ética a Nicômaco ou Ética a Nicómaco é a principal obra de Aristóteles sobre Ética. Nela se expõe sua concepção teleológica e eudaimonista de racionalidade prática, sua concepção da virtude como mediania e suas considerações acerca do papel do hábito e da prudência'
        
        cy.fillMandatoryFieldsAndSubmit()
        cy.get('.success').should('be.visible')
      })
  
      it ('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', function() {
  
        cy.fillIncorrectFields()
      })
  
      it ('se um valor não-numérico for digitado, seu valor continuará vazio.', function() {
        
        cy.fillIncorrectFields()
          .should('have.value', '')
      })
  
      it ('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', function(){
        
        cy.fillIncorrectFields()
        .get('#phone-checkbox')
        .check()
        cy.contains('.button', 'Enviar').click()
        
        cy.get('.error').should('be.visible')
      })
        
      it ('preenche e limpa os campos nome, sobrenome, email e telefone', function() {
        
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
  
      it ('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', function(){
  
        cy.contains('.button', 'Enviar').click()
        cy.get('.error').should('be.visible')
  
      })
    
      it ('envia o formuário com sucesso usando um comando customizado', function() {
       
        cy.fillMandatoryFieldsAndSubmit()
        cy.get('.success').should('be.visible')
      })
  
      it ('seleciona um produto (YouTube) por seu texto', function(){
  
      cy.get('#product').select('YouTube')
     })
  
      it ('seleciona um produto (Mentoria) por seu valor (value)', function(){
        
        cy.get('#product')
        .select('Mentoria')
        .should('have.value', 'mentoria')   
      })
  
      it ('seleciona um produto (Blog) por seu índice', function(){
        
        cy.get('#product')
        .select(1)
        .should('have.value', 'blog')
      })
  
      it ('marca o tipo de atendimento "Feedback"', function(){
        
        cy.get('input[type="radio"][value="feedback"]')
          .click()
          .should('have.value','feedback')
      })
  
      it ('marca cada tipo de atendimento', function() {
        cy.get('input[type="radio"]')
          .should('have.length', 3) //conta quantos elementos tem
          .each(function($radio) {  // função para selecionar os 3 elementos do botão do tipo radio
            cy.wrap($radio).check() // check nos 3 botões do tipo radio
            cy.wrap($radio).should('be.checked') // should para checkar se os 3 botões do tipo radio foram marcados
          })
         })
  
      it ('marca ambos checkboxes, depois desmarca o último', function(){
        cy.get('input[type="checkbox"]')
        .check()
        .should('be.checked')
        .last()
        .uncheck()
        .should('not.be.checked')
      })
  
      it ('seleciona um arquivo da pasta fixtures', function() {
        cy.get('#file-upload')
          .should('not.have.value')   
          .selectFile('./cypress/fixtures/example.json')   
          .should(function($input) {
            console.log($input)
            expect($input[0].files[0].name).to.equal('example.json')
          })
  
      
      })
  
      it ('seleciona um arquivo simulando um drag-and-drop', function(){  
        cy.get('#file-upload')
          .should('not.have.value')
          .selectFile('./cypress/fixtures/example.json', {action: 'drag-drop'}) // forma como vamos levar o arquivo para o site, no caso arrastando o arquivo pra cima do campo
          .should(function($input) {
            console.log($input)
            expect($input[0].files[0].name).to.equal('example.json')
      
      })
    
    })
  
    it ('seleciona um arquivo utilizando uma fixture para a qual foi dada um alias', function(){
     cy.fixture('example.json').as('sampleFile')
     cy.get('#file-upload')
       .selectFile('@sampleFile')
       .should(function($input) {
        console.log($input)
        expect($input[0].files[0].name).to.equal('example.json')
      })
    })
  
    it ('verifica que a política de privacidade abre em outra aba sem a necessidade de um clique', function(){
      cy.get('a').should('have.attr', 'target', '_blank')
    })
  
    it('acessa a página da política de privacidade removendo o target e então clicando no link', function (){
      cy.get('a').invoke('removeAttr', 'target')
      cy.get('a').click()
  
      cy.contains('Talking About Testing').should('be.visible')
    
    })
  
    
     
  })
  