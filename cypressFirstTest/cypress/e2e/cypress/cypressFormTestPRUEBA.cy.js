// Ejercicios día 24 Miércoles-Abril '24

/* Caso de prueba para automatizar:
       1-Crear un nuevo archivo de prueba en la carpeta e2e llamado "cypressFormTest.cy.js"
       2-Añadir un beforeEach que visite la url "https://commitquality.com/practice-contact-form"*/

describe('template spec', () => {
    beforeEach(() => {
        cy.visit('https://commitquality.com/practice-contact-form');   
      
    })
    // 3-Crear 1 tests que rellene todos los campos del formulario y que después de hacer click en el botón "submit" compruebe que aparece el texto "Thanks for contacting us, we will never respond!" 
    it('introducimos datos en formulario y al hacer cick nos devuelve un texto "Thanks for contacting us, we will never respond!"', () => 
    {
        //cy.get('body').should('not.contains', 'Query Type is required.');
        cy.contains('Name is required.').should('not.exist');  // Comprobamos que los textos no están visibles
        cy.contains('Email is required.').should('not.exist');  // igual
        cy.contains('Query Type is required.').should('not.exist');  // igual
        cy.get('[data-testid="name"]').type('María Mercedes');
        cy.get('[data-testid="name"]').clear(); 
        cy.get('form').click();
        //cy.get('form').should('contain', 'Name is required.'); //Quizás más correcta pero menos específica
        cy.get(':nth-child(1) > .error').should('contain', 'Name is required.'); //porque ésta está hecha con la lupa
        cy.get('[data-testid="name"]').type('María Mercedes')
        



        cy.get('[data-testid="email"]').type('merxi_83@hotmail.com');
        cy.get('[data-testid="email"]').clear();        
        cy.get('form').click();
        
          //--> 2 formas de hacer que aparezca el texto, la primera es más correcta
                  //porque dice exactamente dónde aparece
        //cy.get('form').should('contain', 'Email is required.');
        cy.get('#root > div > div > div > div > form > div:nth-child(2) > div').should('contain', 'Email is required.');
        cy.get('[data-testid="email"]').clear(); 
        cy.get('[data-testid="email"]').type('merxi_83-hotmail.com');
        cy.get('form').click();
        cy.get('form').should('contain', 'Email is invalid.');
        cy.get('[data-testid="email"]').clear();
        cy.get('[data-testid="email"]').type('merxi_83-hotmail.com');
           

    
        //cy.contains('Email is required.').should('exist'); ///---> Se puede hacer de esta forma también
        //3 cy.get('form').should('contain', 'Name is required.');Éste da error

        //cy.get('form').should('exist').and('be.visible').and('contain', 'Name is required.'); revisar, no está bien

        
        cy.get('[data-testid="query-type"]').contains('Select an option'); //[data-testid="query-type"] Es más correcto usar el Id #query-type
       
        cy.get('[data-testid="query-type"]').should('exist', 'General');
        cy.get('[data-testid="query-type"]').should('exist', 'Technical');
        cy.get('[data-testid="query-type"]').should('exist', 'Billing');
        //cy.select('[data-testid="query-type"]').contains('Select an option').should('exist', 'Technical');
        //cy.select('[data-testid="query-type"]').contains('Select an option').should('exist', 'Billing');
        cy.get('[data-testid="query-type"]').select('General');
        cy.wait(1000);
        cy.get('#query-type').should('have.value', 'General');
       // cy.get('[data-top="551"]').contains('General');
        //cy.get('[data-testid="query-type"]').contains('General')
        cy.get('[data-testid="query-type"]').select('Technical');
        cy.wait(1000);
        cy.get('[data-testid="query-type"]').should('have.value', 'Technical');
        cy.get('[data-testid="query-type"]').select('Billing');
        cy.wait(1000);
        cy.get('[data-testid="query-type"]').should('have.value', 'Billing');
        cy.get('[data-testid="query-type"]').select('Select an option');
        cy.get('body').click();
        cy.get('form').should('contain', 'Query Type is required')
         // La siguiente forma es si existe en el código, pero NO si aparece
        //cy.get('form').should('exist', 'Query Type is required.');

        
        cy.get('[data-testid="dob"]').type('yyyy-MM-dd');
        cy.get('[data-testid="dob"]').type('2024-04-24');
        cy.get('[data-testid="dob"]').clear();
        cy.get('form').click();
        cy.get('form').should('contain', 'Date of Birth is required.');

        cy.get('[data-testid="practice-checkbox"]').check()
        //cy.get('[data-testid="practice-checkbox"]').ischeck();
        cy.get('[data-testid="submit-button"]').click()
    })
        
})

    

    




